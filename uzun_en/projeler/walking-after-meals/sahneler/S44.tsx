// Sahne 44 — Adım 1: yemekten sonra ~10 dk. Açık kapıdan masa; solda boş kâğıt üzerinde başlık.
import React from "react";
import { ANTON, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Adim: React.FC<{ t: number; n: string; bas: number }> = ({ t, n, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 56, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60,
      opacity: al, transform: `scale(${sc})`, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTen = K(1, "ten"), tLargest = K(1, "largest"), tEve = K(2, "evening"), tBig = K(2, "biggest");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 20, 1840], [110, 60, 1700])}>
        <Etiket t={t} bas={tLargest} bitis={tEve - 0.25} capa={[1175, 650]} konum={[500, 560]} metin="LARGEST MEAL" renk={RENK.altin} />
      </Kamera>
      <Adim t={t} n="1" bas={0.1} />
      <Baslik t={t} bas={tTen - 0.1} metin="ABOUT" x={90} y={230} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tTen + 0.1} metin="10 MINUTES" x={90} y={330} boyut={112} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tEve} ad="saat" x={140} y={640} boyut={84} zemin={RENK.altin} />
      <Baslik t={t} bas={tEve + 0.1} metin="EVENING MEAL" x={206} y={640} boyut={62} renk={RENK.lacivert} />
      <Not t={t} bas={tBig} metin="biggest benefit in the trials" x={206} y={686} boyut={30} agirlik={700} />
    </>
  );
};

export default S44;
