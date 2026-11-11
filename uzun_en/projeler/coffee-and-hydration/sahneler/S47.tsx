// Sahne 47 — "Üç: toplam kafeini ve saati izle."
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [250, 20, 1700], [290, 40, 1640]);
  const [sn, an] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={pen}>
        <Etiket t={t} bas={K(2, "afternoon cup")} capa={[600, 520]} konum={[480, 270]} metin="AFTERNOON CUP" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(2, "affect")} capa={[1300, 560]} konum={[1620, 720]} metin="SLEEP" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 90, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76, transform: `scale(${sn})`, opacity: an,
        border: `4px solid ${RENK.kagitAcik}` }}>3</div>
      <Baslik t={t} bas={K(1, "total caffeine")} metin="TOTAL CAFFEINE" x={1860} y={160} boyut={72} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "the clock")} metin="& THE CLOCK" x={1860} y={240} boyut={72} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(2, "400")} vurgu="≈ 400 MG" not="A DAY · HEALTHY ADULTS" x={1670} y={380} genislik={400} boyut={96} renk={RENK.altin} />
    </>
  );
};

export default S47;
