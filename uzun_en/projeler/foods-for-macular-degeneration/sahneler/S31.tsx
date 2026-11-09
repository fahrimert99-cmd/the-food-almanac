// Sahne 31 — balık yağı: etki yok; tabaktaki balık ayrı soru
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBit = K(2, "Fish") - 0.1;
  const [sc, al] = pop(t, K(1, "years,"), 0.5);
  const aH = al * sol(t, tBit);
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 70, 1880], [60, 110, 1760])}>
        <Etiket t={t} bas={K(0, "fish-oil")} capa={[373, 560]} konum={[330, 270]} metin="FISH-OIL CAPSULES" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={K(2, "Fish")} capa={[1090, 650]} konum={[1130, 420]} metin="FISH ON THE PLATE" renk={RENK.lacivert} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bitis={tBit} />
      <BaslikBlok t={t} bas={K(0, "fish-oil")} bitis={tBit} satirlar={["FISH-OIL", "CAPSULES"]} x={1860} y={250} boyut={92} hiza="sag" />
      {aH > 0 && (
        <div style={{ position: "absolute", right: 60, top: 470, opacity: aH, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
          <Hap metin="AFTER 10 YEARS" renk={RENK.lacivert} boyut={34} />
        </div>
      )}
      <VurguRozet t={t} bas={K(1, "no")} bitis={tBit} vurgu="NO EFFECT" not="on late macular degeneration" x={1620} y={580} genislik={440} boyut={84} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "different")} satirlar={["A DIFFERENT", "QUESTION"]} x={1860} y={250} boyut={80} hiza="sag" />
      <Not t={t} bas={K(2, "didn't")} metin="not tested in this trial" x={1860} y={440} hiza="sag" boyut={38} agirlik={800} />
    </>
  );
};

export default S31;
