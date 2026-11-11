// Sahne 27 — yan etkiler hafif: ~%1 kakao, <%0,5 karşılaştırma
import React from "react";
import { Baslik, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; ad: string; deger: string; uz: number; renk: string; y: number }> = ({ t, bas, ad, deger, uz, renk, y }) => {
  const p = eout(ilerle(t, bas, 0.9));
  const [sc, al] = pop(t, bas, 0.45);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1180, top: y, width: 680, height: 56, opacity: al, background: "rgba(252,248,236,0.92)", borderRadius: 14 }}>
      <div style={{ position: "absolute", left: 14, top: 0, lineHeight: "56px", fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</div>
      <div style={{ position: "absolute", left: 270, top: 8, height: 40, width: uz * p, background: renk, borderRadius: 8 }} />
      <div style={{ position: "absolute", left: 282 + uz * p, top: 0, lineHeight: "56px", fontFamily: "Anton", fontSize: 34, color: renk, opacity: p, whiteSpace: "nowrap" }}>{deger}</div>
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMild = K(0, "mild"), tOne = K(1, "1 percent"), tHalf = K(1, "under half");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1780])} />
      <Baslik t={t} bas={tMild - 0.4} metin="MILD SIDE EFFECTS" x={80} y={110} boyut={84} renk={RENK.koyuYesil} />
      <Satir t={t} bas={tOne - 0.1} ad="COCOA" deger="≈ 1%" uz={220} renk={RENK.mercan} y={130} />
      <Satir t={t} bas={tHalf - 0.1} ad="COMPARISON" deger="< 0.5%" uz={110} renk={RENK.yesil} y={206} />
    </>
  );
};

export default S27;
