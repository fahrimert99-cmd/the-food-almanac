// Sahne 7 — üç tür bulantı: ameliyat, kemoterapi, hareket
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(1, "after")} capa={[360, 420]} konum={[620, 640]} metin="AFTER SURGERY" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "from")} capa={[790, 440]} konum={[1080, 560]} metin="CHEMOTHERAPY" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "motion.")} capa={[1550, 790]} konum={[1550, 915]} metin="MOTION" renk={RENK.koyuYesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "three")} vurgu="3" not="KINDS OF NAUSEA" x={1102} y={110} genislik={232} boyut={90} />
    </>
  );
};

export default S07;
