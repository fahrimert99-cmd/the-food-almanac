import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 5 — oleik asit: sağda başlık ve %70 eşiği, solda zeytin ve damla.
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const yama = (x: number, y: number, w: number, h: number) => (
    <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
      background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
  );
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 17, 1840])}>
        {yama(1008, 210, 110, 90)}
        {yama(826, 60, 100, 70)}
        <Etiket t={t} bas={K(0, "monounsaturated")} bitis={K(0, "oleic") - 0.1} capa={[830, 540]} konum={[1330, 560]} metin="MONOUNSATURATED FAT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "olive oil")} capa={[420, 700]} konum={[1380, 880]} metin="OLIVE OIL: ON THE LIST" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "oleic")} metin={b.satirlar[0]} x={1060} y={250} boyut={120} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "70")} vurgu={b.vurgu!} not={b.not} x={1400} y={370} genislik={480} boyut={130} renk={RENK.koyuYesil} />
    </>
  );
};
export default S05;
