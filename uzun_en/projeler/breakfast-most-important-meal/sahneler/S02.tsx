// Sahne 2 — kilo için zararsız görünür, ama sağlık ve ilaçlara bağlı bir "ama" var.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCatch = K(1, "catch");
  const tSag = K(1, "health"), tIlac = K(1, "medicines");
  const [s1, a1] = pop(t, tSag, 0.5);
  const [s2, a2] = pop(t, tIlac, 0.5);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1840], [60, 40, 1700])}>
        <Etiket t={t} bas={K(0, "weight,")} bitis={tCatch - 0.15} capa={[1350, 280]} konum={[900, 170]} metin="WEIGHT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "harmless.") - 0.1} bitis={tCatch - 0.15} metin="HARMLESS" x={520} y={330} boyut={104} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(0, "harmless.") + 0.1} bitis={tCatch - 0.15} ad="onay" x={1010} y={332} boyut={78} />
      <Baslik t={t} bas={tCatch} metin="THE CATCH" x={520} y={330} boyut={104} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 520, top: 410, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="YOUR HEALTH" renk={RENK.yesil} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 520, top: 490, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>
        <Hap metin="MEDICINES" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S02;
