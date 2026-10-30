// Sahne 21 — yeşillik atlamak nötr değil: tabak + lahana, üstte kart başlık
import React from "react";
import { Etiket, IkonYol, Kamera, RENK, SP, ANTON, INTER, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// kâğıt zeminli başlık kartı
const Kart: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 72,
}) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: a, background: RENK.kagitAcik,
      border: `4px solid ${renk}`, borderRadius: 22, padding: "6px 30px 10px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
      fontFamily: ANTON, fontSize: boyut, color: renk, whiteSpace: "nowrap" }}>{metin}</div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800]);
  const tKapat = c[1].bas - 0.1;
  const [sk, ak] = pop(t, K(1, "other direction"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={pen}>
        <Etiket t={t} bas={K(0, "greens")} capa={[1560, 250]} konum={[1360, 480]} metin="GREENS" renk={RENK.yesil} />
      </Kamera>
      <Kart t={t} bas={K(0, "neutral")} bitis={tKapat} x={960} y={50} metin="NOT NEUTRAL" renk={RENK.mercan} />
      <Kart t={t} bas={K(1, "numbers")} x={960} y={50} metin="NUMBERS CHANGE" renk={RENK.lacivert} />
      {ak > 0 && (
        <div style={{ position: "absolute", left: 960, top: 890, transform: `translate(-50%, 0) scale(${sk})`, opacity: ak, display: "flex",
          alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
          padding: "6px 26px 6px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
          <IkonYol ad="ok" boyut={34} renk={RENK.altin} kalinlik={7} />
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>OTHER DIRECTION</span>
        </div>
      )}
    </>
  );
};

export default S21;
