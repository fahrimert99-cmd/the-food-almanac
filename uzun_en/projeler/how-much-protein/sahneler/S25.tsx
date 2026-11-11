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

// Sahne 25 — Protein mi plasebo mu: çift kör
const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 60, 1800], [60, 100, 1740]);
  const tPro = K(0, "protein supplement"), tPla = K(1, "placebo"), tNei = K(2, "Neither");
  return (
    <>
      <Kamera gorsel="tam/25" pencere={k}>
        <Etiket t={t} bas={tPro} bitis={c[1].bas - 0.1} capa={[370, 540]} konum={[560, 250]} metin="PROTEIN DRINK" renk={RENK.altin} />
        <Etiket t={t} bas={tPla} capa={[720, 560]} konum={[1090, 330]} metin="PLACEBO DRINK" renk={RENK.gri} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "15")} bitis={c[1].bas - 0.1} vurgu="15 g" not="protein, twice a day" x={1500} y={300} genislik={400} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tNei} satirlar={["PROTEIN", "OR PLACEBO"]} x={1500} y={520} boyut={104} hiza="orta" renkler={[RENK.altin, RENK.lacivert]} />
      <Not t={t} bas={tNei + 0.5} metin="double-blind, 24 weeks" x={1500} y={760} hiza="orta" boyut={36} />
    </>
  );
};

export default S25;
