// Sahne 31 — oksalat: yapraklı yeşillikler, pancar, sebze suyu ve böbrek taşı riski.
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, IkonYol, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "oxalate"), tYaprak = K(0, "leafy"), tPancar = K(0, "beets");
  const tSu = K(1, "juices"), tRisk = K(1, "risk"), tTas = K(1, "kidney");
  const [sk, ak] = pop(t, tTas, 0.55);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={tYaprak} capa={[330, 560]} konum={[330, 330]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={tPancar} capa={[800, 800]} konum={[1200, 840]} metin="BEETS" renk={RENK.mercan} />
        <Etiket t={t} bas={tSu} capa={[790, 560]} konum={[1290, 700]} metin="JUICE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["OXALATE"]} x={1150} y={190} boyut={150} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "natural")} metin="a natural compound in plants" x={1155} y={290} boyut={36} />
      <Not t={t} bas={tYaprak} metin="found in leafy greens and beets" x={1155} y={345} boyut={36} renk={RENK.koyuYesil} agirlik={800} />
      <div style={{ position: "absolute", left: 1150, top: 420, transform: `scale(${sk})`, transformOrigin: "0 50%", opacity: ak }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
          borderRadius: 24, padding: "14px 26px 14px 16px", boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
          <span style={{ width: 52, height: 52, borderRadius: 14, background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="uyari" boyut={34} renk="#fff" />
          </span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert, lineHeight: 1.25 }}>
            KIDNEY STONE RISK<br />
            <span style={{ fontWeight: 600, fontSize: 24, letterSpacing: 0 }}>for people prone to stones</span>
          </span>
        </div>
      </div>
      <Not t={t} bas={tRisk} metin="High-oxalate juices · NIH" x={1155} y={560} boyut={28} renk="#585862" />
    </>
  );
};

export default S31;
