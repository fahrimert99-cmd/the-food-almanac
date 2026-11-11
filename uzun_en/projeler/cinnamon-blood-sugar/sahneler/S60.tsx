// Sahne 60 — tarçın, kan şekeri ölçer, A1C belirsizliği
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitis1 = c[1].bas - 0.1;
  const tDis = K(1, "disagree");
  const [sc, al] = pop(t, tDis, 0.5);
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])} >
        {/* tarçın çubuğu ve ölçer */}
        <Etiket t={t} bas={K(0, "cinnamon")} bitis={bitis1} capa={[420, 450]} konum={[230, 640]} metin="CINNAMON" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "fasting")} bitis={bitis1} capa={[1500, 470]} konum={[1460, 290]} metin="FASTING GLUCOSE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "25")} bitis={bitis1} vurgu="–25" not="MG/DL, ABOUT" x={230} y={70} genislik={320} renk={RENK.altin} />
      {/* ikinci cümle: A1C etkisi küçük ve tutarsız */}
      <Baslik t={t} bas={K(1, "A1C")} metin="A1C EFFECT" x={1860} y={150} boyut={62} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "small")} metin="SMALL &" x={1860} y={218} boyut={62} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "inconsistent")} metin="INCONSISTENT" x={1860} y={286} boyut={62} renk={RENK.koyuYesil} hiza="sag" />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1480, top: 880, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="REVIEWS DISAGREE" renk={RENK.mercan} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S60;
