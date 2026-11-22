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

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const tFour = K(1, "four"), tLim = K(1, "upper");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={w}>
        <Etiket t={t} bas={K(1, "8,000")} capa={[340, 430]} konum={[460, 600]} metin="8,000 MG" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "2,000")} capa={[1150, 800]} konum={[1150, 900]} metin="2,000 MG LIMIT" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={tFour} bitis={tLim - 0.3} vurgu="4×" not="8,000 MG VS 2,000 MG" x={1640} y={200} genislik={440} boyut={150} renk={RENK.mercan} />
      <Baslik t={t} bas={tLim} metin="UPPER LIMIT" x={1640} y={130} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(1, "NIH")} vurgu="2,000" not={s.meta.baslik?.not} x={1640} y={230} genislik={440} boyut={130} renk={RENK.yesil} />
      <Pop t={t} bas={K(2, "research")} x={1640} y={640} metin="A RESEARCH DOSE" renk={RENK.altin} />
      <Pop t={t} bas={K(2, "not")} x={1640} y={730} metin="NOT TO TRY AT HOME" renk={RENK.mercan} />
    </>
  );
};
export default S43;
