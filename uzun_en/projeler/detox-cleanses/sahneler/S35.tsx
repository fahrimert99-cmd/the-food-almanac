// Sahne 35 — Raja vd. 2023: 85 yaşında hasta, kreatinin 1,12 -> 5,43 (meta.grafik). Görselsiz grafik.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, Liste, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 740, GY = 480, GW = 760, GH = 320;

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const baslar = [K(1, "1.12") - 0.05, K(1, "5.43") - 0.05];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.mercan, bas: baslar[i] }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, K(1, "dialysis"), 0.6));
  const [sd, ad] = pop(t, K(1, "dialysis"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin="CREATININE: A KIDNEY MARKER" x={156} y={222} boyut={74} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 32, color: RENK.lacivert }}>
        {g.alt}
      </div>
      <Liste t={t} isaret="nokta" boyut={34} x={140} y={400} aralik={100} genislik={560}
        ogeler={[
          { bas: K(0, "85-year-old"), metin: "85-YEAR-OLD MAN" },
          { bas: K(0, "diabetes"), metin: "WITH DIABETES" },
          { bas: K(0, "20"), metin: "20–30 OZ A DAY" },
          { bas: K(0, "pomegranate"), metin: "POMEGRANATE JUICE" },
          { bas: K(0, "week."), metin: "FOR ABOUT A WEEK" },
        ]} />
      <CubukGrafik t={t} bas={baslar[0]} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={6.2} birimEtiketi="mg/dL" />
      <div style={{ position: "absolute", left: 1500, top: 600, transform: `scale(${sd})`, transformOrigin: "0 50%", opacity: ad,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
        padding: "8px 26px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 44, height: 44, borderRadius: 12, background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="uyari" boyut={30} renk="#fff" />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>NEEDED DIALYSIS</span>
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S35;
