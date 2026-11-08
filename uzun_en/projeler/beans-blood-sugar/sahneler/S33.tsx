// Sahne 33 — fasulye düşük glisemik düzenin parçasıydı: payı ayırmak mümkün değil.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, IkonYol, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Tabaktaki bölmeler (görsel koordinatı): fasulye ve geri kalanlar
const FASULYE = { cx: 790, cy: 675, rx: 255, ry: 145, aci: 0 };
const DIGER = [
  { cx: 740, cy: 385, rx: 235, ry: 140, aci: -8 },
  { cx: 1200, cy: 385, rx: 235, ry: 150, aci: 8 },
  { cx: 1235, cy: 680, rx: 185, ry: 145, aci: 0 },
];

const Halka: React.FC<{ t: number; bas: number; bitis?: number; e: typeof FASULYE; renk: string }> = ({ t, bas, bitis = 1e9, e, renk }) => {
  const p = eout(ilerle(t, bas, 0.7)), a = sol(t, bitis);
  if (p <= 0 || a <= 0) return null;
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
      <ellipse cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} transform={`rotate(${e.aci} ${e.cx} ${e.cy})`} fill="none" stroke={renk} strokeWidth={6}
        strokeDasharray="22 14" strokeLinecap="round" opacity={0.9 * p} />
    </svg>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFasulye = K(0, "Beans"), tGlisemik = K(0, "low glycemic");
  const tAyir = K(1, "separate"), tGeri = K(1, "the rest");
  const tKredi = K(2, "credit");
  const pP = eout(ilerle(t, tKredi - 0.3, 0.7));
  const [sq, aq] = pop(t, tKredi + 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={tFasulye} bitis={tKredi} capa={[800, 700]} konum={[250, 800]} metin="BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={tGlisemik} bitis={tAyir} capa={[960, 175]} konum={[960, 66]} metin="LOW GLYCEMIC DIET" renk={RENK.koyuYesil} />
        <Halka t={t} bas={tAyir} e={FASULYE} renk={RENK.altin} />
        {DIGER.map((e, i) => <Halka key={i} t={t} bas={tGeri + i * 0.15} e={e} renk={RENK.koyuYesil} />)}
        <Etiket t={t} bas={tGeri} bitis={tKredi} capa={[1450, 385]} konum={[1640, 300]} metin="THE REST" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={520} />
      <BaslikBlok t={t} bas={tKredi} satirlar={["HOW MUCH", "CREDIT?"]} x={1690} y={420} boyut={92} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.2} />
      <div style={{ position: "absolute", left: 1690, top: 700, transform: `translate(-50%, -50%) scale(${sq})`, opacity: aq }}>
        <IkonYol ad="soru" boyut={150} renk={RENK.altin} />
      </div>
    </>
  );
};

export default S33;
