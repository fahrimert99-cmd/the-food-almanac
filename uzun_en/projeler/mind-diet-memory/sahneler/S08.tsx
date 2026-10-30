// Sahne 8 — sınırlanacak besinler: sağda 5 maddelik liste, nesnelerde numara noktaları; sonra şarap notu.
import React from "react";
import { BaslikBlok, Ikon, INTER, Kamera, Liste, Not, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Nesne üstü numara noktası (görsel koordinatı)
const Nokta: React.FC<{ t: number; bas: number; bitis: number; x: number; y: number; n: number }> = ({ t, bas, bitis, x, y, n }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - 30, top: y - 30, width: 60, height: 60, borderRadius: "50%", background: RENK.mercan,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 36,
      transform: `scale(${sc})`, opacity: a, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 20px rgba(48,40,34,0.25)" }}>{n}</div>
  );
};

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "limit list");
  const cik = K(1, "The original") - 0.15;
  const tPuan = K(1, "one point"), tSarap = K(1, "glass of wine"), tYok = K(2, "Nobody");
  const oge = (ifade: string, metin: string) => ({ bas: K(0, ifade), metin, renk: RENK.mercan, bitis: cik });
  const pSarap = eout(ilerle(t, tPuan, 0.5));
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [60, 80, 1780])}>
        <Nokta t={t} bas={K(0, "butter")} bitis={cik} x={450} y={700} n={2} />
        <Nokta t={t} bas={K(0, "cheese")} bitis={cik} x={760} y={650} n={3} />
        <Nokta t={t} bas={K(0, "pastries")} bitis={cik} x={450} y={520} n={4} />
        <Nokta t={t} bas={K(0, "fried")} bitis={cik} x={910} y={430} n={5} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas - 0.1} satirlar={["FOODS", "TO LIMIT"]} x={1250} y={170} boyut={92} bitis={cik} renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} x={1250} y={380} aralik={96} boyut={34} genislik={620} ogeler={[
        oge("red meat", "RED MEAT"), oge("butter", "BUTTER, MARGARINE"), oge("cheese,", "CHEESE"),
        oge("pastries", "PASTRIES, SWEETS"), oge("fried", "FRIED, FAST FOOD"),
      ]} />
      {/* şarap notu */}
      {pSarap > 0 && (
        <div style={{ position: "absolute", left: 1250, top: 250, width: 600, opacity: pSarap, transform: `translateY(${(1 - pSarap) * 14}px)` }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 5, color: RENK.altin }}>ORIGINAL SCORE</div>
          <div style={{ marginTop: 10, background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26, padding: "10px 24px 16px",
            boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
            <div style={{ fontFamily: ANTON, fontSize: 96, lineHeight: 1.05, color: RENK.altin }}>+1 POINT</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, color: RENK.lacivert }}>FOR A DAILY GLASS OF WINE</div>
          </div>
        </div>
      )}
      <Ikon t={t} bas={tYok} ad="carpi" x={1330} y={640} zemin={RENK.mercan} />
      <Not t={t} bas={tYok + 0.15} x={1400} y={600} boyut={36} agirlik={800} genislik={470} metin="NO NEED TO START DRINKING" />
    </>
  );
};

export default S08;
