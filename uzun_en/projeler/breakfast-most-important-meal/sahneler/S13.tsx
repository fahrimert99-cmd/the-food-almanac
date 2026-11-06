// Sahne 13 — kahvaltı yiyenler ~260 kcal fazla aldı; deneyler kısa ve yanlılık riskli, nedensellik kanıtlamaz.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, ilerle, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEaters = K(0, "eaters"), t260 = K(0, "260");
  const tShort = K(1, "short"), tBias = K(1, "risk of bias"), tProve = K(1, "does not"), tGain = K(1, "gain");
  const z = ilerle(t, 0, s.sure);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={[40 + 20 * z, 60 + 30 * z, 1840 - 90 * z]}>
        <Etiket t={t} bas={tEaters} bitis={tShort - 0.2} capa={[427, 680]} konum={[440, 440]} metin="BREAKFAST EATERS" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={t260} bitis={tShort - 0.2} vurgu="+260" not="CALORIES A DAY" x={1480} y={130} renk={RENK.mercan} genislik={400} />
      <Liste t={t} isaret="nokta" x={140} y={140} boyut={42} aralik={80} genislik={900}
        ogeler={[{ bas: tShort, metin: "SHORT: A FEW WEEKS", renk: RENK.altin }, { bas: tBias, metin: "SOME RISK OF BIAS", renk: RENK.mercan }]} />
      <Baslik t={t} bas={tProve} metin="DOES NOT PROVE" x={960} y={850} boyut={84} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tGain} metin="that breakfast makes you gain weight" x={960} y={900} boyut={34} hiza="orta" agirlik={700} />
    </>
  );
};

export default S13;
