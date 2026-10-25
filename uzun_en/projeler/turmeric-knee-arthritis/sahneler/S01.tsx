// Sahne 1 — turmeric vs ibuprofen: 367 yetişkin, dört hafta.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [40, 10, 1840], [100, 50, 1720])}>
        {/* alttaki imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 800, top: 1020, width: 320, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "turmeric")} bitis={K(0, "ibuprofen") - 0.2} capa={[1300, 560]} konum={[860, 410]}
          metin="TURMERIC EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "ibuprofen")} capa={[500, 640]} konum={[700, 540]} metin="IBUPROFEN" renk={RENK.lacivert} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "367")} vurgu={b.vurgu!} not={b.not} x={1440} y={120} genislik={420} />
      <Baslik t={t} bas={K(0, "turmeric")} metin={b.satirlar[0]} x={80} y={200} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "ibuprofen") - 0.1} metin={b.satirlar[1]} x={80} y={310} boyut={100} renk={RENK.lacivert} />
    </>
  );
};

export default S01;
