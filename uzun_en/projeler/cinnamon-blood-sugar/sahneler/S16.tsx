// Sahne 16 — 0,16 küçük bir kayma, yarım puan daha belirgin: iki orantılı çubuk (cetvel görseli üstte boşluk).
import React from "react";
import { ANTON, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// ölçek: 0,5 puan = 400 px
const PX = 800, X0 = 160;
const Cubuk: React.FC<{ t: number; bas: number; y: number; deger: number; renk: string; ad: string; not: string }> = ({ t, bas, y, deger, renk, ad, not }) => {
  const p = eout(ilerle(t, bas, 0.8));
  const [sc, al] = pop(t, bas + 0.5, 0.5);
  if (p <= 0) return null;
  const w = deger * PX;
  return (
    <>
      <div style={{ position: "absolute", left: X0, top: y, height: 62, width: w * p, borderRadius: 31, background: renk, boxShadow: "0 6px 16px rgba(48,40,34,0.18)" }} />
      <div style={{ position: "absolute", left: X0 + w + 26, top: y, height: 62, display: "flex", alignItems: "center", gap: 16, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0 50%", whiteSpace: "nowrap" }}>
        <span style={{ fontFamily: ANTON, fontSize: 54, color: renk }}>{ad}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>{not}</span>
      </div>
    </>
  );
};

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t016 = K(0, "0.16"), tHalf = K(0, "half a point"), tBig = K(1, "bigger drop"), tSingle = K(1, "single trial"), tNo = K(1, "no placebo");
  const [s1, a1] = pop(t, tBig, 0.5), [s2, a2] = pop(t, tSingle, 0.5), [s3, a3] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 120, 1700])} />
      <Cubuk t={t} bas={t016} y={120} deger={0.16} renk={RENK.altin} ad="0.16" not="SMALL SHIFT" />
      <Cubuk t={t} bas={tHalf} y={210} deger={0.5} renk={RENK.koyuYesil} ad="0.5" not="MORE NOTICEABLE" />
      <div style={{ position: "absolute", left: 960, top: 855, transform: "translateX(-50%)", display: "flex", gap: 22, alignItems: "center" }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}><Hap metin="BIGGER DROP REPORTED" renk={RENK.koyuYesil} boyut={28} /></div>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}><Hap metin="SINGLE TRIAL" renk={RENK.altin} boyut={28} /></div>
        <div style={{ transform: `scale(${s3})`, opacity: a3 }}><Hap metin="NO PLACEBO" renk={RENK.mercan} boyut={28} /></div>
      </div>
    </>
  );
};
void IkonYol;
export default S16;
