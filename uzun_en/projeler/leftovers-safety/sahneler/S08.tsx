// Sahne 8 — ocaktan buzdolabına geçen süre: parçacık akışı, saat halkası, alt başlık.
import React from "react";
import { Baslik, Etiket, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1760]);
  const tHow = K(1, "how long");
  const ring = eout(ilerle(t, tHow, 0.6));
  const t1 = K(0, "days") + 0.3;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={w}>
        {/* ocak önündeki küçük sahte işaret */}
        <div style={{ position: "absolute", left: 360, top: 915, width: 80, height: 50,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #E4DDCC 0%, #E4DDCC 60%, ${kagit(0)} 100%)` }} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <circle cx={975} cy={640} r={135} fill="none" stroke={RENK.altin} strokeWidth={6} strokeDasharray="16 12" opacity={ring} />
        </svg>
        <Etiket t={t} bas={K(1, "warm")} capa={[340, 330]} konum={[340, 100]} metin="WARM RANGE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "cold")} capa={[1440, 360]} konum={[1230, 110]} metin="COLD" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(1, "before")} kaynak={[480, 430]} hedef={[1390, 330]} adet={20} tohum="akis" />
      </Kamera>
      <Baslik t={t} bas={K(0, "question")} bitis={tHow - 0.1} metin="NOT HOW MANY DAYS" x={985} y={885} boyut={50} renk={RENK.mercan} hiza="orta" />
      <Baslik t={t} bas={tHow} metin="TIME IN THE WARM RANGE" x={960} y={885} boyut={44} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S08;
