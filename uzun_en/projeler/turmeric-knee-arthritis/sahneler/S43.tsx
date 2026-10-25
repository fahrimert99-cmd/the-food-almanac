// Sahne 43 — Kan sulandırıcılar: Medsafe warfarin + zerdeçal raporu (INR > 10). Sol görsel, sağ boş kâğıt.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 110, 1600], [30, 140, 1480]);
  const tBlood = K(0, "blood");
  const tMed = K(1, "Medsafe");
  const tWar = K(1, "warfarin");
  const tTur = K(1, "turmeric");
  const tINR = K(1, "10");
  const tSingle = K(2, "single");
  const tTrial = K(2, "not a trial");
  const tRisk = K(2, "serious");
  const [sc1, al1] = pop(t, tSingle, 0.5);
  const [sc2, al2] = pop(t, tTrial, 0.5);
  const [sc3, al3] = pop(t, tRisk, 0.55);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={pen}>
        {/* takvim başlığındaki anlamsız harfler kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 252, top: 318, width: 340, height: 84,
          background: `radial-gradient(ellipse 55% 55% at 50% 50%, #F9F5EA 0%, #F9F5EA 85%, rgba(249,245,234,0) 100%)` }} />
        <div style={{ position: "absolute", left: 455, top: 288, width: 120, height: 50,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F9F5EA 0%, #F9F5EA 80%, rgba(249,245,234,0) 100%)" }} />
        <div style={{ position: "absolute", left: 245, top: 372, width: 70, height: 36,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F9F5EA 0%, #F9F5EA 80%, rgba(249,245,234,0) 100%)" }} />
        <Etiket t={t} bas={tWar} bitis={9.9} capa={[440, 575]} konum={[1090, 700]} metin="WARFARIN" renk={RENK.lacivert} boyut={32} />
        <Etiket t={t} bas={tTur} bitis={12.9} capa={[745, 420]} konum={[1130, 330]} metin="TURMERIC PRODUCT" renk={RENK.altin} boyut={32} />
      </Kamera>
      <BaslikBlok t={t} bas={tBlood} bitis={9.4} satirlar={["BLOOD", "THINNERS"]} x={1860} y={230} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tMed} bitis={9.6} />
      <VurguRozet t={t} bas={tINR} bitis={12.6} vurgu="INR > 10" not="WITHIN WEEKS" x={1590} y={430} renk={RENK.mercan} genislik={440} />
      {/* tek rapor, çalışma değil */}
      <div style={{ position: "absolute", left: 1860, top: 250, transform: `translateX(-100%) scale(${sc1})`, transformOrigin: "100% 50%", opacity: al1 * sol(t, 17.6) }}>
        <Hap metin="A SINGLE REPORT" renk={RENK.altin} boyut={40} />
      </div>
      <div style={{ position: "absolute", left: 1860, top: 360, transform: `translateX(-100%) scale(${sc2})`, transformOrigin: "100% 50%", opacity: al2 * sol(t, 17.6) }}>
        <Hap metin="NOT A TRIAL" renk={RENK.lacivert} boyut={40} />
      </div>
      <div style={{ position: "absolute", left: 1860, top: 540, transform: `translateX(-100%) scale(${sc3})`, transformOrigin: "100% 50%", opacity: al3 }}>
        <Hap metin="SERIOUS BLEEDING RISK" renk={RENK.mercan} boyut={40} />
      </div>
    </>
  );
};

export default S43;
