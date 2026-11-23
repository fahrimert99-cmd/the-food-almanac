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

const Karti: React.FC<{ t: number; bas: number; y: number; metin: string }> = ({ t, bas, y, metin }) => {
  const a = eout(ilerle(t, bas, 0.5));
  return <div style={{ position: "absolute", left: 640, top: y + (1 - a) * 12, opacity: a, fontFamily: INTER, fontWeight: 800, fontSize: 32, color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>;
};
const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820]);
  const pk = eout(ilerle(t, K(1, "letter") - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={w}>
        <Etiket t={t} bas={K(0, "observational")} bitis={5.0} capa={[700, 700]} konum={[300, 300]} metin="OBSERVATIONAL STUDY" renk={RENK.lacivert} />
      </Kamera>
      <Pop t={t} bas={K(0, "link,")} x={1560} y={170} metin="A LINK, NOT PROOF" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 600, top: 560, width: 720, height: 300, opacity: pk * 0.95, background: RENK.kagitAcik,
        border: `3px solid ${RENK.murekkep}`, borderRadius: 22, boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }} />
      <Karti t={t} bas={K(1, "letter")} y={590} metin="A LETTER IN THE SAME JOURNAL" />
      <Karti t={t} bas={K(1, "likely")} y={665} metin="RISK LIKELY OVERESTIMATED" />
      <Karti t={t} bas={K(1, "supplements")} y={740} metin="USERS MAY BE TESTED MORE" />
      <Pop t={t} bas={K(2, "studied")} x={300} y={900} metin="ONLY MEN STUDIED" renk={RENK.mercan} />
    </>
  );
};
export default S42;
