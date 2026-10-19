// Sahne 8 — Büyük bir yumurtada ~185 mg diyet kolesterolü.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, sayac } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t185 = K(0, "185");
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 80, 1900], [60, 130, 1780])}>
        {/* tabak altındaki sahte imza yazısı örtülür */}
        <div style={{ position: "absolute", left: 300, top: 905, width: 420, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,244,213,1) 0%, rgba(249,244,213,1) 60%, rgba(249,244,213,0) 100%)` }} />
        <Etiket t={t} bas={K(0, "large")} bitis={t185 + 0.5} capa={[535, 675]} konum={[1100, 560]} metin="LARGE EGG" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={t185} metin={`${sayac(t, t185, 185, 1.0)} MG`} x={1860} y={250} boyut={170} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={K(0, "dietary")} metin="DIETARY CHOLESTEROL" x={1860} y={350} hiza="sag" boyut={42} agirlik={800} />
      <Not t={t} bas={K(0, "cholesterol")} metin="PER LARGE EGG" x={1860} y={405} hiza="sag" boyut={34} agirlik={600} renk={RENK.gri} />
      <Not t={t} bas={K(1, "a lot")} metin="A LOT COMPARED WITH MOST FOODS" x={1860} y={560} hiza="sag" boyut={36} agirlik={800} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "reputation")} metin="THE EGG'S REPUTATION" x={1860} y={640} hiza="sag" boyut={36} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S08;
