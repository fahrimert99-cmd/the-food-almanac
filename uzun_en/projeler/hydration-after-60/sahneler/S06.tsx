// Sahne 6 — kan tuzluluğu: kapta tuz ve hücreler, sağda "daha az su → daha tuzlu".
import React from "react";
import { BaslikBlok, Etiket, Baslik, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const KAYIP = ["SWEAT", "BREATH", "URINE"];

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840]);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={pen}>
        <Etiket t={t} bas={K(0, "saltiness")} bitis={c[1].bas - 0.1} capa={[520, 580]} konum={[680, 110]} metin="SALT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "blood")} bitis={c[1].bas - 0.1} capa={[385, 495]} konum={[250, 110]} metin="BLOOD" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "lose water")} satirlar={["LESS WATER"]} x={1860} y={170} boyut={110} hiza="sag" renkler={[RENK.lacivert]} />
      {KAYIP.map((m, i) => {
        const [sc, al] = pop(t, K(1, m.toLowerCase()), 0.45);
        return (
          <div key={m} style={{ position: "absolute", left: 1330, top: 330 + i * 78, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
            <Hap metin={m} renk={RENK.altin} boyut={30} />
          </div>
        );
      })}
      <Baslik t={t} bas={K(1, "saltiness")} metin="MORE SALTY" x={1860} y={650} boyut={110} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S06;
