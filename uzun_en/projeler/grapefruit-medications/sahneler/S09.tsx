// Sahne 9 — kapı kapandı: bağırsak duvarı, tüp ve greyfurt.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "block");
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [120, 60, 1700])}>
        {/* sağ alttaki imza kâğıt yamasıyla örtülür */}
        <div style={{ position: "absolute", left: 1570, top: 960, width: 300, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "grapefruit")} bitis={K(0, "intestinal") - 0.2} capa={[1560, 700]} konum={[1500, 470]}
          metin="GRAPEFRUIT JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "intestinal")} capa={[520, 250]} konum={[840, 150]} metin="INTESTINAL ENZYME" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "medicine")} bitis={K(1, "blood") - 0.2} capa={[1000, 600]} konum={[1000, 400]}
          metin="MORE MEDICINE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "blood")} capa={[1250, 620]} konum={[1230, 770]} metin="BLOOD" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={K(1, "slips")} kaynak={[620, 600]} hedef={[1250, 600]} adet={16} aralik={0.12} omur={1.6}
          kavis={-30} yayilma={40} hedefYayilma={40} tohum="s09" />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} satirlar={["GATE", "BLOCKED"]} x={1860} y={170} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "more of")} metin="more medicine reaches the blood and stays longer" x={1860} y={345} hiza="sag"
        genislik={520} boyut={32} />
    </>
  );
};

export default S09;
