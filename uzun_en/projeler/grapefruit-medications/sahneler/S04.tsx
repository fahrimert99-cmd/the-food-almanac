// Sahne 4 — kanal adı + bağırsak girişi.
import React from "react";
import { Baslik, Etiket, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const K_RENK = "rgb(251,246,219)";
// kart üzerindeki sahte yazılar kart rengiyle örtülür
const YAMALAR: [number, number, number, number][] = [
  [1290, 474, 70, 68], [1380, 472, 76, 30], [1426, 490, 32, 154],
  [1282, 628, 70, 54], [1282, 612, 32, 20], [1378, 634, 76, 50],
];

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "Let's") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1640])}>
        {YAMALAR.map(([x, y, w, h], i) => <div key={i} style={{ position: "absolute", left: x, top: y, width: w, height: h, background: K_RENK }} />)}
        <Etiket t={t} bas={K(1, "grapefruit")} capa={[620, 420]} konum={[420, 150]} metin="GRAPEFRUIT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "gut.")} capa={[1370, 570]} konum={[1640, 330]} metin="YOUR GUT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "The")} bitis={bit} metin={MARKA.filigran} x={960} y={140} boyut={104} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S04;
