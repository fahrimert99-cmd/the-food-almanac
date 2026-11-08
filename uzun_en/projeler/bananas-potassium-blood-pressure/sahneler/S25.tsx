// Sahne 25 — U şeklinde eğri (Filippini 2020). Gökyüzü boşluğunda çizilen şematik eğri.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Eğrinin iki kolu (şematik, sayısız)
const SOL = "M900,200 C980,390 1110,440 1280,440";
const SAG = "M1280,440 C1450,440 1620,360 1740,200";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDeney = K(0, "32 trials"), tAd = K(0, "Filippini"), tU = K(0, "U-shaped");
  const tOrta = K(1, "moderate"), tYuksek = K(1, "very high"), tIlac = K(1, "pressure rose");
  const pSol = eout(ilerle(t, tOrta, 1.8));
  const pSag = eout(ilerle(t, tYuksek, 2.0));
  const pEksen = eout(ilerle(t, tU, 0.8));
  const [sc1, al1] = pop(t, tDeney, 0.5);
  const [sc2, al2] = pop(t, tAd, 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [150, 30, 1740], [190, 45, 1700])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* ilk cümle: deney sayısı ve yazar */}
      <div style={{ position: "absolute", left: 90, top: 190, transform: `scale(${sc1})`, transformOrigin: "0 50%", opacity: al1 * (t < tU - 0.15 ? 1 : 0) }}>
        <Hap metin="32 TRIALS · 2020" renk={RENK.altin} boyut={36} />
      </div>
      <div style={{ position: "absolute", left: 90, top: 280, transform: `scale(${sc2})`, transformOrigin: "0 50%", opacity: al2 * (t < tU - 0.15 ? 1 : 0) }}>
        <Hap metin="TOMMASO FILIPPINI" renk={RENK.lacivert} boyut={32} />
      </div>
      {/* başlık */}
      <Baslik t={t} bas={tU} metin="A U-SHAPED" x={90} y={210} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tU + 0.18} metin="CURVE" x={90} y={322} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={tU + 0.5} metin="more is not always better" x={96} y={388} boyut={34} />
      {/* şematik eğri */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={pEksen}>
          <line x1={880} y1={470} x2={1780} y2={470} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="4 8" />
        </g>
        <path d={SOL} pathLength={1} fill="none" stroke={RENK.yesil} strokeWidth={14} strokeLinecap="round"
          strokeDasharray={1} strokeDashoffset={1 - pSol} opacity={pSol > 0 ? 1 : 0} />
        <path d={SAG} pathLength={1} fill="none" stroke={RENK.mercan} strokeWidth={14} strokeLinecap="round"
          strokeDasharray={1} strokeDashoffset={1 - pSag} opacity={pSag > 0 ? 1 : 0} />
      </svg>
      <div style={{ position: "absolute", left: 880, top: 118, opacity: pEksen, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert }}>
        POTASSIUM DOSE →
      </div>
      <div style={{ position: "absolute", left: 1210, top: 114, opacity: pEksen, background: RENK.altin, color: "#fff", borderRadius: 999, padding: "4px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3 }}>
        ILLUSTRATIVE
      </div>
      <Etiket t={t} bas={tOrta + 0.5} bitis={tYuksek + 0.5} capa={[1000, 360]} konum={[1130, 260]} metin="MODERATE RISE" renk={RENK.yesil} boyut={28} />
      <Etiket t={t} bas={tYuksek + 0.5} capa={[1420, 436]} konum={[1420, 320]} metin="BENEFIT FADES" renk={RENK.altin} boyut={28} />
      <Etiket t={t} bas={tIlac + 0.3} capa={[1660, 300]} konum={[1560, 215]} metin="ON BP MEDICINE: UP" renk={RENK.mercan} boyut={26} />
    </>
  );
};

export default S25;
