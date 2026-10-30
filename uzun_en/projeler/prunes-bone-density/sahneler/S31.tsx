// Sahne 31 — dürüst özet: olası etkenler var, hangisi olduğu bilinmiyor
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kam}>
        <Etiket t={t} bas={K(1, "several")} capa={[560, 330]} konum={[300, 215]} metin="SEVERAL THINGS" renk={RENK.koyuYesil} boyut={28} />
        <Etiket t={t} bas={K(2, "which")} capa={[1290, 300]} konum={[1640, 450]} metin="WHICH ONE?" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(2, "inflammation")} capa={[1340, 190]} konum={[1640, 330]} metin="INFLAMMATION?" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={K(0, "honest")} metin="THE HONEST SUMMARY" x={90} y={120} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};

export default S31;
