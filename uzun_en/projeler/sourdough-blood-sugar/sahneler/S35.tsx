// Sahne 35 — somunun kendisi: faktör listesi solda, sonda başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800]);
  const tBitir = K(2, "So") - 0.15;
  const aNot = eout(ilerle(t, K(1, "glucose response"), 0.5)) * (1 - eout(ilerle(t, tBitir, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kp}>
        <Etiket t={t} bas={K(0, "bread itself")} bitis={tBitir} capa={[860, 640]} konum={[560, 590]} metin="THE BREAD" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(1, "same review")} bitis={tBitir} metin="Stamataki et al. · Br J Nutr · 2017" />
      <Liste t={t} x={100} y={170} aralik={84} boyut={36} isaret="nokta" genislik={760} ogeler={[
        { bas: K(1, "proofing"), metin: "PROOFING TIME", renk: RENK.altin, bitis: tBitir },
        { bas: K(1, "baking"), metin: "BAKING METHOD", renk: RENK.altin, bitis: tBitir },
        { bas: K(1, "structure"), metin: "BREAD STRUCTURE", renk: RENK.altin, bitis: tBitir },
      ]} />
      <div style={{ opacity: aNot }}>
        <Not t={t} bas={K(1, "glucose response")} bitis={tBitir} metin="ALL CAN CHANGE THE GLUCOSE RESPONSE" x={100} y={440} boyut={28} agirlik={800} renk={RENK.mercan} genislik={700} />
      </div>
      <BaslikBlok t={t} bas={K(2, "fermentation")} satirlar={["MORE THAN", "FERMENTATION"]} x={100} y={230} boyut={112}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};
export default S35;
