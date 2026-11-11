// Sahne 24 — Terazi: bir ekip düşüş buldu, diğeri (Nutrients) anlamlı etki bulmadı. Sol/sağ boş kâğıtta rozetler.
import React from "react";
import { AltSis, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 22px", fontFamily: INTER, fontWeight: 800,
      fontSize: 24, letterSpacing: 1.2, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])} />
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      {/* ekip 1 (solda) */}
      <Etiket t={t} bas={K(0, "One team")} capa={[440, 700]} konum={[340, 880]} metin="ONE TEAM" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "24")} vurgu="24" not="TRIALS POOLED" x={290} y={140} renk={RENK.koyuYesil} genislik={370} boyut={92} />
      <Pil t={t} bas={K(0, "fasting")} x={290} y={350} metin="LOWER FASTING GLUCOSE" renk={RENK.yesil} />
      <Pil t={t} bas={K(0, "A1C")} x={290} y={420} metin="LOWER A1C" renk={RENK.yesil} />
      {/* ekip 2 (sağda) */}
      <Etiket t={t} bas={K(1, "Another")} capa={[1370, 740]} konum={[1560, 880]} metin="ANOTHER TEAM" renk={RENK.lacivert} />
      <Pil t={t} bas={K(1, "Nutrients")} x={1700} y={220} metin="JOURNAL NUTRIENTS" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "no significant")} x={1690} y={420} metin="NO SIGNIFICANT" renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "overall")} x={1690} y={490} metin="OVERALL EFFECT" renk={RENK.mercan} />
    </>
  );
};

export default S24;
