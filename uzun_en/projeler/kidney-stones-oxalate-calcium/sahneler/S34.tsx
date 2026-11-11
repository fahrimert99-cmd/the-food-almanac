// Sahne 34 — haftada ~2 kez ıspanak: ~%30 yüksek risk. Takvim görseli (bozuk rakamlar) kâğıt yamayla örtülü.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  const [s1, a1] = pop(t, K(0, "roughly"), 0.5);
  const [s2, a2] = pop(t, K(0, "less than"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pen}>
        {/* takvim çerçevesi ve bozuk rakamlar örtülür; başlık yamanın üstünde */}
        <div style={{ position: "absolute", left: 80, top: 0, width: 820, height: 570, background: "rgb(252,252,240)", borderRadius: 30,
          boxShadow: "0 0 36px 30px rgb(252,252,240)" }} />
        <Baslik t={t} bas={K(0, "eight")} metin="8+ SPINACH" x={150} y={190} boyut={118} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(0, "times") + 0.1} metin="MEALS A MONTH" x={150} y={316} boyut={96} renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "spinach")} capa={[680, 740]} konum={[1330, 840]} metin="SPINACH" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1520, top: 150, transform: `translate(-50%,0) scale(${s1})`, opacity: a1 }}>
        <Hap metin="ROUGHLY TWICE A WEEK" renk={RENK.altin} boyut={30} />
      </div>
      <VurguRozet t={t} bas={K(0, "30")} vurgu="+30%" not="men and older women" x={1520} y={290} genislik={440} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1520, top: 590, transform: `translate(-50%,0) scale(${s2})`, opacity: a2 }}>
        <Hap metin="VS LESS THAN ONCE" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S34;
