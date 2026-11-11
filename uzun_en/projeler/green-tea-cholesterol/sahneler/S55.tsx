// Sahne 55 — İpucu 4: saate dikkat. Pencere kenarındaki fincan; sağdaki boş kâğıtta başlık ve etiketler.
import React from "react";
import { ANTON, BaslikBlok, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; ikon: "onay" | "uyari" | "saat" }> =
  ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon }) => {
    const [sc, al] = pop(t, bas, 0.5);
    if (al <= 0 || t > bitis) return null;
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
        padding: "8px 24px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 42, height: 42, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ikon} boyut={26} renk="#fff" />
        </span>
        {metin}
      </div>
    );
  };

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sb, ab] = pop(t, 0.05, 0.55);
  const tMorn = K(2, "morning");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      <div style={{ position: "absolute", left: 1410, top: 160, transform: `translate(-50%,-50%) scale(${sb})`, opacity: ab, width: 76, height: 76,
        borderRadius: "50%", background: RENK.lacivert, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: ANTON, fontSize: 50 }}>4</div>
      <Baslik t={t} bas={K(1, "clock")} metin="MIND THE CLOCK" x={1860} y={160} boyut={56} renk={RENK.lacivert} hiza="sag" />
      <Hap t={t} bas={K(2, "caffeine")} bitis={K(2, "keep") - 0.1} x={1560} y={470} metin="CAFFEINE & SLEEP" renk={RENK.altin} ikon="uyari" />
      <Etiket t={t} bas={K(2, "green")} capa={[480, 660]} konum={[880, 420]} metin="YOUR GREEN TEA" renk={RENK.yesil} />
      <BaslikBlok t={t} bas={tMorn} satirlar={["MORNING", "IS BEST"]} x={1860} y={330} boyut={104} hiza="sag" />
      <Hap t={t} bas={K(2, "early")} x={1580} y={640} metin="EARLY AFTERNOON" renk={RENK.yesil} ikon="saat" />
      <Hap t={t} bas={K(2, "decaf")} x={1640} y={750} metin="OR DECAF" renk={RENK.yesil} ikon="onay" />
    </>
  );
};

export default S55;
