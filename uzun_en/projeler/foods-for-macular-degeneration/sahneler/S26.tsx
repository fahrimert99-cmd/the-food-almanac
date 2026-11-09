// Sahne 26 — AREDS2: katılımcılar ve kollar
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tN = K(0, "4,203"), tAged = K(0, "aged");
  const tBit = K(1, "On") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [60, 110, 1780])}>
        <Etiket t={t} bas={K(1, "omega-3") - 0.1} capa={[900, 700]} konum={[1010, 230]} metin="FISH-OIL CAPSULES" renk={RENK.altin} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.1} bitis={tBit} />
      <BaslikBlok t={t} bas={tN} bitis={tBit} satirlar={["4,203", "ADULTS"]} x={1860} y={300} boyut={150} hiza="sag" />
      <Not t={t} bas={tAged} bitis={tBit} metin="aged 50 to 85, median 5 years" x={1860} y={600} hiza="sag" boyut={38} genislik={700} />
      <Liste t={t} isaret="nokta" x={1180} y={360} genislik={680} boyut={40} ogeler={[
        { bas: K(1, "lutein"), metin: "LUTEIN 10 MG", renk: RENK.yesil },
        { bas: K(1, "zeaxanthin"), metin: "ZEAXANTHIN 2 MG", renk: RENK.yesil },
        { bas: K(1, "omega-3"), metin: "OMEGA-3 FISH OIL", renk: RENK.altin },
        { bas: K(1, "both"), metin: "BOTH", renk: RENK.lacivert },
        { bas: K(1, "placebo"), metin: "PLACEBO", renk: RENK.gri },
      ]} />
      <Not t={t} bas={K(1, "On")} metin="ON TOP OF THE STANDARD FORMULA" x={1180} y={290} boyut={28} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S26;
