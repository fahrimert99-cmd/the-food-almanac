// Sahne 38 — iki hüküm üstte (kâğıt geçişi), cüzdan ve sepet altta; son cümlede "para" vurgusu.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tN = K(0, "nutritious"), tC = K(0, "cancer"), tL = K(1, "last chapter");
  const [sc, al] = pop(t, tL, 0.5);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 440,
        background: `linear-gradient(to bottom, rgba(246,243,236,0.96) 0%, rgba(246,243,236,0.96) 55%, rgba(246,243,236,0) 100%)` }} />
      <Not t={t} bas={tN - 0.3} metin="MORE NUTRITIOUS?" x={150} y={40} boyut={32} agirlik={800} />
      <Baslik t={t} bas={tN} metin="NOT CLEARLY" x={150} y={150} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={tC - 0.3} metin="LOWER CANCER RISK?" x={1000} y={40} boyut={32} agirlik={800} />
      <Baslik t={t} bas={tC} metin="STILL UNPROVEN" x={1000} y={150} boyut={96} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 960, top: 300, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="THE LAST CHAPTER" renk={RENK.koyuYesil} boyut={32} />
      </div>
      <Etiket t={t} bas={K(1, "worth")} capa={[620, 760]} konum={[640, 560]} metin="WORTH THE MONEY?" renk={RENK.yesil} boyut={28} />
    </>
  );
};
export default S38;
