// Sahne 34 — Sarımsağın 8–9 puanı ile DASH'in –11.5'i yan yana; ama kanıt türleri farklı.
import React from "react";
import { ANTON, INTER, Kamera, Hap, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const OL = 40; // piksel / puan
const Cubuk: React.FC<{ t: number; bas: number; y: number; ad: string; deger: number; metin: string; renk: string }> = ({ t, bas, y, ad, deger, metin, renk }) => {
  const p = eout(ilerle(t, bas, 0.9));
  const [sc, al] = pop(t, bas + 0.7, 0.5);
  if (t < bas - 0.1) return null;
  return (
    <>
      <div style={{ position: "absolute", left: 1220, top: y - 46, opacity: eout(ilerle(t, bas - 0.1, 0.4)), fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</div>
      <div style={{ position: "absolute", left: 1220, top: y, width: deger * OL * p, height: 54, borderRadius: 10, background: renk }} />
      <div style={{ position: "absolute", left: 1220 + deger * OL + 20, top: y - 10, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%",
        fontFamily: ANTON, fontSize: 70, lineHeight: "74px", color: renk, whiteSpace: "nowrap" }}>{metin}</div>
    </>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aP = eout(ilerle(t, 0.2, 0.6));
  const [s1, a1] = pop(t, K(1, "small trials"), 0.5);
  const [s2, a2] = pop(t, K(1, "one carefully"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [120, 60, 1700])} />
      <Panel a={aP} taraf="sag" genislik={780} />
      <Cubuk t={t} bas={K(0, "eight")} y={230} ad="GARLIC" deger={8.5} metin="8–9" renk={RENK.altin} />
      <Cubuk t={t} bas={K(0, "same range")} y={380} ad="DASH + LOW SALT" deger={11.5} metin="11.5" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "points")} metin="points of systolic pressure" x={1220} y={470} boyut={28} />
      <div style={{ position: "absolute", left: 1220, top: 610, opacity: a1, transform: `scale(${s1})`, transformOrigin: "0% 50%" }}>
        <Hap metin="SMALL TRIALS · DIFFERENT PRODUCTS" renk={RENK.altin} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 1220, top: 700, opacity: a2, transform: `scale(${s2})`, transformOrigin: "0% 50%" }}>
        <Hap metin="ONE CONTROLLED STUDY" renk={RENK.koyuYesil} boyut={24} />
      </div>
    </>
  );
};
export default S34;
