// Sahne 33 — Lever 2014 derlemesi: dört randomize çalışma, yalnızca biri kabızlıkta.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "four randomized");
  const tBir = K(1, "Just one");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "prunes")} bitis={tBir - 0.1} capa={[1170, 500]} konum={[1230, 250]} metin="PRUNES" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      {/* sol sayfa: sayfa boş kâğıt, yazılar üstüne oturur */}
      <BaslikBlok t={t} bas={K(0, "systematic")} satirlar={["SYSTEMATIC", "REVIEW"]} x={440} y={330} boyut={66}
        renkler={[RENK.lacivert, RENK.koyuYesil]} bitis={tDort - 0.5} />
      <VurguRozet t={t} bas={tDort} vurgu="4" not="randomized trials" x={590} y={300} genislik={320} bitis={tBir - 0.1} />
      <VurguRozet t={t} bas={tBir} vurgu="1 OF 4" not="in constipation" x={590} y={430} genislik={340} renk={RENK.mercan} boyut={92} />
    </>
  );
};

export default S33;
