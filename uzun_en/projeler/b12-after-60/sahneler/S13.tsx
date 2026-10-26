// Sahne 13 — yumurta ve et tabağı, mide kesiti: yetersiz asit ve intrinsic factor.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Görseldeki sahte yazıyı örten kâğıt rengi yama
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 78%, ${kagit(0)} 100%)` }} />
);

// Akış zinciri için küçük hap
const Cip: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "0 50%", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "8px 24px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert,
      whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tNih = K(0, "National"), tEnough = K(0, "enough stomach acid"), tB12 = K(0, "B12"), tAtr = K(1, "atrophic");
  const tHelper = K(1, "helper"), tIntr = K(1, "intrinsic"), tNeeds = K(1, "needs"), tAbs = K(1, "absorbed");
  const [sa, aa] = pop(t, tNih, 0.5);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [80, 30, 1760]);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={pencere}>
        <Yama x={1170} y={825} w={380} h={80} />
        <Etiket t={t} bas={tEnough} bitis={c[1].bas - 0.2} capa={[1400, 600]} konum={[1000, 300]} metin="NOT ENOUGH ACID" renk={RENK.mercan} />
        <Etiket t={t} bas={tB12 + 0.2} bitis={c[1].bas - 0.2} capa={[510, 590]} konum={[470, 300]} metin="B12 IN FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tAtr} bitis={tHelper - 0.2} capa={[1500, 330]} konum={[950, 220]} metin="ATROPHIC GASTRITIS" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 110, top: 130, transform: `scale(${sa})`, transformOrigin: "0 50%", opacity: aa }}>
        <Hap metin="NATIONAL INSTITUTES OF HEALTH" renk={RENK.altin} boyut={30} style={{ opacity: t < c[0].bas + 5.2 ? 1 : 0 }} />
      </div>
      <Not t={t} bas={tHelper} metin="A helper protein" x={116} y={110} boyut={38} agirlik={700} renk={RENK.lacivert} />
      <Baslik t={t} bas={tIntr} metin="INTRINSIC FACTOR" x={110} y={230} boyut={104} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 116, top: 330, display: "flex", alignItems: "center", gap: 16 }}>
        <Cip t={t} bas={tNeeds - 0.1} metin="B12" renk={RENK.altin} />
        {t >= tNeeds + 0.4 && <IkonYol ad="ok" boyut={44} renk={RENK.lacivert} />}
        <Cip t={t} bas={tAbs} metin="ABSORBED" renk={RENK.yesil} />
      </div>
    </>
  );
};

export default S13;
