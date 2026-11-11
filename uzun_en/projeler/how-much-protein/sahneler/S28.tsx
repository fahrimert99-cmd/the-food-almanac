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

// Sahne 28 — Yalnızca protein: işlev düzeldi, kas kütlesi artmadı
const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const tAlone = K(0, "protein without"), t65 = K(0, "65"), tPerf = K(1, "Physical"), tMass = K(2, "muscle mass");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={k} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={tAlone} satirlar={["PROTEIN", "ALONE"]} x={1450} y={140} boyut={112} hiza="orta" renkler={[RENK.altin, RENK.lacivert]} />
      <VurguRozet t={t} bas={t65} bitis={c[1].bas - 0.1} vurgu="65" not="frail older adults" x={1620} y={470} genislik={400} renk={RENK.lacivert} />
      <Ikon t={t} bas={tPerf} ad="onay" x={1430} y={560} />
      <Baslik t={t} bas={tPerf + 0.1} metin="BETTER FUNCTION" x={1490} y={560} boyut={50} renk={RENK.yesil} />
      <Ikon t={t} bas={tMass} ad="carpi" x={1430} y={720} zemin={RENK.mercan} />
      <Baslik t={t} bas={tMass + 0.1} metin="NO EXTRA MUSCLE" x={1490} y={720} boyut={50} renk={RENK.mercan} />
    </>
  );
};

export default S28;
