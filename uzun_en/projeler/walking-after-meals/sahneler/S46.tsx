// Sahne 46 — Adım 3: içeride kısa hareket. Koridor solda, sağdaki boş kâğıtta başlık; alt yazı kusurları örtülü.
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


const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOut = K(1, "outside?"), tIndoor = K(2, "indoor"), tTwo = K(3, "Two"), tHouse = K(3, "house"), tSit = K(3, "sitting");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [70, 20, 1680])}>
        {/* alttaki sahte yazı ve sağ alttaki işaret kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 150, top: 1015, width: 560, height: 65, background: "rgb(251,243,206)" }} />
        <div style={{ position: "absolute", left: 1380, top: 1015, width: 200, height: 65, background: "rgb(252,246,210)" }} />
        <Etiket t={t} bas={tIndoor} bitis={tHouse + 0.9} capa={[400, 780]} konum={[900, 560]} metin="INDOOR MOVEMENT COUNTS" renk={RENK.yesil} />
      </Kamera>
      <Adim t={t} n="3" bas={0.1} />
      <Baslik t={t} bas={tOut - 0.5} bitis={tTwo - 0.2} metin="CAN'T GET OUTSIDE?" x={1840} y={360} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Ikon t={t} bas={tOut} ad="soru" x={1440} y={250} boyut={84} zemin={RENK.altin} bitis={tTwo - 0.2} />
      <Baslik t={t} bas={tTwo} metin="EVEN" x={1840} y={290} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tTwo + 0.2} metin="2 MINUTES" x={1840} y={410} boyut={140} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tHouse - 0.5} metin="walking around the house every so often" x={1840} y={510} boyut={36} hiza="sag" genislik={900} />
      <div style={{ position: "absolute", left: 1840 - 600, top: 650, width: 600, display: "flex", justifyContent: "flex-end" }}>
        <PillSit t={t} bas={tSit} />
      </div>
    </>
  );
};

const PillSit: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return <div style={{ transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}><Hap metin="SITTING BREAK STUDIES" renk={RENK.altin} boyut={30} /></div>;
};

export default S46;
