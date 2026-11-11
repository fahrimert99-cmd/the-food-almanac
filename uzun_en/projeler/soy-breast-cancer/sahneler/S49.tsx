// Sahne 49 — bu çalışmalar soya gıdalarıydı, takviyeler değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şişenin üstünden geçen kesik çizgiyi örten yamalar (görsel koordinatı)
const Yama: React.FC<{ x0: number; x1: number; renk: string }> = ({ x0, x1, renk }) => (
  <div style={{ position: "absolute", left: x0, top: 537, width: x1 - x0, height: 16, background: renk }} />
);

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "little"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1810])}>
        <Yama x0={1010} x1={1270} renk="#F5F6EE" />
        <Yama x0={1286} x1={1548} renk="linear-gradient(to right, #F5F6EE 0%, #F2F2EA 40%, #EAE7DB 75%, #DDD8C8 100%)" />
        <Yama x0={1562} x1={1790} renk="#F5F6EE" />
        <Etiket t={t} bas={K(0, "soy")} capa={[470, 620]} konum={[470, 250]} metin="SOY FOODS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "concentrated")} capa={[1400, 660]} konum={[1230, 110]} metin="PILLS & POWDERS" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1400, top: 905, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="TELL US LITTLE" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S49;
