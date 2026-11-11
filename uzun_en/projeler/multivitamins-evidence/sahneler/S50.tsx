// Sahne 50 — 5. madde: beklentiyi makul tut.
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

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(2, "The") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(2, "multivitamin")} capa={[1250, 420]} konum={[1620, 400]} metin="SMALL EXTRA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "not")} capa={[1300, 640]} konum={[1580, 640]} metin="NOT A MEMORY PLAN" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Rozet t={t} bas={K(0, "Five")} n="5" x={150} y={170} />
      <BaslikBlok t={t} bas={K(1, "Keep")} bitis={gec} satirlar={["KEEP", "EXPECTATIONS", "MODEST"]} x={1880} y={330} boyut={62} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "average")} metin="AVERAGE MEMORY GAIN: SMALL" x={1880} y={780} boyut={28} hiza="sag" genislik={420} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S50;
