// Sahne 20 — çocuklar: solda görsel, sağda başlık, rozet, kesinlik hapı.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta;
  const [sc, al] = pop(t, K(2, "moderate") - 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [0, 110, 1700])} />
      <Baslik t={t} bas={K(0, "children")} metin="CHILDREN" x={1860} y={230} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Etiket t={t} bas={K(0, "children") + 0.2} capa={[570, 440]} konum={[360, 220]} metin="CHILD'S CUP" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "five")} metin="5 trials · 504 children" x={1860} y={350} hiza="sag" boyut={42} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "half")} vurgu={m.baslik!.vurgu!} not="risk of a UTI" x={1500} y={470} genislik={420} />
      <div style={{ position: "absolute", left: 1500, top: 800, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin="CERTAINTY: MODERATE" renk={RENK.altin} boyut={32} />
      </div>
      <KaynakEtiketi t={t} metin={m.etiket!} />
    </>
  );
};

export default S20;
