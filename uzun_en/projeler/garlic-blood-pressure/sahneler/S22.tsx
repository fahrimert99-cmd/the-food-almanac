// Sahne 22 — dört kapsül ikiden iyi değil (cam kavanozlar).
import React from "react";
import { AltSis, BaslikBlok, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "Four capsules"), tIki = K(0, "than two"), tNot = K(0, "did not");
  const tBaslik = K(1, "More isn't"), tIlac = K(1, "on top of");
  const [s1, a1] = pop(t, tDort, 0.5);
  const [s2, a2] = pop(t, tNot, 0.45);
  const [s3, a3] = pop(t, tIki, 0.5);
  const [s4, a4] = pop(t, tIlac, 0.5);
  const yaz = eout(ilerle(t, tBaslik, 0.4));
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [300, 0, 1400], [335, 30, 1330])} />
      <AltSis a={0.6} yukseklik={130} />
      {/* karşılaştırma yığını sağ üst duvarda */}
      <div style={{ position: "absolute", left: 1500, top: 120, transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="4 CAPSULES" renk={RENK.mercan} boyut={40} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="NOT BETTER THAN" renk={RENK.altin} boyut={26} /></div>
        <div style={{ transform: `scale(${s3})`, opacity: a3 }}><Hap metin="2 CAPSULES" renk={RENK.yesil} boyut={40} /></div>
      </div>
      <div style={{ position: "absolute", left: 1500, top: 480, transform: `translateX(-50%) scale(${s4})`, opacity: a4 }}>
        <Hap metin="ON TOP OF MEDICATION" renk={RENK.lacivert} boyut={28} />
      </div>
      <div style={{ opacity: yaz }}>
        <BaslikBlok t={t} bas={tBaslik} satirlar={s.meta.baslik!.satirlar} x={70} y={140} boyut={92} />
      </div>
    </>
  );
};

export default S22;
