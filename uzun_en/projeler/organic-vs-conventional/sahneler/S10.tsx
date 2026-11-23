// Sahne 10 — vitaminler: denge terazisi, sağda başlık ve fosfor rozeti.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVit = K(0, "vitamins"), tNo = K(1, "no consistent"), tPho = K(2, "phosphorus"), tMin = K(2, "clinically");
  const [sc, al] = pop(t, tMin, 0.5);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        <Etiket t={t} bas={tNo} capa={[1040, 600]} konum={[1330, 840]} metin="NO CONSISTENT DIFFERENCE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tVit} satirlar={["VITAMINS"]} x={1860} y={190} boyut={120} hiza="sag" />
      <Not t={t} bas={tNo} metin="no consistent difference" x={1860} y={265} hiza="sag" boyut={36} />
      <VurguRozet t={t} bas={tPho} vurgu="PHOSPHORUS" not="THE ONLY NUTRIENT SIGNIFICANTLY HIGHER" x={1630} y={400}
        genislik={520} boyut={78} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1630, top: 640, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="CLINICALLY MINOR" renk={RENK.altin} boyut={32} />
      </div>
      <KaynakEtiketi t={t} metin="Smith-Spangler et al. · Ann Intern Med · 2012" />
    </>
  );
};

export default S10;
