// Sahne 10 — NOVA "nasıl üretildi"ye bakar: soda ve ambalajlı tam tahıllı ekmek aynı grupta.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBread = K(2, "packaged whole");
  const tGrup = K(2, "same group");
  const [sb, ab] = pop(t, tBread, 0.5);
  const [sg, ag] = pop(t, tGrup + 0.1, 0.55);
  const pk = eout(ilerle(t, tGrup - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 90, 1440], [0, 100, 1400])}>
        <Etiket t={t} bas={K(2, "sugary soda")} capa={[130, 560]} konum={[1120, 400]} metin="SUGARY SODA" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "how")} satirlar={["HOW, NOT", "WHAT'S INSIDE"]} x={1860} y={200} boyut={92} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={0.5} />
      <div style={{ position: "absolute", left: 1450, top: 590, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab }}>
        <Hap metin="PACKAGED WHOLE GRAIN BREAD" renk={RENK.yesil} boyut={30} />
      </div>
      {/* ikisini birleştiren parantez */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: pk }}>
        <path d={`M 1798 ${400 + 8} C 1850 ${400 + 8}, 1850 ${590 - 8}, 1798 ${590 - 8}`} fill="none" stroke={RENK.altin} strokeWidth={8}
          strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - einout(pk)} />
      </svg>
      <div style={{ position: "absolute", left: 1640, top: 700, transform: `translate(-50%, 0) scale(${sg})`, opacity: ag }}>
        <Hap metin="SAME GROUP" renk={RENK.altin} boyut={36} />
      </div>
    </>
  );
};

export default S10;
