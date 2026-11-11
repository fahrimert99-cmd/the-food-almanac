// Sahne 62 — özet: besinden kalsiyum vs. hap; bağırsakta bağlanma.
import React from "react";
import { Etiket, INTER, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; ikon: "onay" | "uyari" }> = ({ t, bas, metin, renk, x, y, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
      display: "flex", alignItems: "center", gap: 14, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 999,
      padding: "10px 30px 10px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
      <span style={{ width: 52, height: 52, borderRadius: "50%", background: renk, color: "#fff", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 32 }}>{ikon === "onay" ? "✓" : "!"}</span>
      {metin}
    </div>
  );
};

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b2 = K(0, "pills"), b3 = K(1, "bind");
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={K(1, "oxalate")} bitis={K(1, "spinach") - 0.2} capa={[480, 800]} konum={[250, 640]} metin="OXALATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "spinach")} capa={[480, 800]} konum={[250, 640]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "dairy.")} capa={[1400, 760]} konum={[1690, 690]} metin="DAIRY" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "gut,")} capa={[690, 250]} konum={[300, 190]} metin="IN THE GUT" renk={RENK.mercan} />
      </Kamera>
      <Pill t={t} bas={K(0, "fewer")} metin="FOOD → FEWER STONES" renk={RENK.yesil} ikon="onay" x={1570} y={330} />
      <Pill t={t} bas={b2} metin="PILLS → MORE STONES" renk={RENK.mercan} ikon="uyari" x={1570} y={420} />
      <Parcaciklar t={t} bas={b3} kaynak={[850, 760]} hedef={[860, 420]} adet={14} omur={1.8} tohum="gut" />
    </>
  );
};

export default S62;
