import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

// belirli x,y merkezli, pop ile giren hap
const GHap: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, boyut = 34 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

// Sahne 24 — Tieland çalışması: 62 kırılgan yetişkin, 24 hafta direnç antrenmanı
const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const t62 = K(0, "62"), tTr = K(1, "resistance training"), t24 = K(1, "24");
  const bit1 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={k}>
        <Etiket t={t} bas={tTr} bitis={1e9} capa={[390, 430]} konum={[720, 340]} metin="RESISTANCE BANDS" renk={RENK.altin} />
        <Etiket t={t} bas={tTr + 0.5} capa={[1180, 830]} konum={[1330, 920]} metin="LEG PRESS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={t62} bitis={bit1} vurgu="62" not="frail older adults, average age 78" x={1040} y={150} genislik={560} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "twice a week")} bitis={t24 - 0.1} metin="TWICE A WEEK" x={1640} y={180} boyut={78} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t24} vurgu="24" not="weeks of supervised training" x={1640} y={150} genislik={400} renk={RENK.koyuYesil} />
    </>
  );
};

export default S24;
