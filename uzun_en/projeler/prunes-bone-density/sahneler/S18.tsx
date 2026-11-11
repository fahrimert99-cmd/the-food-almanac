// Sahne 18 — çift doz daha iyi değil: iki kase, sağda başlık ve not.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1840]);
  const tSurpriz = K(0, "surprise"), t100 = K(1, "100 grams"), tDoz = K(1, "double the dose");
  const tFark = K(1, "did not differ"), tSon = K(2, "did not mean");
  const [sH, aH] = pop(t, tSon, 0.55);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={pencere}>
        <Etiket t={t} bas={t100} capa={[520, 430]} konum={[340, 110]} metin="100 G" renk={RENK.mercan} />
        <Etiket t={t} bas={tDoz + 0.2} capa={[930, 690]} konum={[1180, 800]} metin="50 G" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, tSurpriz, 0.6))} genislik={760} />
      <Not t={t} bas={tSurpriz} metin="NOW THE SURPRISE" x={1200} y={180} boyut={30} renk={RENK.altin} agirlik={800} bitis={tDoz} />
      <BaslikBlok t={t} bas={tDoz} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={270} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tFark} metin="Not significantly different from the control group" x={1180} y={480} boyut={34} genislik={640} />
      <div style={{ position: "absolute", left: 1180, top: 620, transform: `scale(${sH})`, transformOrigin: "0 50%", opacity: aH }}>
        <Hap metin="MORE ≠ MORE PROTECTION" renk={RENK.lacivert} boyut={30} />
      </div>
    </>
  );
};

export default S18;
