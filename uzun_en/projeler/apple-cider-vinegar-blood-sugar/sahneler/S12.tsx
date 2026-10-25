// Sahne 12 — çapraz (crossover) deney ve katılımcılar.
import React from "react";
import { ANTON, BaslikBlok, Hap, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pop: React.FC<{ t: number; bas: number; x: number; y: number; bitis?: number; children: React.ReactNode }> = ({ t, bas, x, y, bitis = 1e9, children }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>{children}</div>;
};

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCarol = K(0, "Carol");
  const tCross = K(0, "crossover");
  const t15 = K(1, "Fifteen");
  const t12 = K(1, "twelve");
  const tYas = K(1, "average");
  const tDia = K(1, "no diabetes");
  const bit0 = t15 - 0.15;
  const aOk = eout(ilerle(t, t12 + 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 50, 1920], [90, 190, 1650])} />
      {/* 1. cümle */}
      <Pop t={t} bas={tCarol - 0.1} x={260} y={130} bitis={bit0}>
        <Hap metin="LED BY CAROL JOHNSTON" renk={RENK.altin} boyut={32} />
      </Pop>
      <BaslikBlok t={t} bas={tCross - 0.1} bitis={bit0} satirlar={["CROSSOVER", "TRIAL"]} x={260} y={290} boyut={130} />
      {/* 2. cümle */}
      <VurguRozet t={t} bas={t15} vurgu="15" not="SIGNED UP" x={420} y={130} genislik={300} renk={RENK.lacivert} />
      <Pop t={t} bas={t12 - 0.2} x={600} y={205}>
        <span style={{ fontFamily: ANTON, fontSize: 90, color: RENK.altin }}>→</span>
      </Pop>
      <VurguRozet t={t} bas={t12} vurgu="12" not="FINISHED" x={850} y={130} genislik={300} renk={RENK.yesil} />
      <Pop t={t} bas={tYas - 0.1} x={260} y={335}>
        <Hap metin="AVERAGE AGE ≈ 23" renk={RENK.altin} boyut={32} />
      </Pop>
      <Pop t={t} bas={tDia - 0.1} x={260} y={405}>
        <Hap metin="NO DIABETES" renk={RENK.yesil} boyut={32} />
      </Pop>
    </>
  );
};

export default S12;
