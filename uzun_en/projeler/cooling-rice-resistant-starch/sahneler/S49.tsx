// Sahne 49 — Adım 2: pirinci hızlı soğut; ince tabaka ya da küçük porsiyonlar, kapalı kaplarda.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Two"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(2, "thin")} capa={[620, 560]} konum={[330, 190]} metin="THIN LAYER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "small")} capa={[1330, 690]} konum={[930, 870]} metin="SMALL PORTIONS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "covered")} capa={[1570, 440]} konum={[1500, 870]} metin="COVERED CONTAINERS" renk={RENK.lacivert} />
      </Kamera>
      {/* adım şeridi: sağ üst */}
      <div style={{ position: "absolute", left: 1000, top: 105, width: 860, height: 135, opacity: al, background: RENK.kagitAcik,
        borderRadius: 28, boxShadow: "0 14px 34px rgba(48,40,34,0.22)", border: `3px solid ${RENK.lacivert}`,
        transform: `scale(${sc})`, transformOrigin: "100% 50%" }} />
      <div style={{ position: "absolute", left: 1030, top: 118, width: 110, height: 110, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 80,
        transform: `scale(${sc})`, opacity: al }}>2</div>
      <Baslik t={t} bas={K(1, "Cool")} metin="COOL IT" x={1170} y={172} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "quickly")} metin="QUICKLY" x={1470} y={172} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S49;
