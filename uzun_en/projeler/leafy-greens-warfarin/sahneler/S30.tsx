// Sahne 30 — Sconce 2007: plasebo kontrollü deneme (70 yetişkin, 150 mikrogram, altı ay).
import React from "react";
import { Etiket, Ikon, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const t6 = K(1, "six months");
  const [sc, al] = pop(t, t6, 0.5);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={w}>
        <Etiket t={t} bas={K(1, "vitamin K a day")} capa={[790, 435]} konum={[790, 330]} metin="VITAMIN K" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "a placebo,")} capa={[1120, 435]} konum={[1120, 330]} metin="PLACEBO" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <VurguRozet t={t} bas={K(1, "70")} bitis={K(1, "150") - 0.15} vurgu="70" not="adults, unstable warfarin response" x={270} y={330} renk={RENK.koyuYesil} genislik={340} />
      <VurguRozet t={t} bas={K(1, "150")} vurgu="150" not="micrograms of vitamin K a day" x={1710} y={330} renk={RENK.altin} genislik={340} />
      <div style={{ position: "absolute", left: 1710, top: 640, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex",
        alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999,
        padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        SIX MONTHS
      </div>
    </>
  );
};

export default S30;
