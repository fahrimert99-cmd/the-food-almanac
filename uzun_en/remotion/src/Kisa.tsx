// Dikey Shorts (1080x1920), tam ekran. Uzun videonun mekanikleri dikey düzene uyarlanmış hâlde:
// - sahne görseli tüm ekranı kaplar, konuya ortalanır, yavaş yakınlaşır; geniş kompozisyonlar yatay kaydırılır
//   (karşılaştırma görselinin iki yanı da görünsün);
// - üstte önce kanca başlığı, ilk cümleden sonra her parçanın kinetik başlığı (satırlar sırayla kayarak gelir);
// - kaynak etiketi (ör. "Drouin-Chartier et al. · BMJ · 2020") ve sayı rozeti (sayaçla açılır: 215,000 / +6%);
// - kelime kelime vurgulanan büyük altyazı, sayılar hep altın renkte;
// - sonda "tam videoyu izle + abone ol" kapanışı (uzun videonun kapağı, "subscribe" anında nabız atan düğme).
// YouTube'un alt arayüzü ~1480 px altını örttüğü için yazılar üst 1450 px içinde. Veri: kisa.py -> kisa_props.json.
import React from "react";
import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import "./fontlar";
import { ANTON, INTER } from "./fontlar";
import { RENK, eout, ilerle, pop } from "./zaman";

type Kelime = { w: string; t: number };
type BaslikVeri = { satirlar: string[]; vurgu?: string; not?: string } | null;
export type KisaVeri = {
  fps: number; toplam: number; baslik: string[]; kanal: string; kapanis: number; kanca_son?: number; kapak?: string | null;
  parcalar: { gorsel: string; bas: number; son: number; kutu: number[] | null; odak?: number; etiket?: string | null;
    baslik?: BaslikVeri; kaydir?: boolean; yer?: { olcek: number; dy: number } | null; katman?: boolean }[];
  altyazi: { t0: number; t1: number; kelimeler: Kelime[] }[];
};

const GECIS = 0.35;
const KENAR = "linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%), "
  + "linear-gradient(180deg, transparent 0, #000 6%, #000 94%, transparent 100%)";
const GOLGE = "0 4px 18px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.9)";
const SAYI = /\d/;
const ara = (t: number, a: number[], b: number[]) => interpolate(t, a, b, { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

// "215,000" / "+6%" / "HR 0.93" -> sayaçla açılan metin (sayı kısmı 0'dan hedefe; biçim korunur).
const sayacMetni = (vurgu: string, p: number) => {
  const m = vurgu.match(/^(.*?)(\d[\d,]*(?:\.\d+)?)(.*)$/);
  if (!m) return vurgu;
  const hedef = parseFloat(m[2].replace(/,/g, ""));
  const ondalik = (m[2].split(".")[1] || "").length;
  const v = hedef * eout(p);
  const s = m[2].includes(",") ? Math.round(v).toLocaleString("en-US") : v.toFixed(ondalik);
  return `${m[1]}${s}${m[3]}`;
};

const KinetikSatirlar: React.FC<{ satirlar: string[]; t: number; bas: number; ust: number; azami?: number }> = ({
  satirlar, t, bas, ust, azami = 165,
}) => (
  <div style={{ position: "absolute", top: ust, left: 0, right: 0, textAlign: "center" }}>
    {satirlar.map((s, i) => {
      const a = eout(ilerle(t, bas + i * 0.14, 0.4));
      return (
        <div key={i} style={{ fontFamily: ANTON, fontSize: Math.min(azami, Math.floor(1000 / (s.length * 0.5))), lineHeight: 1.0,
          letterSpacing: 1, color: i === satirlar.length - 1 && satirlar.length > 1 ? RENK.altinAcik : "#FFFFFF",
          textShadow: GOLGE, opacity: a, transform: `translateY(${(1 - a) * 40}px)` }}>{s}</div>
      );
    })}
  </div>
);

const KaynakCipi: React.FC<{ metin: string; t: number; bas: number; ust: number }> = ({ metin, t, bas, ust }) => {
  const a = eout(ilerle(t, bas, 0.5));
  return (
    <div style={{ position: "absolute", top: ust, left: 0, right: 0, display: "flex", justifyContent: "center", opacity: a,
      transform: `translateY(${(1 - a) * -12}px)` }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16, background: RENK.lacivert, borderRadius: 999,
        padding: "14px 32px 14px 22px", color: "#fff", fontFamily: INTER, fontWeight: 800, fontSize: 34,
        boxShadow: "0 8px 22px rgba(0,0,0,0.35)" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: RENK.altin }} />{metin}
      </div>
    </div>
  );
};

const SayiRozeti: React.FC<{ vurgu: string; not?: string; t: number; bas: number; ust: number }> = ({ vurgu, not, t, bas, ust }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 540, top: ust, width: 560, transform: `translate(-50%, 0) scale(${sc})`,
      transformOrigin: "50% 0", opacity: al, padding: "10px 24px 22px", textAlign: "center", background: "#FCF8EC",
      border: `6px solid ${RENK.altin}`, borderRadius: 34, boxShadow: "0 14px 34px rgba(0,0,0,0.35)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 150, lineHeight: 1.05, color: RENK.altin, whiteSpace: "nowrap" }}>
        {sayacMetni(vurgu, ilerle(t, bas, 1.1))}
      </div>
      {not && <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, lineHeight: 1.25, color: RENK.lacivert }}>{not}</div>}
    </div>
  );
};

const Altyazi: React.FC<{ v: KisaVeri; t: number; ust: number }> = ({ v, t, ust }) => {
  const satir = v.altyazi.find((a) => t >= a.t0 && t < a.t1);
  if (!satir) return null;
  return (
    <div style={{ position: "absolute", top: ust, left: 50, right: 50, textAlign: "center", fontFamily: INTER, fontWeight: 800,
      fontSize: 84, lineHeight: 1.12, color: "#FFFFFF", textShadow: GOLGE, WebkitTextStroke: "2px rgba(0,0,0,0.55)" }}>
      {satir.kelimeler.map((k, i) => {
        const aktif = t >= k.t && (i + 1 >= satir.kelimeler.length || t < satir.kelimeler[i + 1].t);
        return (
          <span key={i} style={{ color: aktif || SAYI.test(k.w) ? RENK.altinAcik : "#FFFFFF", display: "inline-block",
            // etkin kelime büyür; uzun kelimede büyüme yanındaki boşluğu yemesin (her yana en çok ~8 px)
            margin: "0 12px", transform: aktif ? `scale(${Math.min(1.08, 1 + 16 / (k.w.length * 50))})` : "none" }}>{k.w}</span>
        );
      })}
    </div>
  );
};

export const Kisa: React.FC<KisaVeri> = (v) => {
  const t = useCurrentFrame() / v.fps;
  const kapanis = ara(t, [v.kapanis + 0.1, v.kapanis + 0.5], [0, 1]);
  const icerik = ara(t, [v.kapanis - 0.2, v.kapanis + 0.15], [1, 0]);
  const abone = v.altyazi.flatMap((a) => a.kelimeler).find((k) => k.t >= v.kapanis && /^subscribe/i.test(k.w));
  const nabiz = abone && t >= abone.t ? 1 + 0.1 * Math.max(0, Math.sin((t - abone.t) * Math.PI * 2.2)) : 1;
  const kancaSon = v.kanca_son ?? 4;
  const pi = v.parcalar.findIndex((p, i) => t >= (i === 0 ? -1 : p.bas - GECIS)
    && (i + 1 >= v.parcalar.length || t < v.parcalar[i + 1].bas - GECIS));
  const aktif = pi >= 0 ? v.parcalar[pi] : null;
  const baslikBas = aktif ? Math.max(aktif.bas, pi === 0 ? kancaSon : 0) : 0;
  return (
    <AbsoluteFill style={{ backgroundColor: RENK.lacivert }}>
      {v.parcalar.map((p, i) => {
        const son = i + 1 < v.parcalar.length ? v.parcalar[i + 1].bas : v.toplam;
        const bas = i === 0 ? -1 : p.bas - GECIS;
        if (t < bas - 0.1 || t > son + 0.1) return null;
        // odak: kisa.py'nin bulduğu en dolu dikey pencere; karşılaştırma görselleri soldan sağa kaydırılır,
        // diğerleri odak çevresinde hafifçe süzülür.
        const orta = p.odak ?? 50;
        const ox = p.kaydir ? ara(t, [Math.max(0, bas), son], [8, 92])
          : ara(t, [Math.max(0, bas), son], i % 2 === 0 ? [orta - 3, orta + 3] : [orta + 3, orta - 3]);
        const op = i === 0 ? 1 : ara(t, [bas, p.bas], [0, 1]);
        const kb = ara(t, [Math.max(0, bas), son], [1.0, p.yer ? 1.06 : 1.1]);
        if (p.katman) {
          // 2,5D: arka plan (konu silinmiş) yavaş, konu (saydam PNG) hızlı yakınlaşır ve ters yöne hafifçe kayar;
          // kamera nesnenin etrafında dönüyormuş hissi. Katmanlar kisa.py/katman.py'den (rembg + inpaint).
          const kok = `img/${p.gorsel}`;
          const yon = i % 2 === 0 ? 1 : -1;
          const ilerle = ara(t, [Math.max(0, bas), son], [0, 1]);
          const ol = p.yer ? p.yer.olcek : 1;
          const dy = p.yer ? p.yer.dy * 1920 : 0;
          const arkaT = `translate(${-yon * 14 * ilerle}px, ${dy}px) scale(${ol * (1.02 + 0.03 * ilerle)})`;
          const onT = `translate(${yon * 26 * ilerle}px, ${dy - 18 * ilerle}px) scale(${ol * (1.0 + 0.12 * ilerle)})`;
          const tam = { position: "absolute" as const, inset: 0, width: "100%", height: "100%", objectFit: "cover" as const,
            transformOrigin: "50% 60%" };
          return (
            <AbsoluteFill key={i} style={{ opacity: op }}>
              {p.yer && <Img src={staticFile(`${kok}.jpg`)} style={{ ...tam, filter: "blur(36px) brightness(0.72)", transform: "scale(1.2)" }} />}
              <Img src={staticFile(`${kok}_arka.jpg`)} style={{ ...tam, transform: arkaT,
                ...(p.yer ? { WebkitMaskImage: KENAR, WebkitMaskComposite: "source-in", maskImage: KENAR, maskComposite: "intersect" } : {}) }} />
              <Img src={staticFile(`${kok}_on.png`)} style={{ ...tam, transform: onT,
                filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.28))" }} />
            </AbsoluteFill>
          );
        }
        if (p.yer) {
          // Konu altyazının ve YouTube arayüzünün altında kalmasın: görsel küçültülüp yukarı taşınır (kisa.py dikey_yer);
          // açılan kenarlar aynı görselin bulanık kopyasıyla dolar.
          const src = staticFile(`img/${p.gorsel}.jpg`);
          return (
            <AbsoluteFill key={i} style={{ opacity: op }}>
              <Img src={src} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                filter: "blur(36px) brightness(0.72)", transform: "scale(1.2)" }} />
              <Img src={src} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
                objectPosition: `${ox}% 50%`, transform: `translateY(${p.yer.dy * 1920}px) scale(${p.yer.olcek * kb})`,
                WebkitMaskImage: KENAR, WebkitMaskComposite: "source-in", maskImage: KENAR, maskComposite: "intersect" }} />
            </AbsoluteFill>
          );
        }
        return (
          <Img key={i} src={staticFile(`img/${p.gorsel}.jpg`)} style={{ position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: `${ox}% 50%`, transformOrigin: `${orta}% 50%`, opacity: op,
            transform: `scale(${kb})` }} />
        );
      })}
      <AbsoluteFill style={{ background: "linear-gradient(180deg, rgba(10,16,28,0.82) 0%, rgba(10,16,28,0.5) 22%, "
        + "rgba(10,16,28,0) 38%, rgba(10,16,28,0) 52%, rgba(10,16,28,0.55) 64%, rgba(10,16,28,0.7) 100%)" }} />
      {icerik > 0 && (
        <AbsoluteFill style={{ opacity: icerik }}>
          {t < kancaSon + 0.2
            ? <KinetikSatirlar satirlar={v.baslik} t={t} bas={-1} ust={150} />
            : aktif?.baslik && <KinetikSatirlar key={pi} satirlar={aktif.baslik.satirlar} t={t} bas={baslikBas} ust={150} azami={150} />}
          {aktif?.etiket && <KaynakCipi metin={aktif.etiket} t={t} bas={aktif.bas + 0.2} ust={470} />}
          {aktif?.baslik?.vurgu && t >= kancaSon && (
            <SayiRozeti vurgu={aktif.baslik.vurgu} not={aktif.baslik.not} t={t} bas={baslikBas + 0.4} ust={aktif.etiket ? 580 : 500} />
          )}
          {t < v.kapanis && <Altyazi v={v} t={t} ust={1230} />}
        </AbsoluteFill>
      )}
      {kapanis > 0 && (
        <AbsoluteFill style={{ opacity: kapanis }}>
          <AbsoluteFill style={{ backgroundColor: RENK.lacivert }} />
          <KinetikSatirlar satirlar={["WATCH THE", "FULL VIDEO"]} t={t} bas={v.kapanis + 0.1} ust={130} azami={160} />
          {v.kapak && (
            <div style={{ position: "absolute", left: 90, top: 500, width: 900, height: 506, borderRadius: 28, overflow: "hidden",
              boxShadow: "0 24px 60px rgba(0,0,0,0.6)", border: "5px solid #FFFFFF",
              transform: `scale(${ara(t, [v.kapanis, v.kapanis + 0.6], [0.88, 1])})` }}>
              <Img src={staticFile(`img/${v.kapak}.jpg`)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
          <div style={{ position: "absolute", top: 1040, left: 0, right: 0, textAlign: "center", fontFamily: INTER, fontWeight: 800,
            fontSize: 46, color: "#FFFFFF", textShadow: GOLGE }}>{v.kanal}</div>
          <div style={{ position: "absolute", top: 1115, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
            <div style={{ background: "#FF0033", color: "#FFFFFF", fontFamily: INTER, fontWeight: 800, fontSize: 62, letterSpacing: 3,
              padding: "20px 64px", borderRadius: 60, boxShadow: "0 10px 30px rgba(255,0,51,0.45)", transform: `scale(${nabiz})` }}>
              SUBSCRIBE
            </div>
          </div>
          <Altyazi v={v} t={t} ust={1275} />
        </AbsoluteFill>
      )}
    </AbsoluteFill>
  );
};
