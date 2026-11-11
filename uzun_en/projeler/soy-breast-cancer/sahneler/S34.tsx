// Sahne 34 — ACS 2012 rehberi: soya yemekleri / takviyeler
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağdaki kâğıt boşluğunda onay hapı
const Hapim: React.FC<{ t: number; bas: number; y: number; renk: string; ikon: "onay" | "uyari"; metin: string }> = ({ t, bas, y, renk, ikon, metin }) => {
  const [sc, al] = pop(t, bas, 0.55);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1250, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "8px 28px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
      <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={30} renk="#fff" kalinlik={6} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 80, 1760], [20, 30, 1640])} />
      <BaslikBlok t={t} bas={K(0, "American")} satirlar={b.satirlar} x={1250} y={250} boyut={112} />
      <Etiket t={t} bas={K(0, "for survivors")} capa={[640, 420]} konum={[840, 140]} metin="FOR SURVIVORS" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "soy foods")} capa={[300, 850]} konum={[560, 905]} metin="TOFU" renk={RENK.yesil} />
      <Hapim t={t} bas={K(0, "soy foods")} y={570} renk={RENK.yesil} ikon="onay" metin="SOY FOODS: NOT LIKELY HARMFUL" />
      <Hapim t={t} bas={K(1, "isoflavone supplements")} y={680} renk={RENK.altin} ikon="uyari" metin="SUPPLEMENTS: LESS EVIDENCE" />
    </>
  );
};

export default S34;
