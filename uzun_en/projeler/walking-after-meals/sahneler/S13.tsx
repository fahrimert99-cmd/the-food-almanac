// Sahne 13 — 1 × 30 dk vs. 3 × 10 dk karşılaştırma kartları + tabaklara 10 DK etiketleri.
import React from "react";
import { ANTON, Hap, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; x: number; ana: string; not: string; notBas: number; renk: string }> = ({ t, bas, x, ana, not, notBas, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const [sn, an] = pop(t, notBas, 0.45);
  return (
    <div style={{ position: "absolute", left: x, top: 130, width: 500, height: 250, transform: `scale(${sc})`, transformOrigin: "50% 50%",
      opacity: al, background: RENK.kagitAcik, border: `5px solid ${renk}`, borderRadius: 28, boxShadow: "0 12px 30px rgba(48,40,34,0.18)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14 }}>
      <div style={{ fontFamily: ANTON, fontSize: 104, lineHeight: 1, color: renk, whiteSpace: "nowrap" }}>{ana}</div>
      <div style={{ transform: `scale(${sn})`, opacity: an, fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.lacivert }}>{not}</div>
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tA = K(0, "thirty"), tAnot = K(0, "whenever");
  const tB = K(1, "ten minutes"), tBnot = K(1, "after");
  const tOther = K(1, "other"), tFive = K(1, "within"), tToplam = K(2, "thirty");
  const [sv, av] = pop(t, tOther, 0.45);
  const [se, ae] = pop(t, tToplam, 0.5);
  const avA = av * sol(t, tToplam - 0.1);
  const PLAKA: [number, string][] = [[350, "three main"], [960, "meals"], [1560, "meals"]];
  const tM = K(1, "three main"), tMl = K(1, "meals");
  const zamanlar = [tM, tM + 0.28, tMl + 0.2];
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])} />
      <Kart t={t} bas={tA} x={760} ana="1 × 30 MIN" not="WHENEVER THEY LIKED" notBas={tAnot} renk={RENK.mercan} />
      <Kart t={t} bas={tB} x={1340} ana="3 × 10 MIN" not="AFTER EACH MEAL" notBas={tBnot} renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1300, top: 255, transform: `translate(-50%, -50%) scale(${sv})`, opacity: avA,
        fontFamily: ANTON, fontSize: 44, color: RENK.lacivert }}>VS.</div>
      <div style={{ position: "absolute", left: 1300, top: 255, transform: `translate(-50%, -50%) scale(${se})`, opacity: ae,
        fontFamily: ANTON, fontSize: 140, color: RENK.altin }}>=</div>
      {PLAKA.map(([x], i) => {
        const [sc, al] = pop(t, zamanlar[i], 0.45);
        return (
          <div key={i} style={{ position: "absolute", left: x, top: 818, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
            <Hap metin="10 MIN" renk={RENK.yesil} boyut={26} />
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1300, top: 470, transform: "translate(-50%, -50%)" }}>
        <FadeHap t={t} bas={tFive} bitis={tToplam - 0.1} metin="START WITHIN 5 MIN" renk={RENK.altin} />
      </div>
      <div style={{ position: "absolute", left: 1300, top: 470, transform: "translate(-50%, -50%)" }}>
        <FadeHap t={t} bas={tToplam + 0.2} metin="SAME 30 MIN TOTAL" renk={RENK.koyuYesil} />
      </div>
    </>
  );
};

const FadeHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ transform: `scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={36} /></div>;
};

export default S13;
