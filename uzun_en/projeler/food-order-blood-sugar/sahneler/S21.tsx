// Sahne 21 — 2017 izlem çalışması: 16 yetişkin (tip 2 diyabet), aynı öğünün üç sürümü.
// Önce üst boşlukta iki sayı bloğu (16 / 3), sonra her tabağın üstüne sürüm kartı (görselle birlikte hareket eder).
import React from "react";
import { ANTON, Baslik, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kis, pop, sol } from "../kutuphane";

// 1. cümlede "days:" duraklaması yanlış eşlendiği için K, 2.5–7.7 sn arasında 1–3 sn erken düşüyor
// (altyazı da öyle). Bu dört an Piper sesinden (edge zamanlarıyla DTW hizalama) ölçüldü.
const OLCULEN = { tip2: 3.35, ucSurum: 5.2, ayniOgun: 6.5, karbIlk: 7.85 };

// görsel koordinatı: tabak merkezleri, kart ve rozet satırları
const TABAK = [365, 965, 1560];
const Y_KART = 168, W_KART = 480, Y_ROZET = 852;

// Küçük hap: renkli nokta + metin
const Hapcik: React.FC<{ t: number; bas: number; metin: string; nokta: string }> = ({ t, bas, metin, nokta }) => {
  const [sc, al] = pop(t, bas, 0.45);
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, display: "flex", alignItems: "center", gap: 9, whiteSpace: "nowrap",
      background: "#fff", border: `2.5px solid ${RENK.murekkep}`, borderRadius: 999, padding: "5px 15px 5px 8px",
      fontFamily: INTER, fontWeight: 800, fontSize: 21, letterSpacing: 1, color: RENK.murekkep, boxShadow: "0 4px 10px rgba(48,40,34,0.12)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: nokta, flex: "none" }} />
      {metin}
    </div>
  );
};

const Ok: React.FC<{ t: number; bas: number }> = ({ t, bas }) => (
  <span style={{ opacity: eout(ilerle(t, bas, 0.3)), fontFamily: ANTON, fontSize: 30, color: RENK.altin }}>→</span>
);

// Sürüm kartı (görsel koordinatı): numara dairesi + başlık + sıra hapları
const SurumKarti: React.FC<{ t: number; bas: number; x: number; no: number; renk: string; baslik: string; children?: React.ReactNode }> = ({
  t, bas, x, no, renk, baslik, children,
}) => {
  const p = eout(ilerle(t, bas, 0.55));
  if (p <= 0) return null;
  const [sc] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - W_KART / 2, top: Y_KART, width: W_KART, boxSizing: "border-box", opacity: p,
      transform: `translateY(${(1 - p) * -26}px)`, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 24,
      padding: "14px 20px 18px", boxShadow: "0 12px 28px rgba(48,40,34,0.18)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ width: 62, height: 62, flex: "none", borderRadius: "50%", background: renk, color: "#fff", display: "flex",
          alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 38, transform: `scale(${sc})` }}>{no}</div>
        <div style={{ fontFamily: ANTON, fontSize: 60, lineHeight: 1.15, color: renk, whiteSpace: "nowrap" }}>{baslik}</div>
      </div>
      <div style={{ height: 46, marginTop: 12, display: "flex", alignItems: "center", gap: 10 }}>{children}</div>
    </div>
  );
};

// Üstteki sayı bloğu: büyük rakam + iki satır (ekran koordinatı, x = orta)
const SayiBlok: React.FC<{
  t: number; bas: number; bas2: number; bitis: number; sayi: string; s1: string; s2: string; x: number; y: number; renk: string;
}> = ({ t, bas, bas2, bitis, sayi, s1, s2, x, y, renk }) => {
  const a = sol(t, bitis);
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0 || a <= 0) return null;
  const p1 = eout(ilerle(t, bas + 0.12, 0.45)), p2 = eout(ilerle(t, bas2, 0.45));
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)", opacity: a, display: "flex",
      alignItems: "center", gap: 22 }}>
      <div style={{ fontFamily: ANTON, fontSize: 168, lineHeight: 1, color: renk, transform: `scale(${sc})`, opacity: al }}>{sayi}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div style={{ opacity: p1, transform: `translateX(${(1 - p1) * -18}px)`, fontFamily: INTER, fontWeight: 800, fontSize: 46,
          letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>{s1}</div>
        <div style={{ opacity: p2, transform: `translateX(${(1 - p2) * -18}px)`, fontFamily: INTER, fontWeight: 800, fontSize: 30,
          letterSpacing: 1.5, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>{s2}</div>
      </div>
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(0, "2017"), tOn6 = K(0, "sixteen");
  const tKF = OLCULEN.karbIlk, tKL = K(0, "carbohydrates last"), tSon = K(0, "last,");
  const tHep = K(0, "everything"), tSand = K(0, "sandwich-style");
  const cikis = tKF - 0.45;
  const kartlar = [
    { no: 1, renk: RENK.mercan, bas: tKF },
    { no: 2, renk: RENK.yesil, bas: tKL },
    { no: 3, renk: RENK.altin, bas: tHep },
  ];
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1830])}>
        {/* "three versions": tabakların altında numara rozetleri; kart gelince kartın rengini alır */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          {TABAK.map((x, i) => {
            const k = kartlar[i];
            const [sc, al] = pop(t, OLCULEN.ucSurum + i * 0.16, 0.5);
            if (al <= 0) return null;
            const pr = eout(ilerle(t, k.bas, 0.4));
            const halka = ilerle(t, k.bas, 0.9);
            return (
              <g key={i} opacity={al} transform={`translate(${x} ${Y_ROZET}) scale(${sc})`}>
                {halka > 0 && halka < 1 && <circle r={36 + 34 * halka} fill="none" stroke={k.renk} strokeWidth={4} opacity={(1 - halka) * 0.9} />}
                <circle r={36} fill={RENK.lacivert} stroke={RENK.kagitAcik} strokeWidth={5} />
                <circle r={36} fill={k.renk} opacity={pr} />
                <text y={15} textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 42, fill: "#fff" }}>{k.no}</text>
              </g>
            );
          })}
        </svg>
        <SurumKarti t={t} bas={tKF} x={TABAK[0]} no={1} renk={RENK.mercan} baslik="CARBS FIRST">
          <Hapcik t={t} bas={tKF + 0.15} metin="CARBS" nokta={RENK.mercan} />
          <Ok t={t} bas={tKF + 0.45} />
          <Hapcik t={t} bas={tKF + 0.55} metin="REST OF MEAL" nokta={RENK.yesil} />
        </SurumKarti>
        <SurumKarti t={t} bas={tKL} x={TABAK[1]} no={2} renk={RENK.yesil} baslik="CARBS LAST">
          <Hapcik t={t} bas={tKL + 0.15} metin="REST OF MEAL" nokta={RENK.yesil} />
          <Ok t={t} bas={tSon - 0.1} />
          <Hapcik t={t} bas={tSon} metin="CARBS" nokta={RENK.mercan} />
        </SurumKarti>
        <SurumKarti t={t} bas={tHep} x={TABAK[2]} no={3} renk={RENK.altin} baslik="ALL TOGETHER">
          <Hapcik t={t} bas={tSand} metin="SANDWICH-STYLE" nokta={`linear-gradient(90deg, ${RENK.mercan} 50%, ${RENK.yesil} 50%)`} />
        </SurumKarti>
      </Kamera>
      {/* 1. bölüm: üst boşlukta çalışma künyesi (kartlar gelmeden çekilir) */}
      <Baslik t={t} bas={tYil - 0.1} bitis={cikis} metin="2017 FOLLOW-UP" x={960} y={112} boyut={32} renk={RENK.altin} hiza="orta"
        font="inter" aralik={8} />
      <div style={{ position: "absolute", left: 960 - 90 * kis(eout(ilerle(t, tYil, 0.7))), width: 180 * eout(ilerle(t, tYil, 0.7)), top: 146,
        height: 5, background: RENK.altin, opacity: sol(t, cikis) }} />
      <SayiBlok t={t} bas={tOn6} bas2={OLCULEN.tip2} bitis={cikis} sayi="16" s1="ADULTS" s2="WITH TYPE 2 DIABETES" x={560} y={262}
        renk={RENK.lacivert} />
      <SayiBlok t={t} bas={OLCULEN.ucSurum} bas2={OLCULEN.ayniOgun} bitis={cikis} sayi="3" s1="VERSIONS" s2="OF THE SAME MEAL" x={1360}
        y={262} renk={RENK.altin} />
    </>
  );
};

export default S21;
