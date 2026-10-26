// Sahne 52 — Özet: az mide asidi, %38 / %15.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitis1 = K(1, "38") - 0.3;
  return (
    <>
      {/* pencere sol alttaki imza kalıntısını (y > 995) dışarıda bırakır */}
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [100, 20, 1700], [170, 24, 1600])}>
        <Etiket t={t} bas={K(0, "stomach acid")} bitis={bitis1} capa={[1100, 560]} konum={[680, 300]} metin="LESS STOMACH ACID" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "free B12")} bitis={bitis1} capa={[430, 780]} konum={[310, 330]} metin="B12 IN FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "atrophic")} capa={[1420, 330]} konum={[1540, 170]} metin="ATROPHIC GASTRITIS" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "38")} vurgu="38%" not="LOW IN B12" x={400} y={90} renk={RENK.mercan} genislik={360} />
      <VurguRozet t={t} bas={K(1, "15")} vurgu="15%" not="COMPARISON GROUP" x={830} y={90} renk={RENK.yesil} genislik={360} />
    </>
  );
};

export default S52;
