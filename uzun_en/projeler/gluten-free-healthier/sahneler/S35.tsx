// Sahne 35 — rahatsızlık hissedersen tahmin etme, doktora git. Sağda başlıklar, solda steteskop etiketi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 60, 1900], [40, 100, 1780]);
  const b1 = K(1, "The right") - 0.2;
  const b2 = K(2, "It's") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kam}>
        <Etiket t={t} bas={K(0, "food")} bitis={b1} capa={[760, 390]} konum={[960, 170]} metin="THE FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "your doctor")} capa={[160, 440]} konum={[480, 130]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "worth")} bitis={b1} satirlar={["TAKE IT", "SERIOUSLY"]} x={1260} y={300} boyut={96} renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(1, "isn't")} bitis={b2} metin="DON'T GUESS" x={1260} y={360} boyut={110} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "find out")} satirlar={["FIND OUT", "WHY"]} x={1260} y={300} boyut={110} />
      <Not t={t} bas={K(2, "exactly")} metin="HOW: IN A MOMENT" x={1260} y={560} boyut={34} agirlik={800} />
    </>
  );
};

export default S35;
