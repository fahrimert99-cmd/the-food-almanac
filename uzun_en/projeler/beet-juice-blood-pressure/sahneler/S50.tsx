// Sahne 50 — "Four." Ağzına dikkat: antiseptik gargarayı içmeye yakın kullanma, diş hekimine sor.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFour = K(0, "Four"), tMind = K(1, "Mind"), tAnti = K(2, "antiseptic"), tAsk = K(2, "ask");
  const [sc, al] = pop(t, tFour, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tAnti} bitis={tAsk - 0.1} capa={[1560, 330]} konum={[1430, 480]} metin="ANTISEPTIC MOUTHWASH" renk={RENK.mercan} />
        <Etiket t={t} bas={tAsk} capa={[1010, 330]} konum={[760, 190]} metin="ASK YOUR DENTIST" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 80, top: 130, width: 130, height: 130, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 96,
        transform: `scale(${sc})`, opacity: al }}>4</div>
      <Baslik t={t} bas={tMind} bitis={tAsk - 0.1} metin="MIND YOUR" x={240} y={165} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMind + 0.3} bitis={tAsk - 0.1} metin="MOUTH" x={240} y={265} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S50;
