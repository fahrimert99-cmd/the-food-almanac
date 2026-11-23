// Sahne 33 — terazi: gluten ve kontrol proteini benzer; yalnızca %8'de glutene özgü etki.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 40, 1900], [60, 80, 1760]);
  const tBitis = K(1, "Only") - 0.15;
  const [sc, al] = pop(t, K(2, "gluten itself"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kam}>
        <Etiket t={t} bas={K(0, "gluten and")} bitis={tBitis} capa={[330, 520]} konum={[330, 800]} metin="GLUTEN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "control protein")} bitis={tBitis} capa={[930, 600]} konum={[930, 800]} metin="CONTROL PROTEIN" renk={RENK.lacivert} />
      </Kamera>
      <Not t={t} bas={K(0, "similar degree")} bitis={tBitis} metin="SYMPTOMS: SIMILAR ON BOTH" x={1300} y={300} boyut={34} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "8 percent")} vurgu="8%" not="of participants showed one" x={1560} y={150} renk={RENK.koyuYesil} genislik={420} boyut={120} />
      <BaslikBlok t={t} bas={K(1, "specific")} satirlar={["GLUTEN-SPECIFIC", "EFFECT"]} x={1240} y={500} boyut={78} />
      <div style={{ position: "absolute", left: 1240, top: 710, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="NOT THE CLEAR TRIGGER" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S33;
