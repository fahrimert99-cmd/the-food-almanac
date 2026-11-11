// Sahne 31 — 8 hafta tatlandırılmış çay
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};
const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 70, 1740])}>
        <Etiket t={t} bas={K(0, "stevia")} bitis={t1} capa={[800, 420]} konum={[1100, 250]} metin="STEVIA TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "sucralose")} bitis={t1} capa={[300, 470]} konum={[330, 260]} metin="SUCRALOSE TEA" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} bas={0.2} metin={s.meta.etiket ?? ""} />
      <Gel t={t} bas={K(0, "three dozen")} bitis={t1} style={{ right: 60, top: 150 }}><Hap metin="ABOUT 3 DOZEN ADULTS" renk={RENK.lacivert} boyut={32} /></Gel>
      <Gel t={t} bas={K(0, "type 2 diabetes")} bitis={t1} style={{ right: 60, top: 240 }}><Hap metin="TYPE 2 DIABETES" renk={RENK.mercan} boyut={32} /></Gel>
      <Baslik t={t} bas={K(0, "eight weeks") - 0.3} bitis={t1} metin="8 WEEKS OF" x={1860} y={420} boyut={100} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "eight weeks")} bitis={t1} metin="SWEET TEA" x={1860} y={540} boyut={100} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} isaret="nokta" x={1220} y={300} aralik={96} boyut={42} genislik={640} ogeler={[
        { bas: K(1, "A1C"), metin: "A1C", renk: RENK.altin },
        { bas: K(1, "insulin"), metin: "INSULIN", renk: RENK.altin },
        { bas: K(1, "cholesterol"), metin: "CHOLESTEROL", renk: RENK.altin },
      ]} />
      <Baslik t={t} bas={K(1, "did not differ")} metin="NO DIFFERENCE" x={1860} y={650} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "between the groups")} metin="between the groups" x={1860} y={720} boyut={34} hiza="sag" />
    </>
  );
};

export default S31;
