// Sahne 21 — Suez 2022: 1.300 kişi tarandı, 120 sağlıklı yetişkin seçildi. Görsel solda, sağda sayılar.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop }
  from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1300 = K(0, "1,300"), t120 = K(0, "120"), tAvoid = K(0, "strictly"), tClean = K(1, "clean slate"), tGlass = K(0, "artificial");
  const aPanel = eout(ilerle(t, 0.2, 0.7));
  const [sa, aa] = pop(t, t120 - 0.45, 0.4);
  const [sp, ap] = pop(t, tAvoid, 0.5);
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 60, 1800])}>
        <Etiket t={t} bas={tGlass} bitis={10.0} capa={[545, 690]} konum={[330, 900]} metin="NO SWEETENERS" renk={RENK.yesil} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={940} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={t1300} vurgu="1,300" not="people screened" x={1480} y={150} renk={RENK.lacivert}
        genislik={420} boyut={96} bitis={10.0} />
      <div style={{ position: "absolute", left: 1480, top: 395, transform: `translateX(-50%) scale(${sa}) rotate(90deg)`, opacity: aa * (t < 10 ? 1 : 0) }}>
        <svg width={56} height={56} viewBox="0 0 48 48" fill="none" stroke={RENK.gri} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="24" x2="38" y2="24" /><polyline points="28,14 38,24 28,34" /></svg>
      </div>
      <VurguRozet t={t} bas={t120} vurgu="120" not="healthy adults chosen" x={1480} y={480} renk={RENK.koyuYesil}
        genislik={420} boyut={110} bitis={10.0} />
      <div style={{ position: "absolute", left: 1480, top: 800, transform: `translateX(-50%) scale(${sp})`, opacity: ap * (t < 10 ? 1 : 0),
        display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`,
        borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
        AVOIDED SWEETENERS
      </div>
      <Baslik t={t} bas={tClean - 0.1} metin="A CLEAN" x={1180} y={430} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tClean + 0.1} metin="SLATE" x={1180} y={550} boyut={110} renk={RENK.koyuYesil} />
    </>
  );
};

export default S21;
