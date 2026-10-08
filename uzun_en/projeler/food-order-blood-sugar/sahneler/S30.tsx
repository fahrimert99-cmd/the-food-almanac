// Sahne 30 — meyve suyu kan şekerini bütün meyveden hızlı yükseltir: lifin çoğu gitmiş, sıvı mideden çabuk çıkar.
import React from "react";
import { AltSis, Etiket, INTER, IkonYol, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

type N = [number, number];

// Görsel 30: sol üstte büyüteç (portakal kesiti; beyaz zarlar = lif), ortada bütün ve yarım portakallar, sağda bardakta meyve suyu.
// Yazı/imza kusuru yok. Boş alanlar (görsel koordinatı): üst orta x 726-1146 / y 88-400 (grafik, sonra kart),
// sol x 100-390 (etiket hapları), bardağın sağı x 1625-1790.
const KX = 726, KY = 88, KW = 420, KH = 312;
const SU_CAPA: N = [1440, 520];

// temsili eğriler (sayı yok): u = zaman 0-1, değer 0-1
const egri = (u: number, tepe: number, boy: number, k: number) =>
  u <= 0 ? 0 : boy * Math.pow(u / tepe, k) * Math.exp(k * (1 - u / tepe));
const SU = (u: number) => egri(u, 0.24, 1, 1.6);
const BUTUN = (u: number) => egri(u, 0.58, 0.74, 2);
const GX0 = 46, GX1 = 396, GYB = 270, GYT = 106;
const gx = (u: number) => GX0 + u * (GX1 - GX0);
const gy = (v: number) => GYB - v * (GYB - GYT);
const yol = (f: (u: number) => number, p: number) => {
  const out: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const u = Math.min(p, i / 60);
    out.push(`${gx(u).toFixed(1)},${gy(f(u)).toFixed(1)}`);
    if (u >= p) break;
  }
  return out.join(" ");
};

/** Temsili kan şekeri grafiği kartı: önce suyun hızlı eğrisi, sonra bütün meyvenin yavaş eğrisi. */
const Grafik: React.FC<{ t: number; bas: number; tSu: number; tHizli: number; tButun: number; tButunAd: number; bitis: number }> = ({
  t, bas, tSu, tHizli, tButun, tButunAd, bitis,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis, 0.4);
  if (a <= 0) return null;
  const pSu = eout(ilerle(t, tSu, 0.75));
  const pBu = eout(ilerle(t, tButun, 0.9));
  const aSu = eout(ilerle(t, tHizli, 0.4)), aBu = eout(ilerle(t, tButunAd, 0.4));
  const halka = ilerle(t, tHizli, 0.9);
  const lejant = (renk: string, metin: string, op: number) => (
    <div style={{ display: "flex", alignItems: "center", gap: 9, opacity: op, transform: `translateY(${(1 - op) * 8}px)` }}>
      <span style={{ width: 28, height: 7, borderRadius: 4, background: renk }} />
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 21, letterSpacing: 1.5, color: renk }}>{metin}</span>
    </div>
  );
  return (
    <div style={{ position: "absolute", left: KX, top: KY, width: KW, height: KH, transform: `scale(${sc})`, transformOrigin: "50% 0",
      opacity: a, background: "#FCF8EC", border: `3px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <div style={{ position: "absolute", left: 22, top: 16, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2.5, color: RENK.lacivert }}>
        BLOOD SUGAR
      </div>
      <div style={{ position: "absolute", right: 16, top: 16, padding: "3px 10px", borderRadius: 999, border: `2px solid ${RENK.gri}`,
        fontFamily: INTER, fontWeight: 800, fontSize: 14, letterSpacing: 2, color: RENK.gri }}>ILLUSTRATIVE</div>
      <div style={{ position: "absolute", left: 22, top: 56, display: "flex", gap: 24 }}>
        {lejant(RENK.mercan, "JUICE", aSu)}
        {lejant(RENK.yesil, "WHOLE FRUIT", aBu)}
      </div>
      <svg width={KW} height={KH} style={{ position: "absolute", left: -3, top: -3 }}>
        <polyline points={`${GX0},${GYT - 10} ${GX0},${GYB} ${GX1 + 8},${GYB}`} fill="none" stroke={RENK.murekkep} strokeWidth={3} />
        <text x={GX1 + 6} y={GYB + 28} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 17, letterSpacing: 2, fill: RENK.gri }}>TIME →</text>
        {pBu > 0 && <polyline points={yol(BUTUN, pBu)} fill="none" stroke={RENK.yesil} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />}
        {pSu > 0 && <polyline points={yol(SU, pSu)} fill="none" stroke={RENK.mercan} strokeWidth={7} strokeLinecap="round" strokeLinejoin="round" />}
        {halka > 0 && halka < 1 && (
          <circle cx={gx(0.24)} cy={gy(1)} r={8 + 26 * halka} fill="none" stroke={RENK.mercan} strokeWidth={3} opacity={(1 - halka) * 0.9} />
        )}
      </svg>
    </div>
  );
};

/** Kelime kelime gelen satır (yer sabit; kelime söylenince belirir). */
const Kelimeler: React.FC<{ t: number; ogeler: { metin: string; bas: number; renk?: string; satirSonu?: boolean }[] }> = ({ t, ogeler }) => (
  <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 29, lineHeight: 1.2, letterSpacing: 1, color: RENK.murekkep }}>
    {ogeler.map((o, i) => {
      const p = eout(ilerle(t, o.bas, 0.35));
      return (
        <React.Fragment key={i}>
          <span style={{ display: "inline-block", opacity: p, transform: `translateY(${(1 - p) * 10}px)`, color: o.renk }}>{o.metin}</span>
          {o.satirSonu ? <br /> : i < ogeler.length - 1 ? " " : null}
        </React.Fragment>
      );
    })}
  </div>
);

const Satir: React.FC<{ t: number; bas: number; ikon: "carpi" | "saat"; renk: string; children: React.ReactNode }> = ({ t, bas, ikon, renk, children }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 16, opacity: al > 0 ? 1 : 0 }}>
      <div style={{ width: 52, height: 52, flex: "none", borderRadius: "50%", background: renk, display: "flex", alignItems: "center",
        justifyContent: "center", transform: `scale(${sc})`, opacity: al }}>
        <IkonYol ad={ikon} boyut={ikon === "carpi" ? 28 : 34} renk="#fff" kalinlik={ikon === "carpi" ? 7 : 5} />
      </div>
      <div style={{ paddingTop: 8 }}>{children}</div>
    </div>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // hafif geri çekilme: sonda tüm etiketler rahatça görünür
  const pencere = kameraYolu(t, s.sure, [60, 46, 1780], [24, 14, 1872]);
  // 1. cümle
  const tSuyu = K(0, "juice"), tYuksel = K(0, "raise"), tKan = K(0, "blood sugar"), tHizli = K(0, "faster");
  const tAyni = K(0, "same fruit"), tButun = K(0, "eaten whole");
  // 2. cümle
  const tSu2 = K(1, "juice has"), tKayip = K(1, "lost"), tCogu = K(1, "most"), tLif = K(1, "fiber");
  const tSivi = K(1, "liquids"), tCik = K(1, "leave"), tCabuk = K(1, "quickly");
  const bitisGrafik = c[1].bas + 0.65;
  const [kSc, kAl] = pop(t, tKayip, 0.55);
  const halka2 = ilerle(t, tSu2, 1.0);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={pencere}>
        <Etiket t={t} bas={tSuyu - 0.1} capa={SU_CAPA} konum={[1708, 404]} metin="JUICE" renk={RENK.mercan} boyut={28} />
        {/* "The juice" — bardağa ikinci nabız */}
        {halka2 > 0 && halka2 < 1 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <circle cx={SU_CAPA[0]} cy={SU_CAPA[1]} r={14 + 46 * halka2} fill="none" stroke={RENK.mercan} strokeWidth={5} opacity={(1 - halka2) * 0.9} />
          </svg>
        )}
        <Etiket t={t} bas={tButun} capa={[478, 724]} konum={[252, 520]} metin="WHOLE FRUIT" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={tLif} capa={[345, 252]} konum={[176, 318]} metin="FIBER" renk={RENK.yesil} boyut={28} />
        <Grafik t={t} bas={tYuksel} tSu={tKan} tHizli={tHizli} tButun={tAyni} tButunAd={tButun} bitis={bitisGrafik} />
        {kAl > 0 && (
          <div style={{ position: "absolute", left: KX, top: KY, width: KW, boxSizing: "border-box", padding: "18px 24px 22px",
            transform: `scale(${kSc})`, transformOrigin: "50% 0", opacity: kAl, background: "#FCF8EC", border: `3px solid ${RENK.mercan}`,
            borderRadius: 22, boxShadow: "0 10px 26px rgba(48,40,34,0.18)", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 4,
              color: RENK.mercan }}>
              <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.mercan }} />
              THE JUICE
            </div>
            <Satir t={t} bas={tKayip} ikon="carpi" renk={RENK.mercan}>
              <Kelimeler t={t} ogeler={[{ metin: "LOST", bas: tKayip }, { metin: "MOST", bas: tCogu }, { metin: "FIBER", bas: tLif, renk: RENK.yesil }]} />
            </Satir>
            <Satir t={t} bas={tSivi} ikon="saat" renk={RENK.altin}>
              <Kelimeler t={t} ogeler={[{ metin: "LIQUIDS", bas: tSivi }, { metin: "LEAVE", bas: tCik, satirSonu: true },
                { metin: "QUICKLY", bas: tCabuk, renk: RENK.mercan }]} />
            </Satir>
          </div>
        )}
      </Kamera>
      <AltSis a={0.55} yukseklik={140} />
    </>
  );
};

export default S30;
