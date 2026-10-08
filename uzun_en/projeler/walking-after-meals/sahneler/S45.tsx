// Sahne 45 — Adım 2: rahat tempo. Park yolu; gökyüzündeki boş alanda başlık ve sonda iki madde.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Panel } from "../kutuphane";

const Adim: React.FC<{ t: number; n: string; bas: number }> = ({ t, n, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 56, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
      opacity: al, transform: `scale(${sc})`, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEasy = K(1, "easy"), tLight = K(2, "light"), tSelf = K(2, "self"), tTalk = K(3, "talk,"), tNo = K(3, "no");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Etiket t={t} bas={tLight} bitis={tTalk - 0.3} capa={[860, 760]} konum={[640, 390]} metin="LIGHT TO MODERATE" renk={RENK.yesil} />
        <Etiket t={t} bas={tSelf} bitis={tTalk - 0.3} capa={[960, 900]} konum={[1160, 390]} metin="SELF-PACED WALKING" renk={RENK.altin} />
      </Kamera>
      <Adim t={t} n="2" bas={0.1} />
      <Baslik t={t} bas={tEasy - 0.1} bitis={tTalk - 0.3} metin="EASY PACE" x={800} y={190} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Liste t={t} isaret="onay" x={540} y={120} aralik={104} boyut={40} genislik={900} ogeler={[
        { bas: tTalk, metin: "ABLE TO TALK" },
      ]} />
      <Liste t={t} isaret="carpi" x={540} y={224} aralik={104} boyut={40} genislik={900} ogeler={[
        { bas: tNo, metin: "HARD PUSHING: NOT NEEDED", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S45;
