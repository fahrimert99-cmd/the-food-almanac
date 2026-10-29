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

// Sahne 27 — İkisi de güçlendi, yalnızca protein grubu kas kazandı
const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [150, 20, 1700], [230, 60, 1560]);
  const tStr = K(0, "stronger"), tPro = K(1, "added protein"), tBuilt = K(1, "built muscle");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={k}>
        <Etiket t={t} bas={tStr} bitis={c[1].bas - 0.1} capa={[610, 440]} konum={[560, 250]} metin="BOTH GROUPS STRONGER" renk={RENK.altin} />
        <Etiket t={t} bas={tPro} capa={[1400, 560]} konum={[1640, 340]} metin="PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tBuilt} metin="PROTEIN GROUP" x={200} y={150} boyut={58} renk={RENK.lacivert} />
      <Baslik t={t} bas={tBuilt + 0.15} metin="BUILT MUSCLE" x={200} y={225} boyut={84} renk={RENK.koyuYesil} />
    </>
  );
};

export default S27;
