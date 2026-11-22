// Sahne 14 — 24 karşılaştırma, 10.708 kişi; risk oranı 0.97 (neredeyse etkisiz).
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, Baslik, VurguRozet, Not, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 40, 1920], [90, 150, 1740]);
  const tBaslik = K(0, "fewer colds");
  const tKarsi = K(1, "24"), tKisi = K(1, "10,708"), tCevap = K(1, "the answer");
  const tOran = K(2, "zero point nine seven"), tUc = K(2, "three percent"), tAralik = K(2, "uncertainty");
  const tGecis = K(2, "The");
  const [sU, aU] = pop(t, tUc, 0.55);
  const [sA, aA] = pop(t, tAralik, 0.55);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kam}>
        <Etiket t={t} bas={tKarsi} bitis={tGecis} capa={[560, 520]} konum={[560, 345]} metin="24 COMPARISONS" renk={RENK.altin} />
        <Etiket t={t} bas={tKisi} bitis={tGecis} capa={[1240, 560]} konum={[1240, 790]} metin="10,708 PEOPLE" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tBaslik - 0.15} bitis={tGecis} metin={s.meta.baslik!.satirlar[0]} x={960} y={160} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={tCevap} bitis={tGecis} metin="THE ANSWER: BARELY" x={960} y={880} boyut={40} hiza="orta" agirlik={800} />
      <VurguRozet t={t} bas={tOran} vurgu={s.meta.baslik!.vurgu!} not={s.meta.baslik!.not} x={960} y={175} genislik={520} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 480, top: 770, transform: `translate(-50%,-50%) scale(${sU})`, opacity: aU }}>
        <Hap metin="≈ 3% FEWER COLDS" renk={RENK.altin} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1440, top: 770, transform: `translate(-50%,-50%) scale(${sA})`, opacity: aA }}>
        <Hap metin="RANGE REACHES NO EFFECT" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S14;
