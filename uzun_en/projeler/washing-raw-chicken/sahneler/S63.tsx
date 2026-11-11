// Sahne 63 — beş alışkanlık: tavuk, tahta, sünger, termometre, lavabo.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S63: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEl = K(1, "wash your hands");
  const [sc, al] = pop(t, tEl, 0.5);
  return (
    <>
      {/* alt kenardaki lekeden kaçınmak için pencere y<=1000 */}
      <Kamera gorsel="tam/63" pencere={kameraYolu(t, s.sure, [40, 0, 1840], [70, 10, 1800])}>
        <Baslik t={t} bas={K(0, "habits")} bitis={2.3} metin="SIMPLE HABITS" x={960} y={180} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
        <Etiket t={t} bas={K(1, "Skip")} capa={[1585, 380]} konum={[1240, 260]} metin="SKIP THE RINSE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "separate")} capa={[360, 760]} konum={[360, 890]} metin="SEPARATE BOARD" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "sanitize")} capa={[1800, 660]} konum={[1700, 150]} metin="SANITIZE SINK" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "cook")} capa={[1120, 590]} konum={[960, 890]} metin="COOK TO TEMPERATURE" renk={RENK.mercan} />
        <div style={{ position: "absolute", left: 700, top: 215, opacity: al, transform: `scale(${sc})` }}>
          <Hap metin="WASH HANDS" renk={RENK.lacivert} />
        </div>
      </Kamera>
    </>
  );
};

export default S63;
