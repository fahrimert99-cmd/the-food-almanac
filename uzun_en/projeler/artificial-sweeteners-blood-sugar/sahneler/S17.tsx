// Sahne 17 — Greyling 2020: genel sonuç yok, tip 2 diyabette küçük fark. Görsel solda, sağda panel.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSig = K(0, "significant"), tT2 = K(1, "type 2"), tRise = K(1, "after-meal"), t03 = K(1, "0.3"), t5 = K(1, "5");
  const aPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 80, 1760])}>
        <Etiket t={t} bas={tSig} bitis={4.3} capa={[340, 520]} konum={[420, 250]} metin="BLOOD SUGAR" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={860} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      {/* 1. cümle: sonuç başlığı */}
      <BaslikBlok t={t} bas={0.4} satirlar={s.meta.baslik?.satirlar ?? []} x={1180} y={250} boyut={72} bitis={5.2}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* 2. cümle: tip 2 diyabet, küçük fark */}
      <Baslik t={t} bas={tT2} metin="TYPE 2 DIABETES" x={1180} y={230} boyut={66} renk={RENK.lacivert} />
      <Not t={t} bas={tRise} metin="after-meal rise: slightly smaller" x={1184} y={290} boyut={34} genislik={640} />
      <VurguRozet t={t} bas={t03} vurgu="0.3 MMOL/L" not="smaller after-meal rise" x={1520} y={400} renk={RENK.yesil}
        genislik={440} boyut={86} />
      <VurguRozet t={t} bas={t5} vurgu="≈ 5 MG/DL" not="same difference, other units" x={1520} y={640} renk={RENK.koyuYesil}
        genislik={440} boyut={86} />
    </>
  );
};

export default S17;
