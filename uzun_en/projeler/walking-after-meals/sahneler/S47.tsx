// Sahne 47 — Adım 4: keyifli bir şeyle eşleştir. Köpek ve kapı; solda boş kâğıtta başlık, ortada örnek hapları.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Panel } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; x: number; y: number }> = ({ t, bas, metin, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={RENK.yesil} boyut={32} />
    </div>
  );
};

const Adim: React.FC<{ t: number; n: string; bas: number }> = ({ t, n, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 56, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
      opacity: al, transform: `scale(${sc})`, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};


const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPair = K(1, "Pair"), tSome = K(1, "something"), tPlease = K(1, "pleasant,"), tPhone = K(1, "phone"), tPod = K(1, "podcast,"),
    tDog = K(1, "dog."), tFeels = K(2, "feels"), tLasts = K(2, "lasts.");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [80, 70, 1700])}>
        <Pill t={t} bas={tPhone} metin="PHONE CALL" x={760} y={190} />
        <Pill t={t} bas={tPod} metin="PODCAST" x={760} y={290} />
        <Etiket t={t} bas={tDog} capa={[560, 750]} konum={[760, 390]} metin="THE DOG" renk={RENK.yesil} bitis={1e9} />
      </Kamera>
      <Adim t={t} n="4" bas={0.1} />
      <Baslik t={t} bas={tPair} bitis={tFeels - 0.3} metin="PAIR IT WITH" x={80} y={230} boyut={70} renk={RENK.gri} />
      <Baslik t={t} bas={tSome} bitis={tFeels - 0.3} metin="SOMETHING" x={80} y={330} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPlease} bitis={tFeels - 0.3} metin="PLEASANT" x={80} y={440} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tFeels} metin="FEELS GOOD" x={80} y={300} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={tLasts} metin="= LASTS" x={80} y={410} boyut={104} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tLasts} ad="onay" x={430} y={530} boyut={84} />
    </>
  );
};

export default S47;
