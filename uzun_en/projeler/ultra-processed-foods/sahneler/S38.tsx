// Sahne 38 — daha düşük riskle bağlantılı alt gruplar (kâğıt zemin, sol başlık + sağ liste).
import React from "react";
import { AbsoluteFill, BaslikBlok, INTER, KaynakEtiketi, Kamera, Liste, Not, Ortu, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYaz = K(1, "authors");
  const [sc, al] = pop(t, tYaz, 0.5);
  const pM = eout(ilerle(t, K(0, "mostly"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/37" pencere={[0, 0, 1920]} />
      <Ortu a={1} />
      <AbsoluteFill style={{ background: `radial-gradient(ellipse 80% 70% at 40% 50%, #FBF8F1 0%, ${RENK.kagit} 60%, #EFE9DC 100%)` }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={48} />
      <BaslikBlok t={t} bas={K(0, "lower")} satirlar={b.satirlar} x={140} y={260} boyut={112} renkler={[RENK.yesil, RENK.lacivert]} />
      <Not t={t} bas={K(0, "Others")} metin="LINKED WITH LOWER RISK" x={146} y={470} boyut={34} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="onay" x={960} y={270} aralik={128} boyut={44} genislik={920} ogeler={[
        { bas: K(0, "dark"), metin: "DARK & WHOLE GRAIN BREADS" },
        { bas: K(0, "packaged"), metin: "PACKAGED BREAKFAST CEREALS" },
        { bas: K(0, "yogurt"), metin: "YOGURT & DAIRY DESSERTS" },
      ]} />
      <div style={{ position: "absolute", left: 1062, top: 622, opacity: pM, fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2,
        color: RENK.yesil }}>MOSTLY YOGURT</div>
      <div style={{ position: "absolute", left: 140, top: 760, display: "flex", alignItems: "center", gap: 20, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0% 50%", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 26,
        padding: "18px 30px 18px 18px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        <div style={{ width: 64, height: 64, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: INTER, fontWeight: 800, fontSize: 40, color: "#fff", flex: "none" }}>!</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.lacivert, lineHeight: 1.25 }}>
          MAY PARTLY REFLECT<br />OTHER HEALTHY HABITS
        </div>
      </div>
    </>
  );
};
export default S38;
