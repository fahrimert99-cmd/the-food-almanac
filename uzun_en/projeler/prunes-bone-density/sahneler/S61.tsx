// Sahne 61 — özet: kapanış mesajı. Pencere önünde kase ve çay; başlık kâğıt kartta, hap etiketleri sağ üstte.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, eout, ilerle, pop } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProm = K(0, "promising"), tMod = K(0, "modest"), tHelp = K(1, "helpful"), tNot = K(1, "not a treatment"), tDoc = K(1, "talk");
  const pk = eout(ilerle(t, 0.1, 0.5));
  const [s1, a1] = pop(t, tNot, 0.5);
  const [s2, a2] = pop(t, tDoc, 0.5);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tHelp} capa={[680, 600]} konum={[560, 470]} metin="HELPFUL FOOD" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 120, top: 70, width: 640, height: 270, borderRadius: 24, opacity: pk,
        background: kagit(0.94), boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }} />
      <Baslik t={t} bas={tProm} metin="PROMISING" x={160} y={140} boyut={90} renk={RENK.lacivert} />
      <Baslik t={t} bas={tMod} metin="BUT MODEST" x={160} y={245} boyut={90} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1300, top: 170, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="NOT A TREATMENT" renk={RENK.mercan} boyut={32} />
      </div>
      <div style={{ position: "absolute", left: 1300, top: 270, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="TALK WITH YOUR DOCTOR" renk={RENK.altin} boyut={32} />
      </div>
    </>
  );
};

export default S61;
