// Sahne 30 — tam buğday ekşi mayalı ekmek: en güçlü etki; ama kanıt düzeyi düşük–çok düşük.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // Pencere y<960: sağ alttaki sahte imza dışarıda
  const pen = kameraYolu(t, s.sure, [0, 0, 1700], [120, 40, 1560]);
  const [sa, aa] = pop(t, K(1, "fasting"), 0.5);
  const [sb, ab] = pop(t, K(1, "authors"), 0.5);
  const fSon = K(1, "authors") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={pen}>
        <Etiket t={t} bas={K(0, "whole wheat")} bitis={K(1, "But") - 0.15} capa={[1100, 590]} konum={[1100, 420]} metin="WHOLE WHEAT SOURDOUGH" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "strongest")} bitis={K(1, "But") - 0.15} metin="STRONGEST EFFECT" x={1100} y={110} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      {aa > 0 && sol0(t, fSon) > 0 && (
        <div style={{ position: "absolute", left: 1100, top: 290, transform: `translate(-50%, -50%) scale(${sa})`, opacity: aa * sol0(t, fSon) }}>
          <Hap metin="FASTING INSULIN: NOT LOWERED" renk={RENK.mercan} boyut={38} />
        </div>
      )}
      <div style={{ position: "absolute", left: 1100, top: 345, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab }}>
        <Hap metin="THE AUTHORS' RATING" renk={RENK.lacivert} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={K(1, "certainty")} satirlar={["LOW TO VERY", "LOW CERTAINTY"]} x={1100} y={110} boyut={84} hiza="orta" />
    </>
  );
};

// Hap için basit sönme (kütüphanedeki sol, burada yerel)
const sol0 = (t: number, son: number) => Math.max(0, Math.min(1, 1 - (t - son) / 0.4));

export default S30;
