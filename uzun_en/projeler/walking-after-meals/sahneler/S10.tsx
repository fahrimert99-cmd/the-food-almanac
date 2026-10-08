// Sahne 10 — kas = en büyük glukoz deposu; "ikinci kapı" başlığı + insülinden bağımsız yol.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKas = K(1, "muscles"), tGlu = K(1, "glucose"), tIki = K(1, "second"), tInsulin = K(1, "doesn't");
  const [sc, al] = pop(t, tInsulin, 0.55);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tKas} bitis={tIki} capa={[1560, 520]} konum={[1130, 520]} metin="MUSCLES" renk={RENK.mercan} />
        <Etiket t={t} bas={tGlu} bitis={tIki} capa={[320, 940]} konum={[400, 780]} metin="GLUCOSE" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tGlu + 0.2} kaynak={[330, 930]} hedef={[1500, 560]} adet={26} omur={2.2} renk={RENK.altin} boyut={10} yayilma={60} kavis={-380} tohum="g10" />
      </Kamera>
      <Not t={t} bas={0.2} bitis={tKas - 0.2} metin="THE IDEA BEHIND A WALK" x={100} y={200} boyut={40} agirlik={800} renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={tIki} satirlar={["A SECOND", "DOOR"]} x={100} y={170} boyut={112} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 100, top: 440, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="LITTLE HELP FROM INSULIN" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S10;
