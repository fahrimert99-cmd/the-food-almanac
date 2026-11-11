// Sahne 48 — takviyeler ve antasitler: üç şişe + tabletler etiketli, üstte "dört saat" başlığı.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 60, 1900], [70, 130, 1740]);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={pencere}>
        {/* yan yatan şişenin anlamsız yazısı boş etiketle örtülür */}
        <div style={{ position: "absolute", left: 1022, top: 684, width: 146, height: 96, background: "#F4EFE2", borderRadius: 6,
          transform: "skewY(3deg)" }} />
        <Etiket t={t} bas={K(0, "iron")} capa={[386, 600]} konum={[386, 385]} metin="IRON" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "calcium")} capa={[606, 600]} konum={[606, 385]} metin="CALCIUM" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "antacids")} capa={[1310, 750]} konum={[1310, 600]} metin="ANTACIDS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "four")} metin="AT LEAST FOUR HOURS APART" x={960} y={120} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(0, "reduce")} metin="LESS WELL ABSORBED" x={960} y={205} boyut={60} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S48;
