// Sahne 50 — Fikir 3: kapsüller (üst solda boş kâğıtta madde listesi, şişede etiket).
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800]);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tCap = K(1, "capsules"), tPac = K(1, "PAC content"), tDose = K(2, "proven dose"), tMore = K(2, "more is better");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={pencere}>
        {/* şişedeki bozuk etiket yazısı krem yamayla örtülür */}
        <div style={{ position: "absolute", left: 636, top: 522, width: 118, height: 56, borderRadius: 8, background: "#EFE6CF" }} />
        <Etiket t={t} bas={tCap} capa={[700, 650]} konum={[250, 570]} metin="CAPSULES" renk={RENK.altin} boyut={30} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 70, width: 92, height: 92, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al,
        border: `5px solid ${RENK.kagitAcik}` }}>3</div>
      <Baslik t={t} bas={tCap - 0.1} metin="CAPSULES" x={190} y={118} boyut={96} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="nokta" x={80} y={230} aralik={84} boyut={34} genislik={900} ogeler={[
        { bas: K(1, "products differ"), metin: "PRODUCTS DIFFER", renk: RENK.altin },
        { bas: tPac, metin: "PAC OFTEN NOT MEASURED", renk: RENK.altin },
        { bas: tDose, metin: "NO PROVEN DOSE", renk: RENK.mercan },
      ]} />
      <BaslikBlok t={t} bas={tMore - 0.1} satirlar={["DON'T ASSUME", "MORE IS BETTER"]} x={1860} y={130} boyut={60} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S50;
