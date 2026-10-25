// Sahne 9 — mutfak rafı: ucuz malzeme, küçük denemeler.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUcuz = K(0, "cheap kitchen");
  const tYuk = K(0, "soften the rise");
  const tKucuk = K(1, "small trials");
  const tYil = K(1, "years");
  const tTest = K(1, "tested");
  const bitisEt = tTest - 0.15;
  const [sc, al] = pop(t, tYil, 0.5);
  const aDeneme = eout(ilerle(t, tTest, 0.5));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [170, 110, 1600])} />
      <Etiket t={t} bas={tUcuz} bitis={bitisEt} capa={[430, 520]} konum={[880, 230]} metin="CHEAP INGREDIENT" renk={RENK.altin} />
      <Etiket t={t} bas={tYuk} bitis={bitisEt} capa={[1455, 600]} konum={[1450, 330]} metin="BLOOD SUGAR RISE" renk={RENK.mercan} />
      {/* 2. cümle: küçük denemeler */}
      <div style={{ position: "absolute", left: 1480, top: 118, transform: "translateX(-50%)", width: 620, height: 6,
        background: RENK.altin, opacity: aDeneme }} />
      <Baslik t={t} bas={tKucuk - 0.1} metin="SMALL TRIALS" x={1480} y={210} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1480, top: 300, transform: `translateX(-50%) scale(${sc})`, opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "8px 30px",
        fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.lacivert,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>FOR YEARS</div>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S09;
