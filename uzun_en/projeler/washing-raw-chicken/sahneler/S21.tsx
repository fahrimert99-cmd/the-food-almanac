// Sahne 21 — tracer bakteri: tavuktan marule ve lavaboya izlenir.
import React from "react";
import { Etiket, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 70, 1800], [150, 110, 1560]);
  const tTracer = K(1, "tracer"), tFollow = K(1, "follow"), tLand = K(1, "landed"), tLet = K(1, "lettuce");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={w}>
        <Etiket t={t} bas={K(0, "thighs")} bitis={tTracer - 0.1} capa={[470, 590]} konum={[420, 250]} metin="CHICKEN THIGHS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "salad.")} bitis={tTracer - 0.1} capa={[1130, 330]} konum={[1400, 220]} metin="SALAD" renk={RENK.yesil} />
        <Etiket t={t} bas={tTracer} bitis={tLet - 0.1} capa={[1000, 640]} konum={[1000, 880]} metin="HARMLESS TRACER" renk={RENK.altin} />
        <Etiket t={t} bas={tLet} capa={[1050, 330]} konum={[1400, 220]} metin="LETTUCE" renk={RENK.yesil} />
      </Kamera>
      <Parcaciklar t={t} bas={tFollow} kaynak={[640, 650]} hedef={[1030, 420]} adet={14} aralik={0.16} renk={RENK.altin} tohum="a21" />
      <Parcaciklar t={t} bas={tLand} kaynak={[760, 700]} hedef={[1430, 560]} adet={12} aralik={0.16} renk={RENK.altin} tohum="b21" />
    </>
  );
};
export default S21;
