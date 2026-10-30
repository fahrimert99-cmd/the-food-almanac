// Sahne 25 — bir porsiyon pişmiş yeşillik birkaç kat 100 µg; haftalık takvim üstünde akış
import React from "react";
import { ANTON, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const Adim: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; ok?: boolean }> = ({ t, bas, y, metin, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1500, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, width: 520, textAlign: "center",
      background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 22, padding: "10px 12px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)",
      fontFamily: ANTON, fontSize: 52, color: renk, whiteSpace: "nowrap", display: "flex", justifyContent: "center", alignItems: "center", gap: 14 }}>
      {ok && <IkonYol ad="ok" boyut={44} renk={renk} kalinlik={7} />}{metin}
    </div>
  );
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pen}>
        <Etiket t={t} bas={K(0, "serving")} capa={[560, 420]} konum={[380, 130]} metin="ONE SERVING COOKED GREENS" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "several")} vurgu="SEVERAL × 100 µg" x={1010} y={28} genislik={560} boyut={64} renk={RENK.altin} />
      <Adim t={t} bas={K(1, "no greens")} y={230} metin="A WEEK, NO GREENS" renk={RENK.mercan} />
      <Adim t={t} bas={K(1, "spinach dinner")} y={400} metin="ONE BIG SPINACH DINNER" renk={RENK.yesil} ok />
      <Adim t={t} bas={K(1, "move the number")} y={570} metin="MAY MOVE THE NUMBER" renk={RENK.lacivert} ok />
    </>
  );
};

export default S25;
