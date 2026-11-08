// Sahne 35 — fasulye "bedava yiyecek" değil: yükseliş daha düşük ve yavaş.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMit = K(0, "myth"), tBedava = K(0, "free food"), tSeker = K(0, "blood sugar");
  const tKarb = K(1, "carbohydrate"), tKase = K(1, "big bowl"), tYukselir = K(1, "raises");
  const tDusuk = K(2, "lower");
  const [sc, al] = pop(t, tKarb, 0.5);
  const aK = al * sol(t, tDusuk - 0.1);
  const pE = eout(ilerle(t, tDusuk, 1.8));
  const [sl, al2] = pop(t, tDusuk + 0.1, 0.5), [ss, as2] = pop(t, K(2, "slower"), 0.5);
  // çizim: soldan sağa yavaş ve alçak yükseliş (ILLUSTRATIVE)
  const d = "M 1330 800 C 1470 800, 1500 640, 1600 640 C 1700 640, 1740 770, 1860 790";
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 10, 1880])}>
        <Etiket t={t} bas={tSeker} capa={[1040, 530]} konum={[1450, 640]} metin="BLOOD SUGAR" renk={RENK.altin} bitis={tDusuk - 0.2} />
        <Etiket t={t} bas={tKase} bitis={tDusuk - 0.2} capa={[480, 640]} konum={[480, 900]} metin="BIG BOWL" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tYukselir} kaynak={[720, 520]} hedef={[1040, 480]} adet={16} aralik={0.09} kavis={-120} boyut={7} tohum="p35" />
      </Kamera>
      <Baslik t={t} bas={tMit} metin="ONE MYTH TO RETIRE" x={1290} y={150} boyut={36} renk={RENK.altin} font="inter" aralik={4} />
      <BaslikBlok t={t} bas={tBedava - 0.2} satirlar={["NOT A", "FREE FOOD"]} x={1290} y={265} boyut={120}
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.2} />
      <div style={{ position: "absolute", left: 1590, top: 520, transform: `translate(-50%, -50%) scale(${sc})`, opacity: aK }}>
        <Hap metin="CONTAINS CARBOHYDRATE" renk={RENK.altin} boyut={30} />
      </div>
      {/* ILLUSTRATIVE şema: sayı yok */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={eout(ilerle(t, tDusuk - 0.2, 0.5))}>
          <line x1={1310} y1={815} x2={1870} y2={815} stroke={RENK.murekkep} strokeWidth={3} opacity={0.55} />
          <line x1={1310} y1={815} x2={1310} y2={560} stroke={RENK.murekkep} strokeWidth={3} opacity={0.55} />
          <path d={d} fill="none" stroke={RENK.yesil} strokeWidth={11} strokeLinecap="round" pathLength={1} strokeDasharray={1} strokeDashoffset={1 - pE} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: 1620, top: 590, transform: `translate(-50%, -50%) scale(${sl})`, opacity: al2 }}>
        <Hap metin="LOWER" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1700, top: 860, transform: `translate(-50%, -50%) scale(${ss})`, opacity: as2 }}>
        <Hap metin="SLOWER" renk={RENK.yesil} boyut={30} />
      </div>
      <div style={{ position: "absolute", left: 1330, top: 535, opacity: eout(ilerle(t, tDusuk, 0.5)), fontFamily: INTER, fontWeight: 800, fontSize: 22,
        letterSpacing: 4, color: RENK.gri }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S35;
