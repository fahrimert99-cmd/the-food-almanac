// Sahne 49 — öğünle içme rutini: sağda başlık + liste
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [60, 50, 1760])}>
        <Etiket t={t} bas={K(3, "glass")} capa={[767, 470]} konum={[1150, 120]} metin="A GLASS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(3, "cup")} capa={[880, 690]} konum={[1250, 880]} metin="A CUP" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "One")} satirlar={b.satirlar} x={1860} y={230} boyut={84} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1020} y={470} aralik={84} boyut={34} genislik={840}
        ogeler={[
          { bas: K(2, "Link drinks"), metin: "LINK DRINKS TO HABITS", renk: RENK.koyuYesil },
          { bas: K(3, "A glass"), metin: "A GLASS WITH EACH MEAL", renk: RENK.yesil },
          { bas: K(3, "a cup"), metin: "A CUP BETWEEN MEALS", renk: RENK.altin },
        ]} />
      <Ikon t={t} bas={K(4, "reliable")} ad="onay" x={1160} y={730} boyut={64} />
      <Not t={t} bas={K(4, "drinking at")} metin="DRINKING AT MEALS: A RELIABLE WAY" x={1215} y={708} boyut={28} agirlik={800} genislik={640} />
    </>
  );
};
export default S49;
