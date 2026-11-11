// Sahne 54 — Fikir 3: sabah proteini; yoğurt ve tofu, yaşlılarda ~30 g'lık öğünler.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1790])}>
        <Etiket t={t} bas={K(1, "Greek")} bitis={K(2, "older")} capa={[300, 380]} konum={[480, 140]} metin="GREEK YOGURT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "tofu")} bitis={K(2, "around") - 0.1} capa={[1290, 330]} konum={[1290, 120]} metin="TOFU" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 50, top: 50, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", opacity: al, transform: `scale(${sc})`, display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 62, border: `5px solid ${RENK.altin}` }}>3</div>
      <Baslik t={t} bas={K(1, "include")} bitis={K(2, "around") - 0.1} metin="INCLUDE PROTEIN" x={960} y={80} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={K(2, "30")} vurgu="≈ 30 G" not="protein per meal in older-adult studies" x={800} y={70} genislik={520} boyut={92} />
    </>
  );
};
export default S54;
