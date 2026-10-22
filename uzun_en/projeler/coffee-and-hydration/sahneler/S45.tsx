// Sahne 45 — "Bir: kahveyi sıvı say."
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [60, 40, 1800]);
  const [sn, an] = pop(t, 0.05, 0.5);
  const tHyd = K(2, "hydrated");
  const [sp, ap] = pop(t, K(2, "so you don't"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={pen}>
        <Etiket t={t} bas={K(1, "coffee")} capa={[470, 520]} konum={[200, 330]} metin="COFFEE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 90, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76, transform: `scale(${sn})`, opacity: an,
        border: `4px solid ${RENK.kagitAcik}` }}>1</div>
      <Baslik t={t} bas={K(1, "count it")} bitis={tHyd - 0.15} metin="COUNT IT AS FLUID" x={1860} y={140} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tHyd} metin="COFFEE ≈ WATER" x={1860} y={125} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "habitual")} metin="FOR HABITUAL DRINKERS" x={1860} y={205} boyut={34} hiza="sag" font="inter" aralik={3} renk={RENK.altin} />
      <div style={{ position: "absolute", right: 60, top: 262, display: "flex", alignItems: "center", gap: 14, transform: `scale(${sp})`,
        transformOrigin: "100% 50%", opacity: ap }}>
        <Hap metin="NO NEED TO SUBTRACT" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S45;
