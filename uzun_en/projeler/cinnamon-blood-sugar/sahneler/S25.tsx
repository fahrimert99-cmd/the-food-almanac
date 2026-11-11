// Sahne 25 — Neden 1: örneklem büyüklüğü. Dağınık tarçın çubukları; küçük çalışmalar geniş sallanır, 2013 derlemesinde dağılım yüksek.
import React from "react";
import { AltSis, Baslik, Etiket, INTER, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFew = K(1, "few dozen"), tSwing = K(1, "swing"), tIn = K(2, "In");
  const p = eout(ilerle(t, tSwing, 0.8));
  const aOk = t < tSwing ? 0 : sol(t, tIn);
  const [sc, al] = pop(t, tSwing + 0.5, 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1720])} />
      <AltSis a={0.4} />
      <Baslik t={t} bas={K(0, "size") - 0.4} metin="REASON 1" x={100} y={120} boyut={36} renk={RENK.altin} font="inter" agirlik={800} aralik={6} />
      <Baslik t={t} bas={K(0, "size") - 0.25} metin="SAMPLE SIZE" x={96} y={190} boyut={96} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tFew} bitis={tIn - 0.1} capa={[1700, 560]} konum={[1500, 190]} metin="FEW DOZEN PEOPLE" renk={RENK.lacivert} />
      {/* küçük çalışmalar geniş sallanır: çift başlı ok */}
      {aOk > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aOk }}>
          <line x1={960 - 760 * p} y1={310} x2={960 + 760 * p} y2={310} stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" strokeDasharray="14 10" />
          <path d={`M ${960 - 760 * p + 22} 292 L ${960 - 760 * p} 310 L ${960 - 760 * p + 22} 328`} fill="none" stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
          <path d={`M ${960 + 760 * p - 22} 292 L ${960 + 760 * p} 310 L ${960 + 760 * p - 22} 328`} fill="none" stroke={RENK.mercan} strokeWidth={6} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
      {aOk > 0 && al > 0 && (
        <div style={{ position: "absolute", left: 960, top: 310, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * aOk, whiteSpace: "nowrap",
          background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800,
          fontSize: 28, letterSpacing: 2, color: RENK.mercan, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>SMALL TRIALS SWING WIDELY</div>
      )}
      <VurguRozet t={t} bas={K(2, "67")} vurgu="67–95%" not="SCATTER BETWEEN TRIALS" x={1450} y={120} renk={RENK.mercan} genislik={470} boyut={96} />
    </>
  );
};

export default S25;
