// Sahne 33 — boş koltuk: kanıt boşluğu (T2D ve 60+ için çalışma yok).
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Ikon, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Çarpılı madde hapı
const Madde: React.FC<{ t: number; bas: number; metin: string; x: number; y: number }> = ({ t, bas, metin, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, 1e9);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
      borderRadius: 999, padding: "10px 26px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="carpi" boyut={22} renk="#fff" />
      </span>
      {metin}
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRice = K(0, "cooled rice"), tT2 = K(0, "type 2 diabetes"), t60 = K(0, "adults over 60"), tGap = K(1, "gap");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tRice} bitis={tT2 - 0.2} capa={[1385, 425]} konum={[1660, 250]} metin="COOLED RICE" renk={RENK.altin} />
      </Kamera>
      <Madde t={t} bas={tT2} metin="TYPE 2 DIABETES" x={1670} y={620} />
      <Madde t={t} bas={t60} metin="ADULTS OVER 60" x={1670} y={715} />
      <Baslik t={t} bas={tGap} metin="EVIDENCE GAP" x={1860} y={170} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tGap + 0.2} ad="soru" x={790} y={470} boyut={104} zemin={RENK.altin} />
    </>
  );
};

export default S33;
