// Sahne 24 — tansiyon göstergesi: sistolik ve diyastolik yaklaşık 1,8 mmHg düşüş
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSis = K(0, "systolic"), tRak = K(0, "1.8"), tDia = K(1, "Diastolic"), tIki = K(1, "1.8");
  const [sc, al] = pop(t, tIki, 0.55);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])} />
      <Baslik t={t} bas={0.3} metin="BLOOD PRESSURE" x={1860} y={190} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tSis} bitis={tDia - 0.2} capa={[487, 380]} konum={[930, 330]} metin="SYSTOLIC · TOP" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tRak} vurgu="–1.8" not="millimeters of mercury" x={1560} y={400} genislik={420} renk={RENK.mercan} />
      <Etiket t={t} bas={tDia} capa={[680, 490]} konum={[1060, 520]} metin="DIASTOLIC · BOTTOM" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1560, top: 700, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="TOP AND BOTTOM: ≈ –1.8" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};

export default S24;
