// Sahne 25 — kemik canlı doku: osteoklast / osteoblast etiketleri
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kam}>
        {/* kemik üzerindeki hücre noktalarına etiketler */}
        <Etiket t={t} bas={K(1, "osteoclasts")} capa={[683, 473]} konum={[360, 370]} metin="OSTEOCLASTS: BREAK DOWN" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(1, "osteoblasts")} capa={[901, 309]} konum={[1540, 300]} metin="OSTEOBLASTS: BUILD NEW" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Bone")} metin="BONE IS ALIVE" x={80} y={235} boyut={112} renk={RENK.koyuYesil} />
    </>
  );
};

export default S25;
