// Sahne 27 — toplam suyun ~%20'si yiyecekten: bardak, meyve ve salatalık üzerinde etiketler.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const [vx, vy] = s.meta.baslik?.satirlar ?? ["20%", "FROM FOOD"];
  return (
    <>
      <Kamera gorsel="tam/27" pencere={p}>
        <Etiket t={t} bas={K(0, "total.")} bitis={K(1, "20 percent") - 0.1} capa={[1050, 440]} konum={[1480, 470]} metin="TOTAL WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "fruits,")} capa={[640, 500]} konum={[640, 300]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "vegetables")} capa={[1040, 780]} konum={[1560, 800]} metin="VEGETABLES" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "20 percent")} vurgu={vx} not={vy} x={1500} y={120} renk={RENK.koyuYesil} genislik={400} />
    </>
  );
};

export default S27;
