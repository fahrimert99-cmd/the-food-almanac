// Sahne 3 — vaat: ne gösteriyor, neye bakmalı, kan sulandırıcılar.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [120, 100, 1700], [220, 150, 1500]);
  const t1 = K(0, "trials"), t2 = K(0, "what to") ?? K(0, "check"), t3 = K(0, "blood");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={pen}>
        <Etiket t={t} bas={K(0, "take it")} bitis={t3 - 0.1} capa={[1200, 480]} konum={[1500, 300]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "know") } bitis={K(0, "and") - 0.1} metin="WHAT THE TRIALS SHOW" x={960} y={170} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "and")} bitis={t3 - 0.1} metin="WHAT TO CHECK" x={960} y={170} boyut={100} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={t3} metin="BLOOD THINNERS" x={1010} y={170} boyut={100} renk={RENK.mercan} hiza="orta" />
      <Ikon t={t} bas={t3} ad="uyari" x={640} y={170} zemin={RENK.mercan} />
    </>
  );
};

export default S03;
