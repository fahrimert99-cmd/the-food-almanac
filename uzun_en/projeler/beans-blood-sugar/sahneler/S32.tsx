// Sahne 32 — fasulye ilaç değil: yardımcı, tedavi değil.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIlac = K(0, "not a"), tBaslik = K(0, "medicine"), tOlcul = K(1, "modest"), tIki = K(1, "two tenths");
  const tGercek = K(2, "real"), tDegil = K(2, "does not");
  const [sc, al] = pop(t, tOlcul, 0.5);
  const aH = al * sol(t, tIki - 0.1);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [10, 5, 1890])}>
        <Etiket t={t} bas={tIlac} bitis={tOlcul - 0.2} capa={[440, 400]} konum={[440, 170]} metin="NOT A MEDICINE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} satirlar={["A HELPER,", "NOT A CURE"]} x={1290} y={200} boyut={116}
        renkler={[RENK.koyuYesil, RENK.mercan]} adim={0.25} />
      {aH > 0 && (
        <div style={{ position: "absolute", left: 1565, top: 500, transform: `translate(-50%, -50%) scale(${sc})`, opacity: aH }}>
          <Hap metin="MODEST BENEFIT" renk={RENK.altin} boyut={32} />
        </div>
      )}
      <VurguRozet t={t} bas={tIki} bitis={tGercek - 0.2} vurgu="≈ 0.2" not="A1C POINT BEYOND A GOOD HIGH FIBER DIET" x={1565} y={440}
        genislik={460} />
      <Liste t={t} isaret="onay" x={1280} y={470} boyut={34} genislik={600}
        ogeler={[{ bas: tGercek, metin: "THAT IS REAL", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={1280} y={575} boyut={34} genislik={600}
        ogeler={[{ bas: tDegil, metin: "NO REPLACEMENT FOR TREATMENT", renk: RENK.mercan }]} />
    </>
  );
};

export default S32;
