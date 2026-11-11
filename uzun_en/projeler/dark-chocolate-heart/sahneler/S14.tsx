// Sahne 14 — ana sonuç: toplam KD olayları, 410 vs 456, ~%10 az.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  const bit = K(1, "There") - 0.2;
  const OGE = [
    ["heart", "HEART ATTACKS"], ["strokes", "STROKES"], ["procedures", "OPEN ARTERIES"], ["cardiovascular death", "CV DEATH"], ["other", "OTHER EVENTS"],
  ] as const;
  return (
    <>
      <Kamera gorsel="tam/14" pencere={p}>
        <Etiket t={t} bas={K(1, "410")} capa={[480, 560]} konum={[520, 880]} metin="COCOA: 410" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "456")} capa={[1130, 590]} konum={[1130, 880]} metin="PLACEBO: 456" renk={RENK.lacivert} />
      </Kamera>
      <Not t={t} bas={K(0, "total")} bitis={bit} metin="TOTAL CARDIOVASCULAR EVENTS" x={1450} y={170} boyut={30} agirlik={800} renk={RENK.koyuYesil} genislik={430} />
      <Liste t={t} x={1450} y={290} aralik={86} boyut={28} isaret="nokta" genislik={430}
        ogeler={OGE.map(([f, m], i) => ({ bas: i === 0 ? K(0, "heart") : K(0, f), metin: m, renk: i === 3 ? RENK.mercan : RENK.altin, bitis: bit }))} />
      <Baslik t={t} bas={K(1, "410")} metin="410 VS 456" x={110} y={110} boyut={120} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(2, "ten percent")} vurgu="≈ 10% FEWER" not="COCOA EXTRACT VS PLACEBO" x={1620} y={400} genislik={460} boyut={80} />
    </>
  );
};

export default S14;
