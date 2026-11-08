// Sahne 6 — ekmek, pirinç ve baklagil kupası: karbonhidrat, yarım fincan, protein + lif
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit0 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 70, 1760])}>
        <Etiket t={t} bas={K(0, "bread")} bitis={bit0} capa={[500, 520]} konum={[270, 250]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "rice,")} bitis={bit0} capa={[1350, 610]} konum={[1640, 400]} metin="RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "half")} bitis={c[2].bas - 0.2} capa={[900, 300]} konum={[400, 130]} metin="½ CUP COOKED" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "carbohydrate.")} bitis={bit0} metin="COUNTS AS CARBOHYDRATE" x={960} y={90} boyut={68} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "15") - 0.1} bitis={c[2].bas - 0.2} vurgu="15–20 G" not="CARBOHYDRATE" x={1500} y={130} genislik={420} />
      <Liste t={t} isaret="onay" x={1250} y={130} aralik={92} boyut={40} genislik={560} ogeler={[
        { bas: K(2, "protein"), metin: "PROTEIN" },
        { bas: K(2, "fiber,"), metin: "FIBER" },
        { bas: K(2, "fill"), metin: "FILLS YOU UP", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S06;
