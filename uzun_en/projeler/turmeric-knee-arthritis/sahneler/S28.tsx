// Sahne 28 — kanıt kesinliği (orta → çok düşük), temkinli öneri, fonlama kaynağı.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b1 = K(1, "Some") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "cautious")} bitis={b1} capa={[1120, 650]} konum={[940, 800]} metin="CAUTIOUS RECOMMENDATION" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={K(1, "funded")} capa={[1560, 640]} konum={[1560, 820]} metin="FUNDING LINKS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "certainty")} bitis={b1} metin="CERTAINTY OF EVIDENCE" x={960} y={70} boyut={64} hiza="orta" renk={RENK.koyuYesil} />
      <div style={{ opacity: sol(t, b1) }}>
        <AdimAkisi t={t} x={960} y={185} boyut={30} numarali={false} adimlar={[
          { bas: K(0, "moderate"), metin: "MODERATE", renk: RENK.altin },
          { bas: K(0, "very"), metin: "VERY LOW", renk: RENK.mercan },
        ]} />
      </div>
      <Baslik t={t} bas={K(1, "who")} metin="WHO PAID?" x={960} y={90} boyut={96} hiza="orta" renk={RENK.lacivert} />
    </>
  );
};

export default S28;
