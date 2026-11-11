// Sahne 21 — 2025 İngiltere denemesi: iki tabak, sağda panel (55 kişi, 8 hafta), sonda kılavuz hapı.
import React from "react";
import { Baslik, IkonYol, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

const Hapx: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; ikon?: boolean }> = ({ t, bas, bitis = 1e9, x, y, metin, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 14, background: "#FCF8EC", border: `3px solid ${RENK.koyuYesil}`, borderRadius: 999, padding: "8px 30px 8px 10px",
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)", whiteSpace: "nowrap", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1, color: RENK.lacivert }}>
      {ikon && <span style={{ width: 42, height: 42, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="onay" boyut={26} renk="#fff" kalinlik={7} /></span>}
      {metin}
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const z = ilerle(t, 0, s.sure);
  const tKart = K(1, "Samuel"), tSon = K(2, "Both");
  const aPanel = eout(ilerle(t, tKart - 0.3, 0.7)) * (1 - eout(ilerle(t, tSon - 0.5, 0.6)));
  return (
    <>
      <Kamera gorsel="tam/21" pencere={[30 * z, 10 + 15 * z, 1900 - 60 * z]} />
      {/* vuruş 1: 2025, İngiltere */}
      <Hapx t={t} bas={K(0, "2025")} bitis={tKart - 0.3} x={960} y={62} metin="A LONGER TRIAL · ENGLAND · 2025" />
      {/* vuruş 2: sağ panel */}
      <KaynakEtiketi t={t} bas={tKart} metin={s.meta.etiket ?? ""} />
      <Panel a={aPanel} genislik={900} opak={0.97} />
      <VurguRozet t={t} bas={K(1, "55")} bitis={tSon - 0.5} vurgu="55" not="ADULTS WITH OVERWEIGHT OR OBESITY" x={1500} y={190} genislik={520} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "eight")} bitis={tSon - 0.5} metin="8 WEEKS" x={1500} y={620} boyut={120} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "eight") + 0.2} bitis={tSon - 0.5} metin="EACH DIET" x={1500} y={750} boyut={120} hiza="orta" renk={RENK.mercan} />
      {/* vuruş 3: ortak kılavuz */}
      <Hapx t={t} bas={K(2, "UK's")} x={960} y={908} metin="BOTH: UK HEALTHY-EATING GUIDE" ikon />
    </>
  );
};

export default S21;
