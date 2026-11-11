// Sahne 48 — 3. madde: B12 ve D vitamini sor; kan testi, doktor dozu seçer.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Rozet: React.FC<{ t: number; bas: number; n: string; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - 56, top: y - 56, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 26px rgba(48,40,34,0.25)", color: "#fff", display: "flex",
      alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70, transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(2, "and your") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(2, "blood test")} capa={[585, 400]} konum={[250, 400]} metin="BLOOD TEST" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "doctor")} capa={[1180, 530]} konum={[1250, 190]} metin="DOCTOR PICKS DOSE" renk={RENK.yesil} />
      </Kamera>
      <Rozet t={t} bas={K(0, "Three")} n="3" x={150} y={170} />
      <Baslik t={t} bas={K(1, "B12")} bitis={gec} metin="B12" x={900} y={190} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "vitamin")} bitis={gec} metin="+ VITAMIN D" x={1160} y={190} boyut={120} renk={RENK.altin} />
      <Not t={t} bas={K(1, "Ask")} bitis={gec} metin="ASK ABOUT" x={900} y={85} boyut={30} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S48;
