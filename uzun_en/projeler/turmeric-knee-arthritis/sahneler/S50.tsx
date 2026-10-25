// Sahne 50 — Dört: yüksek emilimli formüllere dikkat (kalabalık raf)
import React from "react";
import { Baslik, Etiket, Hap, ANTON, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDort = K(0, "Four"), tDikkat = K(1, "careful");
  const tSon = K(3, "stronger-sounding");
  const [sc, al] = pop(t, tDort, 0.5);
  const [sc2, al2] = pop(t, K(3, "not been"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 0, 1800])}>
        <Etiket t={t} bas={K(1, "high-absorption")} bitis={6.1} capa={[1010, 520]} konum={[1420, 880]} metin="HIGH-ABSORPTION" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "several")} bitis={6.1} capa={[1380, 330]} konum={[1250, 88]} metin="NOT SEVERAL AT ONCE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "liver")} bitis={tSon - 0.1} capa={[1000, 440]} konum={[1420, 880]} metin="LIVER DAMAGE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "highly")} bitis={tSon - 0.1} capa={[1060, 640]} konum={[600, 880]} metin="HIGHLY BIOAVAILABLE" renk={RENK.altin} />
      </Kamera>
      {/* üst bant: numara + başlık */}
      <div style={{ position: "absolute", left: 56, top: 52, width: 76, height: 76, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52,
        transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>4</div>
      <Baslik t={t} bas={tDikkat} bitis={tSon - 0.1} metin="BE CAREFUL" x={156} y={92} boyut={64} renk={RENK.lacivert} />
      {/* kapanış: etiket iddiası */}
      <div style={{ position: "absolute", left: 960, top: 92, transform: `translate(-50%, -50%) scale(${sc2})`, opacity: al2 }}>
        <Hap metin="STRONGER LABEL: NOT SHOWN TO BE BETTER" renk={RENK.lacivert} boyut={34} />
      </div>
    </>
  );
};

export default S50;
