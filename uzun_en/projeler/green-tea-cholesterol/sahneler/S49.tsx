// Sahne 49 — atorvastatin ve ek takviyeler: solda doktor masası, sağda akış ve başlık.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; bitis?: number; y: number; metin: string; renk: string; boyut?: number }> = ({ t, bas, bitis, y, metin, renk, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis ?? 1e9);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1560, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kapat = K(1, "So") - 0.1;
  const pOk = eout(ilerle(t, K(0, "lower"), 0.5)) * sol(t, kapat);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1820])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "National")} />
      {/* 1. cümle: ekstre → atorvastatin */}
      <Kutu t={t} bas={K(0, "green")} bitis={kapat} y={250} metin="GREEN TEA EXTRACT" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1560 - 40, top: 305, width: 80, height: 90, opacity: pOk, transform: `scaleY(${pOk})`, transformOrigin: "50% 0" }}>
        <IkonYol ad="ok" boyut={80} renk={RENK.mercan} kalinlik={7} />
      </div>
      <Kutu t={t} bas={K(0, "blood")} bitis={kapat} y={520} metin="LOWER BLOOD LEVELS" renk={RENK.mercan} boyut={26} />
      <Kutu t={t} bas={K(0, "atorvastatin")} bitis={kapat} y={430} metin="ATORVASTATIN" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "cholesterol")} bitis={kapat} capa={[800, 480]} konum={[1180, 650]} metin="CHOLESTEROL MEDICINE" renk={RENK.altin} boyut={24} />
      {/* 2. cümle: eczacıya sor */}
      <Kutu t={t} bas={K(1, "prescriptions")} y={250} metin="DAILY PRESCRIPTIONS?" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "ask")} satirlar={["ASK YOUR", "PHARMACIST"]} x={1280} y={400} boyut={100} />
      <Kutu t={t} bas={K(1, "supplements")} y={720} metin="BEFORE TEA SUPPLEMENTS" renk={RENK.koyuYesil} boyut={28} />
      <Etiket t={t} bas={K(1, "supplements")} capa={[610, 300]} konum={[900, 95]} metin="SUPPLEMENTS" renk={RENK.yesil} />
    </>
  );
};

export default S49;
