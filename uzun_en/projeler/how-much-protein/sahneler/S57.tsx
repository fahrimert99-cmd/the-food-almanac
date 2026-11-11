// Sahne 57 — masa ve dambıl: direnç egzersizi + öğünlere yayma.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "spreading") - 0.1;  // 1. cümle etiketleri solar
  const [sc, al] = pop(t, K(1, "thin"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        {/* 1. vuruş: protein + direnç egzersizi */}
        <Etiket t={t} bas={K(0, "Protein")} bitis={cik} capa={[893, 327]} konum={[1180, 190]} metin="PROTEIN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "resistance")} bitis={cik} capa={[1470, 815]} konum={[1520, 640]} metin="RESISTANCE EXERCISE" renk={RENK.altin} />
        {/* 2. vuruş: üç öğün */}
        <VurguRozet t={t} bas={K(1, "25")} vurgu="25–30 G" not="about, per meal" x={1560} y={150} renk={RENK.yesil} genislik={420} />
        <Etiket t={t} bas={K(1, "three")} capa={[700, 380]} konum={[560, 560]} metin="MEAL 1" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "meals")} capa={[893, 327]} konum={[893, 200]} metin="MEAL 2" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "meals") + 0.25} capa={[1053, 380]} konum={[1250, 480]} metin="MEAL 3" renk={RENK.yesil} />
      </Kamera>
      {/* 3. vuruş: kanıt hâlâ zayıf */}
      {al > 0 && (
        <div style={{ position: "absolute", left: 1560, top: 340, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
          <Hap metin="EVIDENCE STILL THIN" renk={RENK.mercan} boyut={30} />
        </div>
      )}
    </>
  );
};

export default S57;
