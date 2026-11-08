// Sahne 49 — İpucu 5: güvenlik notu (diyabet ilacı, bebeklerde bal / botulizm).
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, background: "#FCF8EC", border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 30px 10px 12px",
      fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSafe = K(1, "safety"), tDiab = K(2, "diabetes"), tIns = K(2, "insulin"), tPills = K(2, "pills"), tAsk = K(2, "ask");
  const tNever = K(3, "never"), tUnder = K(3, "under one"), tInf = K(3, "infant");
  const [sn, an] = pop(t, 0.05, 0.5);
  const b = tNever - 0.2;
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* dolap tabelasındaki bozuk yazıyı boş tabelaya çevir */}
        <div style={{ position: "absolute", left: 186, top: 166, width: 212, height: 92, borderRadius: 6, background: "#A9BAB6",
          border: "3px solid #6F837F" }} />
        <Etiket t={t} bas={tDiab} bitis={b} capa={[250, 575]} konum={[620, 400]} metin="DIABETES MEDICINE" renk={RENK.lacivert} />
        <Etiket t={t} bas={tAsk} bitis={b} capa={[800, 815]} konum={[1300, 860]} metin="ASK DOCTOR OR PHARMACIST" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tNever} capa={[500, 700]} konum={[760, 560]} metin="NO HONEY" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 100, top: 90, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52,
        transform: `scale(${sn})`, opacity: an, zIndex: 2 }}>5</div>
      <BaslikBlok t={t} bas={tSafe} satirlar={["SAFETY", "FIRST"]} x={1060} y={150} boyut={130} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Hap t={t} bas={tIns} bitis={b} x={1060} y={500} metin="INSULIN" renk={RENK.mercan} />
      <Hap t={t} bas={tPills} bitis={b} x={1060} y={600} metin="LOW-SUGAR PILLS" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tUnder} vurgu="< 1 YEAR" not="NEVER GIVE HONEY" x={1440} y={470} genislik={460} renk={RENK.mercan} />
      <Hap t={t} bas={tInf} x={1160} y={700} metin="INFANT BOTULISM" renk={RENK.lacivert} />
    </>
  );
};

export default S49;
