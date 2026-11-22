// Sahne 28 — gizli potasyum: noni suyu vaka raporu (Mueller 2000). Başlık, kaynak, eşitlik sırası.
import React from "react";
import { Baslik, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = t > bitis ? 0 : al;
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, whiteSpace: "nowrap",
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
      fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [20, 30, 1880], [120, 90, 1700]);
  const kal = (bas: number) => pop(t, bas, 0.5);
  const parca = (bas: number, ek: React.ReactNode) => {
    const [sc, al] = kal(bas);
    return <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>{ek}</div>;
  };
  const pil = (m: string) => (
    <div style={{ whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "10px 24px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{m}</div>
  );
  const es = <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 44, color: RENK.altin }}>≈</span>;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={cam} />
      <KaynakEtiketi t={t} bas={K(1, "A 2000")} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "potassium")} bitis={5.6} metin="HIDDEN" x={560} y={185} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "potassium")} bitis={5.6} metin="POTASSIUM" x={850} y={185} boyut={100} renk={RENK.koyuYesil} />
      <Hap t={t} bas={K(1, "high potassium")} bitis={12.6} metin="HIGH POTASSIUM" renk={RENK.mercan} x={560} y={150} />
      <div style={{ position: "absolute", left: 500, top: 148, display: "flex", alignItems: "center", gap: 16 }}>
        {parca(K(2, "Its"), pil("NONI JUICE"))}
        {parca(K(2, "similar"), es)}
        {parca(K(2, "orange juice"), pil("ORANGE JUICE"))}
        {parca(K(2, "and tomato"), es)}
        {parca(K(2, "tomato juice"), pil("TOMATO JUICE"))}
      </div>
    </>
  );
};

export default S28;
