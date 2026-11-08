// Sahne 13 — Chickensplash çalışması (2022, Physics of Fluids).
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCs = K(1, "Chickensplash");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1720])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "physics.")} bitis={1.6} metin="THE PHYSICS" x={70} y={240} boyut={112} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "2022,")} bitis={tCs - 0.2} vurgu="2022" not="PUBLISHED STUDY" x={280} y={170} genislik={340} boyut={92} />
      <Baslik t={t} bas={K(1, "engineers")} bitis={tCs - 0.2} metin="ENGINEERS" x={70} y={410} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "microbiologists")} bitis={tCs - 0.2} metin="MICROBIOLOGISTS" x={70} y={480} boyut={64} renk={RENK.mercan} />
      <Baslik t={t} bas={tCs} metin="CHICKENSPLASH" x={70} y={240} boyut={112} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Physics")} metin="PHYSICS OF FLUIDS" x={76} y={340} boyut={44} renk={RENK.lacivert} font="inter" agirlik={800} />
    </>
  );
};

export default S13;
