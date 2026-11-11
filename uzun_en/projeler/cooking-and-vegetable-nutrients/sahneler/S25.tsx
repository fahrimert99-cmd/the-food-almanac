// Sahne 25 — laboratuvar tezgâhı: antioksidan aktivite arttı, fenolikler aynı kaldı, insan testi değil.
import React from "react";
import { ANTON, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAnti = K(0, "antioxidant");
  const tRose = K(0, "rose");
  const tFen = K(0, "total phenolics");
  const tLab = K(1, "laboratory");
  const tInsan = K(1, "not a test");
  const [sR, aR] = pop(t, tRose, 0.5);
  const [sF, aF] = pop(t, tFen + 0.1, 0.5);
  const [sI, aI] = pop(t, tInsan, 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [160, 60, 1700], [260, 120, 1500])}>
        {/* 1. vuruş: kaplardaki antioksidan aktivite */}
        <Etiket t={t} bas={tAnti} bitis={tFen - 0.2} capa={[560, 640]} konum={[560, 330]} metin="ANTIOXIDANT ACTIVITY" renk={RENK.mercan} />
        {/* yükselen ok */}
        {aR > 0 && (
          <div style={{ position: "absolute", left: 560, top: 392, transform: `translate(-50%, 0) scale(${sR})`, opacity: aR * (t < tFen - 0.2 ? 1 : 0),
            display: "flex", alignItems: "center", gap: 10, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
            padding: "6px 20px 6px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
            <span style={{ transform: "rotate(-90deg)", display: "flex" }}><IkonYol ad="ok" boyut={30} renk={RENK.mercan} kalinlik={7} /></span>
            <span style={{ fontFamily: ANTON, fontSize: 34, color: RENK.mercan, letterSpacing: 1 }}>ROSE WITH HEAT</span>
          </div>
        )}
        {/* 2. vuruş: fenolikler ve flavonoidler aynı */}
        {aF > 0 && (
          <div style={{ position: "absolute", left: 520, top: 190, transform: `scale(${sF})`, transformOrigin: "0 50%", opacity: aF, display: "flex",
            flexDirection: "column", gap: 12 }}>
            <Hap metin="PHENOLICS" renk={RENK.altin} boyut={30} />
            <Hap metin="FLAVONOIDS" renk={RENK.altin} boyut={30} />
            <div style={{ fontFamily: ANTON, fontSize: 64, color: RENK.koyuYesil, lineHeight: 1.1, paddingLeft: 12 }}>ABOUT THE SAME</div>
          </div>
        )}
        {/* 3. vuruş: laboratuvar ölçümü (mikroskop) */}
        <Etiket t={t} bas={tLab} capa={[1330, 380]} konum={[1520, 250]} metin="LAB MEASUREMENT" renk={RENK.altin} />
      </Kamera>
      {/* 4. vuruş: insanlarda test değil */}
      {aI > 0 && (
        <div style={{ position: "absolute", left: 960, top: 840, transform: `translate(-50%, 0) scale(${sI})`, opacity: aI, display: "flex",
          alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 999,
          padding: "10px 34px 10px 14px", boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>
          <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={32} renk="#fff" kalinlik={7} />
          </span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 2, color: RENK.lacivert, opacity: eout(ilerle(t, tInsan + 0.1, 0.4)) }}>NOT A TEST IN PEOPLE</span>
        </div>
      )}
    </>
  );
};

export default S25;
