// Sahne 9 — 2006 meta-analizi: 5 çalışma, 363 hasta. Sağ boş kâğıt alanda başlık, solda gerçek nesne etiketleri.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(0, "five randomized");
  const tHasta = K(0, "363");
  const tDoz = K(1, "fixed dose");
  const tPlasebo = K(1, "placebo");
  const tAmeliyat = K(1, "after surgery");
  const [sc, al] = pop(t, tHasta, 0.55);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1760])}>
      {/* 3. vuruş: gerçek nesneler */}
      <Etiket t={t} bas={tDoz} bitis={tPlasebo + 1.2} capa={[1150, 868]} konum={[1500, 790]} metin="FIXED DOSE" renk={RENK.altin} />
      <Etiket t={t} bas={tAmeliyat} capa={[800, 620]} konum={[1330, 660]} metin="AFTER SURGERY" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* 1. vuruş: başlık */}
      <BaslikBlok t={t} bas={tBes} satirlar={["5 TRIALS"]} x={1280} y={300} boyut={120} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tBes + 0.35} metin="randomized, pooled in one review" x={1284} y={380} boyut={30} genislik={560} />
      {/* 2. vuruş: hasta sayısı */}
      <div style={{ position: "absolute", left: 1284, top: 470, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
        borderRadius: 999, padding: "8px 26px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.altin }}>363</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.murekkep }}>PATIENTS</span>
      </div>
    </>
  );
};

export default S09;
