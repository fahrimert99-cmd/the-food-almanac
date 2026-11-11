// Sahne 36 — kanıt sınırlı
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapim: React.FC<{ t: number; bas: number; y: number; renk: string; ikon: "soru" | "onay"; metin: string }> = ({ t, bas, y, renk, ikon, metin }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1330, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 28px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={30} renk="#fff" kalinlik={6} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [0, 60, 1800])} />
      <BaslikBlok t={t} bas={K(0, "rated")} satirlar={b.satirlar} x={1330} y={300} boyut={96} satirArasi={1.3} renkler={[RENK.lacivert, RENK.mercan]} />
      <Etiket t={t} bas={K(0, "expert panels")} bitis={K(0, "soy") - 0.1} capa={[960, 430]} konum={[920, 310]} metin="EXPERT PANELS" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "soy")} capa={[690, 430]} konum={[690, 290]} metin="SOY" renk={RENK.yesil} />
      <Hapim t={t} bas={K(0, "no firm")} y={640} renk={RENK.altin} ikon="soru" metin="NO FIRM CONCLUSION" />
      <Hapim t={t} bas={K(1, "honesty")} y={750} renk={RENK.yesil} ikon="onay" metin="HONESTY MATTERS" />
    </>
  );
};

export default S36;
