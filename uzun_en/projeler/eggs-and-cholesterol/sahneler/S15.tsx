// Sahne 15 — yenen kolesterol ile kan kolesterolü arasında belirgin ilişki yok (ölçü kabı yazıları kamera dışında).
import React from "react";
import { Baslik, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEat = K(0, "eat"), tBlood = K(0, "blood");
  const pCizgi = Math.min(1, Math.max(0, (t - tEat - 0.3) / 1.2));
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [450, 250, 1300], [480, 270, 1260])} />
      <Not t={t} bas={K(0, "committee")} metin="THE COMMITTEE FOUND" x={620} y={110} boyut={34} agirlik={800} renk={RENK.altin} genislik={700} />
      <Baslik t={t} bas={K(0, "no")} metin="NO APPRECIABLE" x={616} y={240} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "relationship") - 0.1} metin="RELATIONSHIP" x={616} y={350} boyut={104} renk={RENK.koyuYesil} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1130} y1={490} x2={1130 + 190 * pCizgi} y2={490} stroke={RENK.murekkep} strokeWidth={4} strokeDasharray="12 9" />
      </svg>
      <Cip t={t} bas={tEat} x={840} y={490} metin="CHOLESTEROL YOU EAT" renk={RENK.altin} />
      <Cip t={t} bas={tBlood} x={1590} y={490} metin="BLOOD CHOLESTEROL" renk={RENK.mercan} />
      <Ikon t={t} bas={tBlood + 0.2} ad="carpi" x={1228} y={490} boyut={72} zemin={RENK.mercan} />
    </>
  );
};

export default S15;
