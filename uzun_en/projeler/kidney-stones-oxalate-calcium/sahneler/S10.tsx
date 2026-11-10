// Sahne 10 — 120 erkek, iki diyet: boş tabaklar + iki tabağa ayırma.
import React from "react";
import { Baslik, kagit, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, eout, ilerle, INTER, ANTON } from "../kutuphane";

const Pilx: React.FC<{ t: number; bas: number; bitis: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t > bitis ? Math.max(0, 1 - (t - bitis) / 0.4) : 1);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a, whiteSpace: "nowrap",
      display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 24px 8px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMen = K(0, "120"), tOx = K(0, "calcium oxalate"), tMuch = K(0, "too much calcium");
  const tRand = K(1, "randomly"), tTwo = K(1, "two diets");
  const [sA, aA] = pop(t, tTwo, 0.5);
  const [sB, aB] = pop(t, tTwo + 0.2, 0.5);
  const pOk = eout(ilerle(t, tRand, 0.6));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [250, 190, 1500], [330, 230, 1330])}>
      </Kamera>
      {/* üst bant: yazılar için kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 400,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 72%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tMen} bitis={c[1].bas} metin="120 MEN" x={90} y={150} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={tMen + 0.1} bitis={c[1].bas} metin="recurrent calcium oxalate stones" x={96} y={235} boyut={34} />
      <Pilx t={t} bas={tOx} bitis={c[1].bas} x={96} y={300} metin="CALCIUM OXALATE STONES" renk={RENK.altin} />
      <Pilx t={t} bas={tMuch} bitis={c[1].bas} x={700} y={300} metin="HIGH URINE CALCIUM" renk={RENK.mercan} />
      {/* 1. cümle: rastgele atama, iki tabak */}
      <Baslik t={t} bas={tRand} metin="RANDOMLY ASSIGNED" x={960} y={200} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 627, top: 520, transform: `translate(-50%,-50%) scale(${sA})`, opacity: aA }}>
        <div style={{ background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 28px", fontFamily: ANTON, fontSize: 44, letterSpacing: 2 }}>DIET A</div>
      </div>
      <div style={{ position: "absolute", left: 1267, top: 520, transform: `translate(-50%,-50%) scale(${sB})`, opacity: aB }}>
        <div style={{ background: RENK.altin, color: "#fff", borderRadius: 999, padding: "8px 28px", fontFamily: ANTON, fontSize: 44, letterSpacing: 2 }}>DIET B</div>
      </div>
    </>
  );
};

export default S10;
