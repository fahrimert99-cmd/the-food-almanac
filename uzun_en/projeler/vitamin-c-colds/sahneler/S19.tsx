// Sahne 19 — 2023 analizi: 10 çalışma, ≥1 g/gün, şiddet puanı ~%15 düşük. Solda etiket, sağda liste + rozet.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(0, -50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      background: RENK.kagitAcik, border: `3.5px solid ${renk}`, borderRadius: 999, padding: "8px 28px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 6px 18px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTen = K(0, "10 randomized"), tBlind = K(0, "double-blind"), tGram = K(0, "at least"), tPl = K(1, "placebo"), tPct = K(1, "15 percent");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Etiket t={t} bas={tTen} capa={[330, 560]} konum={[420, 250]} metin="10 TRIALS" renk={RENK.altin} />
      <Baslik t={t} bas={0.5} metin="MILDER COLDS" x={1130} y={220} boyut={100} renk={RENK.koyuYesil} />
      <Hap t={t} bas={tBlind} x={1130} y={340} metin="DOUBLE-BLIND" renk={RENK.lacivert} />
      <Hap t={t} bas={tGram} x={1130} y={420} metin="AT LEAST 1 G A DAY" renk={RENK.altin} />
      <Hap t={t} bas={tPl} x={1130} y={500} metin="VS PLACEBO" renk={RENK.yesil} />
      <VurguRozet t={t} bas={tPct - 0.1} vurgu={s.meta.baslik?.vurgu ?? "–15%"} not={s.meta.baslik?.not} x={1490} y={610} genislik={440} renk={RENK.koyuYesil} />
    </>
  );
};

export default S19;
