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

// Sahne 26 — Protein grubu +1,3 kg yağsız kütle
const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const k = kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800]);
  const tPro = K(0, "protein group"), t13 = K(0, "1.3"), tLean = K(0, "lean body mass"), tPla = K(1, "placebo group"), tSl = K(2, "slipped");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={k}>
        <Etiket t={t} bas={tLean} bitis={c[1].bas - 0.1} capa={[560, 420]} konum={[1010, 240]} metin="MUSCLE FIBERS" renk={RENK.yesil} />
      </Kamera>
      <Parcaciklar t={t} bas={tPro} kaynak={[1500, 760]} hedef={[520, 480]} adet={16} aralik={0.14} kavis={-120} renk={RENK.yesil} tohum="p26" />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tPro} metin="LEAN MASS" x={1420} y={150} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t13} vurgu="+1.3 kg" not="protein group, with exercise, over 24 weeks" x={1420} y={250} genislik={470} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPla} metin="PLACEBO: NO GAIN" x={1420} y={560} boyut={64} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tSl} metin="average slipped slightly" x={1420} y={625} hiza="orta" boyut={34} />
    </>
  );
};

export default S26;
