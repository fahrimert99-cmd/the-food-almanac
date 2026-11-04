// Sahne 47 — İçindekiler listesini oku: sol üstte başlık, basit içerik listesi.
import React from "react";
import { Baslik, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(2, "traditional"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 70, 1720])} />
      <Baslik t={t} bas={K(1, "ingredient")} metin="INGREDIENT" x={70} y={190} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "list")} metin="LIST" x={70} y={300} boyut={110} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 70, top: 405, transform: `translate(0, -50%) scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="TRADITIONAL SOURDOUGH" renk={RENK.altin} boyut={28} />
      </div>
      <Liste t={t} x={70} y={452} aralik={54} boyut={32} isaret="onay" genislik={520} ogeler={[
        { bas: K(2, "flour"), metin: "FLOUR" },
        { bas: K(2, "water"), metin: "WATER" },
        { bas: K(2, "salt"), metin: "SALT" },
        { bas: K(2, "starter"), metin: "STARTER" },
      ]} />
    </>
  );
};

export default S47;
