// Sahne 7 — glukoz bağırsak duvarından kana geçer; kan şekeri yükselir.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, IkonYol, Kamera, Parcaciklar, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani,
  pop, sol } from "../kutuphane";

// Görsel (tam/07): solda ince bağırsak kesiti (halka), ortada lümen ve büyük glukoz küresi,
// sağa doğru uzanan kanal ve pembe damar ucu (x 1490–1800, y 480–615). Sağ üst/alt boş kâğıt. Kusur yok.
const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 30, 1860], [170, 110, 1700]);
  const tGlu = K(0, "glucose"), tDuvar = K(0, "small intestine"), tKan = K(0, "into your bloodstream");
  const tBS = K(1, "blood sugar"), tArt = K(1, "rises");
  const etiketSon = c[1].bas - 0.35;
  // damar vurgusu: kesikli elips çizilir
  const pDamar = eout(ilerle(t, K(0, "bloodstream"), 0.8));
  // mini eğri (ekran koordinatı): düz başlar, yükselir
  const pEgri = eout(ilerle(t, tBS + 0.05, 1.1));
  const [so, ao] = pop(t, tArt, 0.5);
  const aMini = eout(ilerle(t, tBS - 0.15, 0.5));
  const yol = "M 1330 880 C 1420 880, 1470 878, 1530 850 C 1610 812, 1660 742, 1770 700";
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pen}>
        {/* glukoz kanaldan damara akar */}
        <Parcaciklar t={t} bas={K(0, "passes")} kaynak={[640, 548]} hedef={[1640, 548]} adet={62} aralik={0.095} omur={1.9}
          yayilma={50} kavis={0} hedefYayilma={46} boyut={7} tohum="s07" />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          {pDamar > 0 && (
            <ellipse cx={1630} cy={548} rx={176} ry={94} fill="none" stroke={RENK.altin} strokeWidth={5} strokeDasharray="16 12"
              pathLength={1000} strokeDashoffset={1000 * (1 - pDamar)} opacity={0.95} />
          )}
        </svg>
        <Etiket t={t} bas={tGlu} bitis={etiketSon} capa={[595, 548]} konum={[1010, 360]} metin="GLUCOSE" renk={RENK.altin} />
        <Etiket t={t} bas={tDuvar - 0.05} bitis={etiketSon} capa={[815, 812]} konum={[1150, 860]} metin="SMALL INTESTINE WALL"
          renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tKan} satirlar={["INTO THE", "BLOODSTREAM"]} x={1860} y={200} boyut={96} hiza="sag" adim={0.2} />
      {/* 2. cümle: kan şekeri yükselir (sağ alt boş alan) */}
      {aMini > 0 && (
        <>
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aMini }}>
            <polyline points="1310,660 1310,900 1840,900" fill="none" stroke={RENK.murekkep} strokeWidth={4} strokeOpacity={0.7} />
            <line x1={1310} y1={880} x2={1840} y2={880} stroke="#787882" strokeOpacity={0.7} strokeWidth={2.5} strokeDasharray="10 10" />
            <path d={yol} fill="none" stroke={RENK.mercan} strokeWidth={12} strokeLinecap="round" pathLength={1}
              strokeDasharray={1} strokeDashoffset={1 - pEgri} />
          </svg>
          <div style={{ position: "absolute", left: 1336, top: 640, opacity: aMini, fontFamily: INTER, fontWeight: 800, fontSize: 32,
            letterSpacing: 2, color: RENK.lacivert }}>BLOOD SUGAR</div>
          <div style={{ position: "absolute", right: 80, top: 912, opacity: aMini, fontFamily: INTER, fontWeight: 800, fontSize: 17,
            letterSpacing: 2, color: RENK.altin, border: `2.5px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999,
            padding: "3px 12px" }}>ILLUSTRATIVE</div>
        </>
      )}
      {ao > 0 && (
        <div style={{ position: "absolute", left: 1484, top: 690, width: 72, height: 72, borderRadius: "50%",
          background: RENK.mercan, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center", transform: `scale(${so})`, opacity: ao * sol(t, 1e9) }}>
          <div style={{ transform: "rotate(-90deg)", display: "flex" }}><IkonYol ad="ok" boyut={44} renk="#fff" /></div>
        </div>
      )}
      <div style={{ position: "absolute", left: 1334, top: 686, opacity: ao, transform: `translateY(${(1 - ao) * 10}px)`,
        fontFamily: ANTON, fontSize: 64, lineHeight: 1, color: RENK.mercan }}>RISES</div>
    </>
  );
};

export default S07;
