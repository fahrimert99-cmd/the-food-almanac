// Sahne 30 — Rebello 2014: bir porsiyon yaklaşık 1.6 g beta-glukan; PepsiCo fonu uyarısı.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrial = K(0, "2014 trial"), tPen = K(0, "Pennington");
  const tOld = K(0, "old-fashioned"), tIns = K(0, "instant"), t16 = K(0, "1.6");
  const tFund = K(1, "funded by"), tPep = K(1, "PepsiCo"), tCare = K(1, "treat the details");
  const bitisBas = s.cumleler[1].bas - 0.05;
  const hap = (bas: number, metin: string, renk: string, y: number, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    return a > 0 ? (
      <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={30} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 40, 1760], [20, 90, 1640])}>
        <Etiket t={t} bas={tOld} bitis={bitisBas} capa={[420, 600]} konum={[420, 200]} metin="OLD-FASHIONED" renk={RENK.altin} />
        <Etiket t={t} bas={tIns} bitis={bitisBas} capa={[1050, 560]} konum={[1020, 200]} metin="INSTANT" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} taraf="sag" genislik={640} />
      <KaynakEtiketi t={t} metin="Rebello et al. · Nutr J · 2014" bas={tTrial} />
      {hap(tPen, "PENNINGTON CENTER", RENK.lacivert, 140, bitisBas)}
      <BaslikBlok t={t} bas={t16} bitis={bitisBas} satirlar={["1.6 G", "PER SERVING"]} x={1860} y={300} boyut={96} hiza="sag" />
      <Not t={t} bas={t16 + 0.6} bitis={bitisBas} metin="of beta-glucan" x={1860} y={500} hiza="sag" genislik={520} />
      {/* 2. cümle: finansman uyarısı */}
      <Ikon t={t} bas={tFund} ad="uyari" x={1520} y={420} zemin={RENK.altin} />
      <Baslik t={t} bas={tPep} metin="FUNDED BY PEPSICO" x={1860} y={560} boyut={56} renk={RENK.lacivert} hiza="sag" />
      {hap(tCare, "TREAT WITH CARE", RENK.mercan, 640)}
    </>
  );
};

export default S30;
