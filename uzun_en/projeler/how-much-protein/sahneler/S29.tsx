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

// Sahne 29 — Morton ve ark. 2018 meta-analizi
const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760]);
  const tHea = K(0, "healthy"), t49 = K(1, "49"), t1863 = K(1, "1,863"), tRes = K(1, "resistance training"), tSup = K(2, "Protein supplements"), t03 = K(2, "0.3"), tStr = K(2, "strength");
  const bit2 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={k}>
        <Etiket t={t} bas={tRes} bitis={bit2} capa={[1560, 530]} konum={[1500, 400]} metin="RESISTANCE TRAINING" renk={RENK.altin} />
        <Etiket t={t} bas={tSup} capa={[1250, 800]} konum={[1520, 905]} metin="PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tHea} bitis={c[1].bas + 2.5} metin="HEALTHY PEOPLE?" x={1500} y={200} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t49} bitis={bit2} vurgu="49" not="randomized trials" x={1330} y={110} genislik={340} boyut={90} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t1863} bitis={bit2} vurgu="1,863" not="adults" x={1700} y={110} genislik={300} boyut={90} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t03} vurgu="+0.3 kg" not="extra muscle mass" x={1510} y={110} genislik={420} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tStr} metin="+ STRENGTH" x={1510} y={370} boyut={64} renk={RENK.altin} hiza="orta" />
    </>
  );
};

export default S29;
