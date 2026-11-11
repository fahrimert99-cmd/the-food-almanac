// Sahne 43 — Kan sulandırıcılar: Medsafe warfarin + INR raporu. Sol görsel, sağda INR rozeti.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu,
  kelimeZamani, pop, sol, Ikon } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "blood");
  const tBit = K(1, "Medsafe") - 0.2;
  const tTest = K(1, "clotting test");
  const tInr = K(1, "rose above 10");
  const tTek = K(2, "single report");
  const tRisk = K(2, "serious bleeding") - 0.3;
  const pPanel = eout(ilerle(t, 0.2, 0.8));
  const [sc1, al1] = pop(t, tTek, 0.5);
  const [sc2, al2] = pop(t, tRisk, 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [60, 100, 1560])}>
        {/* takvim başlığındaki anlamsız harfler kâğıt yamayla örtülür */}
        <div style={{ position: "absolute", left: 215, top: 322, width: 330, height: 62, transform: "rotate(-17deg)",
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(246,241,229,1) 0%, rgba(246,241,229,1) 60%, rgba(246,241,229,0) 100%)` }} />
        <Etiket t={t} bas={K(1, "warfarin")} capa={[620, 560]} konum={[1020, 470]} metin="WARFARIN" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "within weeks")} capa={[330, 450]} konum={[330, 190]} metin="WITHIN WEEKS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "turmeric product")} capa={[760, 300]} konum={[800, 165]} metin="TURMERIC PRODUCT" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={tBaslik} bitis={tBit} satirlar={["BLOOD", "THINNERS"]} x={1860} y={250} boyut={118} hiza="sag" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Medsafe")} bitis={K(1, "within weeks") - 0.4} />
      <Baslik t={t} bas={tTest} metin="CLOTTING TEST: INR" x={1860} y={250} boyut={64} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tInr} vurgu="INR > 10" not="after starting turmeric" x={1560} y={340} genislik={440} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1560, top: 650, transform: `translate(-50%,0) scale(${sc1})`, opacity: al1 }}>
        <Hap metin="SINGLE REPORT, NOT A TRIAL" renk={RENK.altin} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1560, top: 760, transform: `translate(-50%,0) scale(${sc2})`, opacity: al2 }}>
        <Hap metin="SERIOUS BLEEDING RISK" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S43;
