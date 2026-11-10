// Sahne 19 — göreli azalma ≠ garanti; raflar: sık / seyrek enfeksiyon (örnek, temsili).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRel = K(0, "relative"), tNot = K(0, "not a"), tDep = K(1, "depends");
  const bit0 = K(1, "How") - 0.1;
  const aH = eout(ilerle(t, K(1, "how often"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* orta boşlukta yazı zemini */}
      <div style={{ position: "absolute", left: 500, top: 430, width: 920, height: 250, opacity: eout(ilerle(t, tRel - 0.1, 0.4)) * (t < bit0 ? 1 : 0),
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.95)} 0%, ${kagit(0.9)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tRel} bitis={bit0} metin="RELATIVE DROP" x={960} y={500} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tNot} bitis={bit0} metin="NOT A GUARANTEE" x={960} y={620} boyut={100} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tDep} metin="DEPENDS ON HOW OFTEN" x={960} y={500} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <Etiket t={t} bas={K(1, "often")} capa={[1500, 250]} konum={[1640, 440]} metin="GET THEM OFTEN" renk={RENK.mercan} boyut={26} />
      <Etiket t={t} bas={K(1, "first place") - 0.2} capa={[1490, 800]} konum={[1640, 640]} metin="GET THEM RARELY" renk={RENK.yesil} boyut={26} />
      <div style={{ position: "absolute", left: 960, top: 590, transform: "translateX(-50%)", opacity: aH }}>
        {/* temsili etiketi */}
        <Hap metin="ILLUSTRATIVE" renk={RENK.altin} boyut={22} />
      </div>
    </>
  );
};

export default S19;
