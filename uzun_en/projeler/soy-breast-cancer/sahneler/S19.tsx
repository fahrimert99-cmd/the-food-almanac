// Sahne 19 — düz sayılar: 4 yılda ölüm %10 vs %7, nüks %11 vs %8 (sağda yatay çubuk çiftleri).
import React from "react";
import { ANTON, Baslik, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const BX = 1250, PX = 52; // çubuk başlangıcı, yüzde başına piksel

const Satir: React.FC<{ t: number; bas: number; y: number; ad: string; v: number; renk: string }> = ({ t, bas, y, ad, v, renk }) => {
  const p = eout(ilerle(t, bas, 0.8));
  const a = eout(ilerle(t, bas, 0.4));
  if (a <= 0) return null;
  return (
    <>
      <div style={{ position: "absolute", left: 960, top: y + 4, width: 270, opacity: a, fontFamily: INTER, fontWeight: 800, fontSize: 26,
        letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</div>
      <div style={{ position: "absolute", left: BX, top: y, width: v * PX * p, height: 62, background: renk, borderRadius: 10,
        display: "flex", alignItems: "center", justifyContent: "flex-end", paddingRight: 16, overflow: "hidden" }}>
        <span style={{ fontFamily: ANTON, fontSize: 48, color: "#fff", opacity: eout(ilerle(t, bas + 0.6, 0.3)) }}>{v}%</span>
      </div>
    </>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tD = K(0, "about"), tLow = K(0, "10 percent"), tHigh = K(0, "7 percent");
  const tR = K(1, "recurrence"), tR1 = K(1, "11 percent"), tR2 = K(1, "8 percent");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 120, 1500], [60, 150, 1380])} />
      <Panel a={eout(ilerle(t, tD - 0.3, 0.7))} taraf="sag" genislik={1100} opak={0.97} />
      <Baslik t={t} bas={tD} metin="4-YEAR DEATHS" x={960} y={230} boyut={84} renk={RENK.koyuYesil} hiza="sol" />
      <Satir t={t} bas={tLow - 0.05} y={310} ad="LOWEST SOY" v={10} renk={RENK.mercan} />
      <Satir t={t} bas={tHigh - 0.05} y={394} ad="HIGHEST SOY" v={7} renk={RENK.yesil} />
      <Baslik t={t} bas={tR} metin="RECURRENCE" x={960} y={590} boyut={84} renk={RENK.koyuYesil} hiza="sol" />
      <Satir t={t} bas={tR1 - 0.05} y={670} ad="LOWEST SOY" v={11} renk={RENK.mercan} />
      <Satir t={t} bas={tR2 - 0.05} y={754} ad="HIGHEST SOY" v={8} renk={RENK.yesil} />
    </>
  );
};

export default S19;
