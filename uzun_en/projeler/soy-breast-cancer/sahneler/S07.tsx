// Sahne 7 — Doktor masası: sağ üstte iki blok (meme kanseri + tamoksifen), sonra "dikkatli bakış"
import React from "react";
import { Baslik, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "anything") - 0.15;
  const pill = (bas: number, y: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bit);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={34} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [110, 60, 1720])} />
      <Baslik t={t} bas={K(0, "Breast")} bitis={bit} metin="BREAST CANCER" x={1860} y={150} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "common")} bitis={bit} metin="IS COMMON" x={1860} y={250} boyut={88} hiza="sag" renk={RENK.koyuYesil} />
      {pill(K(0, "tamoxifen"), 340, "TAMOXIFEN", RENK.altin)}
      {pill(K(0, "estrogen's"), 420, "ESTROGEN'S EFFECTS", RENK.mercan)}
      <Baslik t={t} bas={K(1, "hormone-like")} metin="HORMONE-LIKE" x={1860} y={170} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "effects")} metin="EFFECTS" x={1860} y={270} boyut={88} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "careful")} metin="A CAREFUL LOOK" x={1860} y={385} boyut={80} hiza="sag" renk={RENK.altin} />
    </>
  );
};
export default S07;
