// Sahne 22 — havan ve not defteri: 1 g üstü risk; doktora/eczacıya danış.
import React from "react";
import { AltSis, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; y: number; metin: string }> = ({ t, bas, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1300, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "9px 26px", fontFamily: INTER, fontWeight: 800,
      fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const B = { satirlar: [] as string[], vurgu: "", not: "", ...(s.meta.baslik ?? {}) };
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760]);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={p} />
      <AltSis a={0.4} />
      <Etiket t={t} bas={K(0, "above")} bitis={K(1, "If")} capa={[960, 520]} konum={[1130, 330]} metin="ABOVE 1 GRAM A DAY" renk={RENK.mercan} />
      <Chip t={t} bas={K(1, "irregular")} y={150} metin="IRREGULAR HEARTBEAT" />
      <Chip t={t} bas={K(1, "blood thinner,")} y={240} metin="BLOOD THINNER" />
      <BaslikBlok t={t} bas={K(1, "ask")} satirlar={B.satirlar} x={1300} y={440} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(1, "fish oil.")} capa={[270, 640]} konum={[230, 400]} metin="FISH OIL" renk={RENK.altin} />
    </>
  );
};

export default S22;
