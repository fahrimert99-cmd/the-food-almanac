// Sahne 51 — bir: kaşıkla düşün
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, Liste, Not, RENK, SP, kameraYolu, Kamera, kelimeZamani, pop, sol } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBir = K(0, "one"), tBasl = K(1, "think");
  const tYarim = K(2, "half a tablespoon"), tFda = K(2, "one and a half");
  const tUyum = K(3, "fits"), tAz = K(4, "even a little");
  const [sc, al] = pop(t, tBir, 0.5);
  const [sc2, al2] = pop(t, tUyum, 0.5);
  const bit = tAz - 0.2;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1760])} />
      <div style={{ position: "absolute", left: 1210, top: 150, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 66, transform: `scale(${sc})`, opacity: al }}>1</div>
      <BaslikBlok t={t} bas={tBasl} satirlar={["THINK IN", "SPOONS"]} x={1860} y={200} boyut={120} hiza="sag" />
      <Not t={t} bas={tYarim - 0.2} metin="½ to 1½ tablespoons a day" x={1860} y={470} boyut={40} hiza="sag" genislik={640} agirlik={800} />
      <Etiket t={t} bas={tYarim} bitis={tUyum - 0.3} capa={[467, 590]} konum={[330, 860]} metin="MORE THAN ½ TBSP" renk={RENK.altin} />
      <Etiket t={t} bas={tFda} bitis={tUyum - 0.3} capa={[747, 650]} konum={[1000, 860]} metin="FDA: 1½ TBSP" renk={RENK.yesil} />
      {al2 > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 620, transform: `translate(-100%, 0) scale(${sc2})`, transformOrigin: "100% 50%", opacity: al2 * sol(t, bit) }}>
          <Hap metin="FITS YOUR CALORIES" renk={RENK.yesil} boyut={34} />
        </div>
      )}
      <Baslik t={t} bas={tAz} metin="A LITTLE, USED WELL" x={1860} y={760} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tAz + 0.5} metin="is where the research starts" x={1860} y={830} boyut={36} hiza="sag" genislik={640} />
    </>
  );
};

export default S51;
