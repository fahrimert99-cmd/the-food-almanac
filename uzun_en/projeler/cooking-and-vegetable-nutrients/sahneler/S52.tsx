// Sahne 52 — Alışkanlık 4: doğra, rendele, püre yap.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Yerel yardımcılar: sayı rozeti ve hap.
const Sayi: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 52, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      border: `4px solid ${RENK.altin}`, boxSizing: "border-box", color: "#fff", fontFamily: ANTON, fontSize: 66, lineHeight: "88px",
      textAlign: "center", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon?: "onay" | "carpi" | "ok" | "saat"; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      {ikon ? <IkonYol ad={ikon} boyut={boyut * 1.2} renk={renk} kalinlik={7} />
        : <span style={{ width: boyut * 0.5, height: boyut * 0.5, borderRadius: "50%", background: renk, flex: "none" }} />}
      {metin}
    </div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKes = K(1, "chop"), tRen = K(1, "grate"), tPure = K(1, "purée");
  const tLab = K(2, "in the lab"), tEzme = K(2, "mashed carrot"), tCok = K(2, "far more"), tBeta = K(2, "beta-carotene"), tCig = K(2, "raw pieces");
  const pPanel = eout(ilerle(t, tLab - 0.2, 0.6));
  const bar = (bas: number, uz: number, sure: number) => uz * eout(ilerle(t, bas, sure));
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [200, 40, 1720])}>
        <Etiket t={t} bas={tKes} bitis={tLab - 0.1} capa={[533, 520]} konum={[200, 330]} metin="CHOP" renk={RENK.altin} />
        <Etiket t={t} bas={tRen} bitis={tLab - 0.1} capa={[867, 440]} konum={[1060, 150]} metin="GRATE" renk={RENK.yesil} />
        <Etiket t={t} bas={tPure} capa={[1507, 540]} konum={[1700, 290]} metin="PURÉE" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={1150} opak={0.97} />
      <Sayi t={t} n="4" />
      <Baslik t={t} bas={tLab} metin="IN THE LAB" x={140} y={330} boyut={96} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 560, top: 300, opacity: pop(t, tLab, 0.5)[1] }}>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin, border: `3px solid ${RENK.altin}`,
          background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</span>
      </div>
      <Not t={t} bas={tBeta} metin="BETA-CAROTENE RELEASED" x={140} y={395} boyut={34} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={tEzme} metin="MASHED CARROT" x={140} y={480} boyut={30} agirlik={800} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 140, top: 525, width: bar(tEzme, 700, 1.2), height: 70, borderRadius: 12, background: RENK.mercan }} />
      <Not t={t} bas={tCig} metin="RAW PIECES" x={140} y={640} boyut={30} agirlik={800} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 140, top: 685, width: bar(tCig, 220, 0.6), height: 70, borderRadius: 12, background: RENK.altin }} />
    </>
  );
};

export default S52;
