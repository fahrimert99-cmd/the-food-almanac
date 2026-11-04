// Sahne 8 — sade mayalı ekmek ile somun yan yana; paket yazısı örtülü.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        {/* paketteki anlamsız yazı düz bir etiketle örtülür */}
        <div style={{ position: "absolute", left: 770, top: 695, width: 200, height: 62, background: "#EFEDE6", transform: "rotate(-8deg)", borderRadius: 4 }} />
        <Etiket t={t} bas={K(0, "yeast bread")} capa={[500, 520]} konum={[470, 220]} metin="YEAST BREAD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "baker's yeast")} capa={[870, 760]} konum={[870, 900]} metin="BAKER'S YEAST" renk={RENK.altin} />
      </Kamera>
      <Ikon t={t} bas={K(0, "shorter")} ad="saat" x={1200} y={125} zemin={RENK.mercan} boyut={90} />
      <Baslik t={t} bas={K(0, "a much")} metin="SHORTER" x={1270} y={95} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "rise")} metin="RISE" x={1270} y={165} boyut={70} renk={RENK.mercan} />
    </>
  );
};

export default S08;
