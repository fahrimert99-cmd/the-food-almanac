// Sahne 6 — İzoflavon molekülü: üst şeritte başlıklar, sol üstte etiket
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [psc, pa] = pop(t, K(0, "plant"), 0.5);
  const bit = K(0, "phytoestrogens") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "Isoflavones")} capa={[420, 480]} konum={[280, 150]} metin="ISOFLAVONES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "hormone-like")} bitis={bit} metin="HORMONE-LIKE" x={1130} y={105} boyut={70} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "phytoestrogens")} metin="PHYTOESTROGENS" x={1130} y={105} boyut={62} hiza="orta" renk={RENK.lacivert} />
      {pa > 0 && (
        <div style={{ position: "absolute", left: 1450, top: 905, transform: `translate(-50%, -50%) scale(${psc})`, opacity: pa }}>
          <Hap metin="= PLANT ESTROGENS" renk={RENK.yesil} boyut={32} />
        </div>
      )}
    </>
  );
};
export default S06;
