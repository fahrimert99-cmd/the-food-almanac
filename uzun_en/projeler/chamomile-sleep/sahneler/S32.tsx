// Sahne 32 — Apigenin: papatya halkası solda; sağda başlık, ardından parçacıklar şematik bir beyin reseptörüne akar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şematik reseptör (görsel koordinatı): halka + girinti
const Reseptor: React.FC<{ t: number; bas: number; x: number; y: number }> = ({ t, bas, x, y }) => {
  const [sc, al] = pop(t, bas, 0.6);
  if (al <= 0) return null;
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <g transform={`translate(${x} ${y}) scale(${sc})`} opacity={al}>
        <circle r={86} fill="#FCF8EC" stroke={RENK.lacivert} strokeWidth={6} />
        <circle r={86} fill="none" stroke={RENK.altin} strokeWidth={3} strokeDasharray="10 8" transform="scale(1.18)" />
        <path d="M -44 -62 A 76 76 0 0 1 44 -62 L 22 -24 A 36 36 0 0 0 -22 -24 Z" fill={RENK.lacivert} opacity={0.85} />
        <circle cx={0} cy={26} r={22} fill={RENK.koyuYesil} opacity={0.85} />
      </g>
    </svg>
  );
};

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFlowers = K(0, "flowers");
  const tBinds = K(1, "binds");
  const tRec = K(1, "receptor");
  const tBenzo = K(1, "benzodiazepine");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={tFlowers} bitis={tBinds} capa={[860, 420]} konum={[1240, 440]} metin="CHAMOMILE FLOWER" renk={RENK.altin} />
        <Parcaciklar t={t} bas={tBinds} kaynak={[820, 480]} hedef={[1480, 720]} adet={20} aralik={0.18} omur={1.8} tohum="api" kavis={-120} />
        <Reseptor t={t} bas={tBinds} x={1560} y={700} />
        <Etiket t={t} bas={tRec} capa={[1560, 780]} konum={[1560, 900]} metin="BRAIN RECEPTOR" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tBenzo} capa={[1500, 650]} konum={[1380, 540]} metin="SEDATIVE TARGET" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "apigenin.")} metin="APIGENIN" x={1020} y={190} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "apigenin.") + 0.3} metin="a compound in chamomile flowers" x={1024} y={270} boyut={34} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "1995")} />
      <Not t={t} bas={tBinds + 0.5} metin="ILLUSTRATIVE" x={1740} y={690} boyut={22} hiza="orta" renk={RENK.gri} agirlik={800} />
    </>
  );
};

export default S32;
