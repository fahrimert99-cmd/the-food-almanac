// Sahne 28 — istisna grubu: 5 deneme, 598 kişi, risk oranı 0.48.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1800]);
  const bit = c[1].bas - 0.15;
  const X = 1130;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={pen}>
        <Etiket t={t} bas={K(0, "subarctic")} bitis={bit} capa={[520, 330]} konum={[1000, 130]} metin="SUBARCTIC" renk={RENK.lacivert} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={0.2} />}
      {/* 1. cümle */}
      <Baslik t={t} bas={K(0, "five")} bitis={bit} metin="5 TRIALS" x={X} y={250} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "598")} bitis={bit} metin="598 PEOPLE" x={X} y={370} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "runners,")} bitis={bit} metin={s.meta.baslik!.satirlar[0]} x={X} y={520} boyut={64} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "soldiers")} bitis={bit} metin={s.meta.baslik!.satirlar[1]} x={X} y={595} boyut={64} renk={RENK.altin} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "daily")} metin="DAILY VITAMIN C" x={X} y={230} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "cut")} metin="CUT COLD RISK" x={X} y={320} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "roughly")} metin="ROUGHLY IN HALF" x={X} y={410} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "zero")} vurgu={s.meta.baslik!.vurgu!} not={s.meta.baslik!.not} x={1490} y={540} genislik={560} renk={RENK.yesil} />
    </>
  );
};

export default S28;
