// Sahne 35 — kiler rafı: COSMOS kapsülü 500 mg ölçülü, kiler çikolatası bilinmiyor.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 60, 1920], [120, 130, 1700]);
  return (
    <>
      <Kamera gorsel="tam/35" pencere={pen} />
      <VurguRozet t={t} bas={K(1, "500")} bitis={K(2, "dark chocolate") - 0.2} vurgu="500 MG" not="measured flavanols in the COSMOS capsules" x={430} y={140} genislik={560} />
      <Etiket t={t} bas={K(2, "dark chocolate bar")} capa={[760, 740]} konum={[470, 520]} metin="THE BAR IN YOUR PANTRY" renk={RENK.altin} boyut={26} />
      <Etiket t={t} bas={K(2, "nobody")} capa={[960, 290]} konum={[1330, 150]} metin="AMOUNT UNKNOWN" renk={RENK.mercan} boyut={26} />
    </>
  );
};

export default S35;
