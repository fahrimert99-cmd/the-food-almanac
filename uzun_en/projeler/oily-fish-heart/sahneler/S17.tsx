// Sahne 17 — mercek, konserve ve kapsül; kalp krizi –28% (ikincil sonuç, ipucu).
import React from "react";
import { AltSis, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const B = { satirlar: [] as string[], vurgu: "", not: "", ...(s.meta.baslik ?? {}) };
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1730]);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={p} />
      <AltSis a={0.5} />
      {/* mercek: öne çıkan ayrıntı */}
      <Etiket t={t} bas={K(0, "detail")} bitis={K(1, "Heart") } capa={[830, 290]} konum={[1380, 170]} metin="ONE DETAIL" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "Heart attacks")} satirlar={B.satirlar} x={1080} y={170} boyut={92} />
      <VurguRozet t={t} bas={K(1, "28")} vurgu={B.vurgu} not={B.not} x={1470} y={400} renk={RENK.koyuYesil} genislik={420} />
      <Etiket t={t} bas={K(1, "fish oil")} capa={[640, 500]} konum={[520, 340]} metin="FISH OIL GROUP" renk={RENK.altin} />
      <Not t={t} bas={K(2, "clue,")} metin="CLUE, NOT PROOF" x={1650} y={640} hiza="orta" boyut={38} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S17;
