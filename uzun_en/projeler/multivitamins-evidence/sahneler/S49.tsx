// Sahne 49 — 4. madde: eczacıya her şeyi söyle; K vitamini ve varfarin.
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

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(2, "Vitamin") - 0.15;
  const [sw, aw] = pop(t, K(2, "warfarin"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(2, "Vitamin")} capa={[630, 560]} konum={[270, 440]} metin="VITAMIN K" renk={RENK.altin} />
      </Kamera>
      <Rozet t={t} bas={K(0, "Four")} n="4" x={150} y={170} />
      <BaslikBlok t={t} bas={K(1, "Tell")} bitis={gec} satirlar={["TELL YOUR", "PHARMACIST"]} x={60} y={310} boyut={72} />
      <Not t={t} bas={K(1, "everything")} bitis={gec} metin="EVERYTHING YOU TAKE" x={66} y={440} boyut={28} agirlik={800} renk={RENK.altin} />
      <Not t={t} bas={K(2, "can")} metin="CAN AFFECT" x={270} y={500} boyut={26} hiza="orta" agirlik={800} renk={RENK.gri} />
      <div style={{ position: "absolute", left: 270, top: 590, transform: `translate(-50%, -50%) scale(${sw})`, opacity: aw }}>
        <Hap metin="WARFARIN" renk={RENK.mercan} boyut={30} />
      </div>
      <Not t={t} bas={K(2, "so")} metin="KEEP THE AMOUNT STEADY" x={270} y={650} boyut={28} hiza="orta" genislik={420} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S49;
