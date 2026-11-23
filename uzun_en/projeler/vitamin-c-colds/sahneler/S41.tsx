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

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={w}>
        <Etiket t={t} bas={K(0, "1,000")} capa={[1280, 520]} konum={[1640, 250]} metin="ABOUT 1,000 MG" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "multivitamin")} capa={[1180, 800]} konum={[1640, 880]} metin="MULTIVITAMIN" renk={RENK.yesil} />
      </Kamera>
      <Pop t={t} bas={K(0, "many")} x={290} y={150} metin="MANY TIMES THE DAILY DOSE" renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "linked")} ad="onay" x={1100} y={110} boyut={80} />
      <Pop t={t} bas={K(1, "linked")} x={1460} y={110} metin="NOT LINKED WITH STONES" renk={RENK.yesil} />
    </>
  );
};
export default S41;
