// Sahne 18 — yalnızca kapsülleri sürdürenler: toplam olay ~%15 düşük, ek varsayımlar
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [50, 50, 1690]);
  const tKept = K(0, "kept taking"), tTot = K(0, "total events"), t15 = K(0, "15 percent"), tZero = K(0, "excluded zero");
  const tAss = K(1, "extra assumptions"), tCau = K(1, "urged caution");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={w}>
        <Etiket t={t} bas={tKept} bitis={tAss} capa={[440, 640]} konum={[440, 420]} metin="KEPT TAKING CAPSULES" renk={RENK.altin} />
        <Etiket t={t} bas={tTot} bitis={tAss} capa={[1400, 470]} konum={[1400, 220]} metin="TOTAL EVENTS" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={t15} bitis={tAss - 0.1} vurgu="≈ –15%" not="total events, adherent people only" x={520} y={770} genislik={560} boyut={96} />
      <Not t={t} bas={tZero} bitis={tAss - 0.1} metin="RANGE JUST EXCLUDED ZERO" x={1000} y={800} boyut={32} agirlik={800} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAss} metin="EXTRA ASSUMPTIONS" x={80} y={800} boyut={76} renk={RENK.lacivert} />
      <Ikon t={t} bas={tCau} ad="uyari" x={110} y={895} boyut={64} zemin={RENK.altin} />
      <Baslik t={t} bas={tCau} metin="AUTHORS URGED CAUTION" x={170} y={895} boyut={52} renk={RENK.altin} />
    </>
  );
};

export default S18;
