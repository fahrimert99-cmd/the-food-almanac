import React from "react";
import { Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sahne 12 — 24 saat susuzluk sonrası bulgular, sağda panel
const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(1, "Afterward,"), tB = K(2, "Their bodies") - 0.2;
  const pn = Math.min(1, Math.max(0, (t - (K(0, "24 hours") - 0.3)) / 0.6));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1740])} />
      <Panel a={pn} genislik={760} opak={0.97} />
      <BaslikBlok t={t} bas={K(0, "24 hours")} bitis={tL - 0.2} satirlar={["24 HOURS", "NO DRINK"]} x={1290} y={300} boyut={104} renkler={[RENK.koyuYesil, RENK.altin]} />
      <Not t={t} bas={tL} bitis={tB} metin="OLDER MEN SHOWED" x={1290} y={200} boyut={30} renk={RENK.altin} agirlik={800} />
      <Liste t={t} x={1290} y={270} aralik={100} boyut={34} isaret="nokta" genislik={580} ogeler={[
        { bas: K(1, "higher sodium"), metin: "HIGHER SODIUM", renk: RENK.altin, bitis: tB },
        { bas: K(1, "concentrated blood"), metin: "MORE CONCENTRATED BLOOD", renk: RENK.altin, bitis: tB },
        { bas: K(1, "vasopressin"), metin: "HIGHER VASOPRESSIN", renk: RENK.altin, bitis: tB },
      ]} />
      <Not t={t} bas={K(1, "water-saving")} bitis={tB} metin="the water-saving hormone" x={1290} y={570} boyut={30} renk={RENK.gri} agirlik={600} />
      <BaslikBlok t={t} bas={tB + 0.25} satirlar={["BODY SAYS", "I NEED WATER"]} x={1290} y={300} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};
export default S12;
