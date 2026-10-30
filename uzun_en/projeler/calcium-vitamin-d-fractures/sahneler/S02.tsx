// Sahne 2 — Bakımevi çalışması: iki koltuk, "neden fark?" sorusu.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(1, "Why the");
  const pSerit = eout(ilerle(t, tSoru - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1660])}>
        <Etiket t={t} bas={K(0, "older trial")} bitis={tSoru} capa={[1330, 640]} konum={[1540, 880]} metin="OLDER TRIAL" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "care homes")} bitis={tSoru} capa={[560, 640]} konum={[330, 190]} metin="CARE HOMES" renk={RENK.altin} />
        <Ikon t={t} bas={K(0, "benefit")} bitis={tSoru} ad="onay" x={560} y={470} boyut={96} />
        <Ikon t={t} bas={tSoru + 0.2} ad="soru" x={1320} y={560} boyut={96} zemin={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 300, opacity: pSerit,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.9)} 60%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tSoru} metin="WHY THE DIFFERENCE?" x={960} y={170} boyut={104} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S02;
