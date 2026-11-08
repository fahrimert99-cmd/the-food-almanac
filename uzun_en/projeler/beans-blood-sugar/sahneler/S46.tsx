// Sahne 46 — Adım 5: kolay fikirler (çorba/chili, salata, humus)
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tEasy = K(1, "Keep");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        {/* yarım su bardağı fasulye, çorba/chili */}
        <Etiket t={t} bas={K(2, "half")} bitis={K(2, "soup") - 0.1} capa={[1000, 420]} konum={[800, 90]} metin="HALF A CUP OF BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "soup")} capa={[1000, 420]} konum={[800, 90]} metin="SOUP OR CHILI" renk={RENK.mercan} />
        {/* beyaz fasulyeli salata */}
        <Etiket t={t} bas={K(2, "white")} capa={[400, 650]} konum={[390, 790]} metin="WHITE BEANS" renk={RENK.yesil} />
        {/* nohut ezmesi */}
        <Etiket t={t} bas={K(2, "chickpeas")} capa={[1520, 320]} konum={[1600, 175]} metin="CHICKPEA DIP" renk={RENK.altin} />
        {/* humus + çiğ sebze */}
        <Etiket t={t} bas={K(2, "hummus")} capa={[1470, 700]} konum={[1560, 880]} metin="HUMMUS + RAW VEG" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 30, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64,
        transform: `scale(${sc})`, opacity: al }}>5</div>
      <Baslik t={t} bas={tEasy} bitis={K(2, "half") - 0.2} metin="KEEP IT EASY" x={190} y={78} boyut={68} renk={RENK.koyuYesil} />
    </>
  );
};

export default S46;
