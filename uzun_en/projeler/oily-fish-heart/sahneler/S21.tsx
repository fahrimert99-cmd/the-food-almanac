// Sahne 21 — Gencer 2021: 7 çalışma, 81.210 kişi, atriyal fibrilasyon +25%.
import React from "react";
import { AltSis, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sayac, sol } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string }> = ({ t, bas, bitis, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1000, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * sol(t, bitis),
      background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "9px 26px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const B = { satirlar: [] as string[], vurgu: "", not: "", ...(s.meta.baslik ?? {}) };
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [0, 20, 1760]);
  const tS = K(1, "81,210"), son = K(2, "Omega-3") - 0.1;
  const sy = sayac(t, tS, 81210, 1.0).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={p} />
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2021")} />
      <Chip t={t} bas={K(0, "second")} bitis={K(1, "2021") - 0.1} y={200} metin="A SECOND CONCERN" />
      <Chip t={t} bas={K(1, "2021")} bitis={son} y={200} metin="2021 ANALYSIS" />
      <Chip t={t} bas={K(1, "seven")} bitis={son} y={290} metin="7 TRIALS" />
      <Chip t={t} bas={tS} bitis={son} y={380} metin={`${sy} PEOPLE`} />
      <VurguRozet t={t} bas={K(2, "25")} vurgu={B.vurgu} not={B.not} x={1400} y={150} genislik={440} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "atrial")} satirlar={B.satirlar} x={1000} y={500} boyut={92} renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={K(2, "irregular")} capa={[480, 430]} konum={[520, 860]} metin="IRREGULAR RHYTHM" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1000, top: 690, zIndex: 2 }}>
        <Hapci t={t} bas={K(2, "higher doses")} />
      </div>
    </>
  );
};

const Hapci: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
      borderRadius: 999, padding: "9px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
      whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.14)" }}>HIGHER DOSES: RISKIER</div>
  );
};

export default S21;
