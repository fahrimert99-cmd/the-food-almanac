// Sahne 25 — yarım yemek kaşığı: solda görsel, sağda başlık ve iki risk rozeti.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const tYarim = K(0, "half a tablespoon"), tGram = K(0, "7 grams"), t14 = K(0, "14 percent"), t18 = K(0, "18 percent");
  const tRare = K(0, "rarely used it");
  const aRare = eout(ilerle(t, tRare, 0.5));
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 40, 1500], [20, 70, 1400])} />
      <Panel a={1} taraf="sag" genislik={860} opak={1} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <BaslikBlok t={t} bas={tYarim} satirlar={b.satirlar} x={1190} y={220} boyut={104} />
      <Etiket t={t} bas={tGram} capa={[590, 650]} konum={[400, 880]} metin="ABOUT 7 G" renk={RENK.altin} />
      <VurguRozet t={t} bas={t14} vurgu="–14%" not="cardiovascular disease" x={1340} y={500} genislik={340} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t18} vurgu={b.vurgu!} not="coronary heart disease" x={1730} y={500} genislik={340} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1190, top: 790, width: 720, opacity: aRare, transform: `translateY(${(1 - aRare) * 12}px)`,
        fontFamily: INTER, fontWeight: 700, fontSize: 32, lineHeight: 1.3, color: RENK.lacivert }}>
        vs. people who rarely used it<br /><span style={{ fontWeight: 500, fontSize: 26, color: RENK.gri }}>{b.not}</span>
      </div>
    </>
  );
};

export default S25;
