// Sahne 40 — Sınırlar: küçük çalışmalar (birkaç düzine kişi), tek öğün, laboratuvar; yıllar değil.
// Düzen: üst boşlukta başlık, nesnelere etiketler, kâğıt yığını üstünde rozet, sonda zaman çizgisi.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Üst kâğıttaki sahte yazı satırları (görsel koordinatı): kâğıt rengiyle silinir.
const YAMA = "1208,713 1300,687 1340,667 1400,681 1500,688 1598,690 1592,712 1500,739 1440,749 1300,738 1208,730";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pencere = kameraYolu(t, s.sure, [30, 20, 1860], [110, 60, 1720]);
  const tSon1 = c[2].bas - 0.15;
  const tKucuk = K(1, "small"), tDuzine = K(1, "few dozen");
  const tOgun = K(2, "single meal"), tLab = K(2, "lab"), tDegil = K(2, "not years");
  // rozet: "often a few dozen people or fewer"
  const [sr, ar0] = pop(t, tDuzine - 0.1, 0.6);
  const ar = ar0 * sol(t, tSon1);
  // zaman çizgisi (görsel koordinatı)
  const zx0 = 880, zx1 = 1745, zy = 600;
  const pCizgi = eout(ilerle(t, tDegil, 1.1));
  const [sn, an] = pop(t, tDegil - 0.05, 0.5);
  const pYazi = eout(ilerle(t, tDegil, 0.5));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={pencere}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <defs>
            <filter id="yama40" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="2.2" /></filter>
          </defs>
          <polygon points={YAMA} fill="rgb(253,251,224)" filter="url(#yama40)" />
        </svg>
        {/* 2. cümle: kâğıt yığını = çalışmalar */}
        <Etiket t={t} bas={tKucuk - 0.15} bitis={tSon1} capa={[1400, 712]} konum={[1400, 560]} metin="SMALL STUDIES" renk={RENK.mercan} />
        {/* 3. cümle: tek öğün, laboratuvar */}
        <Etiket t={t} bas={tOgun - 0.1} capa={[640, 818]} konum={[680, 600]} metin="A SINGLE MEAL" renk={RENK.altin} />
        <Etiket t={t} bas={tLab - 0.1} capa={[272, 720]} konum={[440, 462]} metin="IN A LAB" renk={RENK.lacivert} />
        {/* yıllar sürecek gerçek hayat: uzun, test edilmemiş zaman çizgisi */}
        {pCizgi > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={zx0} y1={zy} x2={zx0 + (zx1 - zx0) * pCizgi} y2={zy} stroke={RENK.kagitAcik} strokeWidth={14} strokeLinecap="round" />
            <line x1={zx0} y1={zy} x2={zx0 + (zx1 - zx0) * pCizgi} y2={zy} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="16 12" opacity={0.7} />
            {Array.from({ length: 11 }, (_, k) => zx0 + 70 + k * 74).filter((x) => x < zx0 + (zx1 - zx0) * pCizgi - 10).map((x) => (
              <line key={x} x1={x} y1={zy - 14} x2={x} y2={zy + 14} stroke={RENK.lacivert} strokeWidth={4} opacity={0.55} />
            ))}
            <polygon points={`${zx0 + (zx1 - zx0) * pCizgi + 26},${zy} ${zx0 + (zx1 - zx0) * pCizgi},${zy - 16} ${zx0 + (zx1 - zx0) * pCizgi},${zy + 16}`}
              fill={RENK.lacivert} opacity={0.8} />
            <circle cx={zx0} cy={zy} r={15 * sn} fill={RENK.altin} stroke={RENK.kagitAcik} strokeWidth={4} opacity={an} />
          </svg>
        )}
        <div style={{ position: "absolute", left: (zx0 + zx1) / 2 + 10, top: zy - 96, opacity: pYazi, whiteSpace: "nowrap",
          transform: `translate(-50%, ${(1 - pYazi) * 14}px)`, fontFamily: ANTON, fontSize: 56, lineHeight: "70px", color: RENK.lacivert }}>
          <span style={{ color: RENK.mercan }}>NOT</span> YEARS OF REAL LIFE
        </div>
      </Kamera>
      {/* 1. cümle: başlık (üstteki boş duvar) */}
      <Baslik t={t} bas={K(0, "be clear")} metin="TO BE CLEAR ABOUT" x={112} y={138} boyut={28} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(0, "the limits") - 0.05} metin="THE LIMITS" x={104} y={238} boyut={128} renk={RENK.lacivert} />
      {/* rozet: birkaç düzine kişi */}
      {ar > 0 && (
        <div style={{ position: "absolute", left: 1390, top: 196, width: 560, transform: `translate(-50%, 0) scale(${sr})`, transformOrigin: "50% 0",
          opacity: ar, padding: "12px 18px 16px", textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`,
          borderRadius: 26, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 5, color: RENK.altin }}>OFTEN</div>
          <div style={{ fontFamily: ANTON, fontSize: 100, lineHeight: 1.05, color: RENK.altin, whiteSpace: "nowrap" }}>A FEW DOZEN</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>people or fewer</div>
        </div>
      )}
    </>
  );
};

export default S40;
