// Sahne 39
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu,
  kelimeZamani, kis, pop, sol } from "../kutuphane";

// Yerel hap: pop ile gelir, isteğe bağlı simge
const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon?: "onay" | "carpi" | "saat" | "uyari"; bitis?: number; boyut?: number }> = ({
  t, bas, x, y, metin, renk, ikon, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: ikon ? "8px 26px 8px 10px" : "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" kalinlik={6} /></span>}
      {metin}
    </div>
  );
};

// Kart görselleri: dondurucu ve buz bloğu üstündeki kase (büyütme dairesi dışarıda)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/40", kirp: [20, 40, 920, 715] },
  { gorsel: "tam/41", kirp: [70, 180, 970, 855] },
];

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "pause"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 800, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 16, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
        padding: "10px 28px 10px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
          <i style={{ width: 7, height: 20, background: "#fff", borderRadius: 2 }} /><i style={{ width: 7, height: 20, background: "#fff", borderRadius: 2 }} />
        </span>
        PAUSE
      </div>
    </>
  );
};
export default S39;
