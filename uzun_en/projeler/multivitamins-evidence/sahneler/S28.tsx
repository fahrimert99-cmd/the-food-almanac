// Sahne 28 — eczane dolabı: iki deney, "henüz erken".
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListe = K(1, "differ");
  const tBaslik = K(2, "too early");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1820])}>
        <Etiket t={t} bas={K(0, "older")} capa={[333, 330]} konum={[300, 80]} metin="MEN'S TRIAL" renk={RENK.mercan} />
        <Etiket t={t} bas={tListe} capa={[673, 330]} konum={[690, 80]} metin="COSMOS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "no memory")} bitis={tListe - 0.2} metin="NO MEMORY EFFECT" x={1100} y={330} boyut={72} renk={RENK.mercan} />
      <Liste t={t} isaret="sayi" x={1100} y={300} aralik={100} boyut={40} genislik={760}
        ogeler={[
          { bas: K(1, "who they"), metin: "WHO THEY ENROLLED", renk: RENK.lacivert, bitis: tBaslik - 0.3 },
          { bas: K(1, "how long"), metin: "HOW LONG THEY RAN", renk: RENK.altin, bitis: tBaslik - 0.3 },
        ]} />
      <BaslikBlok t={t} bas={tBaslik - 0.2} satirlar={["TOO EARLY", "TO RECOMMEND"]} x={1860} y={290} boyut={92} hiza="sag" />
      <Not t={t} bas={K(2, "baker")} metin="Baker, lead author" x={1860} y={530} hiza="sag" boyut={30} renk={RENK.gri} genislik={500} />
      <Not t={t} bas={K(3, "two nutrients")} metin="NEXT: TWO NUTRIENTS THAT MAY MATTER MORE" x={1860} y={640} hiza="sag" boyut={34}
        genislik={680} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S28;
