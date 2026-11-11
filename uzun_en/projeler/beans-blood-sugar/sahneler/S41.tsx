// Sahne 41 — gaz bulguları: görsel solda, sağda başlık, rozet ve sıralı notlar.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "worries"), 0.5);
  const [s2, a2] = pop(t, K(2, "so go"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 30, 1800])}>
        <Etiket t={t} bas={K(0, "without beans")} bitis={K(1, "authors")} capa={[480, 640]} konum={[800, 330]} metin="BEAN BOWL" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} satirlar={s.meta.baslik!.satirlar} x={1030} y={190} boyut={100} />
      <VurguRozet t={t} bas={K(0, "three to eleven")} vurgu="3–11%" not="ON CONTROL DIETS, NO BEANS" x={1440} y={420} genislik={560} boyut={104} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1440, top: 690, transform: `translate(-50%, -50%) scale(${s1})`, opacity: a1 }}>
        <Hap metin="GAS WORRIES MAY BE EXAGGERATED" renk={RENK.altin} boyut={30} />
      </div>
      <Not t={t} bas={K(2, "individual")} metin="INDIVIDUAL EXPERIENCE STILL VARIES" x={1440} y={760} hiza="orta" boyut={30} agirlik={800} />
      <div style={{ position: "absolute", left: 1440, top: 870, transform: `translate(-50%, -50%) scale(${s2})`, opacity: a2 }}>
        <Hap metin="GO GRADUALLY" renk={RENK.yesil} boyut={36} />
      </div>
    </>
  );
};

export default S41;
