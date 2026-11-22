import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ANTON,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

// Yerinde beliren hap (ekran koordinatı, merkez)
const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({ t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9 }) => {
  if (t > bitis) return null;
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const tM = K(1, "Mayo");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={w}>
        <Etiket t={t} bas={K(0, "orange")} bitis={K(0, "not") - 0.1} capa={[900, 520]} konum={[780, 300]} metin="FRESH ORANGE JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "supplements,")} capa={[1390, 430]} konum={[1690, 330]} metin="SUPPLEMENTS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "16")} bitis={tM - 0.2} metin="16 CUPS" x={70} y={150} boyut={130} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "reach")} bitis={tM - 0.2} metin="to reach the upper limit" x={74} y={235} boyut={34} />
      <Pop t={t} bas={K(0, "food,")} x={1050} y={800} metin="NOT FOOD" renk={RENK.yesil} bitis={tM - 0.2} />
      <Pop t={t} bas={tM} x={250} y={110} metin="MAYO CLINIC" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "high")} metin="HIGH DOSES" x={70} y={200} boyut={110} renk={RENK.mercan} />
    </>
  );
};
export default S44;
