// Sahne 49 — Madde 3: adil, sınırlı deneme. Sağda şematik süre çubukları (4–12 hafta / 2–3 ay), sonda defter etiketleri.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Süre çubukları (ekran koordinatı): 13 hafta ≈ 3 ay ölçeği, şematik
const X0 = 1130, W = 700, HF = 13;
const hx = (h: number) => X0 + (W * h) / HF;
const BIT = 9.4;

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 40, 1700], [30, 60, 1600]);
  const tThree = K(0, "three");
  const tFair = K(1, "fair");
  const tTrials = K(2, "trials");
  const tFed = K(2, "federal");
  const tNote = K(3, "pain");
  const tCheck = K(3, "check");
  const [sb, ab] = pop(t, tThree, 0.55);
  const p1 = eout(ilerle(t, tTrials, 0.9));
  const p2 = eout(ilerle(t, tFed + 1.0, 0.9));
  const a1 = eout(ilerle(t, tTrials - 0.1, 0.4)) * sol(t, BIT);
  const a2 = eout(ilerle(t, tFed, 0.4)) * sol(t, BIT);
  const yazi = (st: React.CSSProperties): React.CSSProperties => ({ position: "absolute", fontFamily: INTER, color: RENK.lacivert, ...st });
  return (
    <>
      <Kamera gorsel="tam/49" pencere={pen}>
        <Etiket t={t} bas={tNote} capa={[690, 390]} konum={[1010, 440]} metin="NOTE YOUR PAIN" renk={RENK.altin} boyut={34} />
        <Etiket t={t} bas={tCheck} capa={[560, 700]} konum={[1010, 700]} metin="AFTER A MONTH OR TWO" renk={RENK.yesil} boyut={34} />
      </Kamera>
      <div style={{ position: "absolute", left: 70, top: 90, width: 120, height: 120, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 84, opacity: ab, transform: `scale(${sb})`,
        border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 24px rgba(48,40,34,0.22)" }}>3</div>
      <BaslikBlok t={t} bas={tFair} satirlar={["A FAIR", "TEST"]} x={1860} y={150} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* şematik süre çubukları */}
      <div style={{ opacity: a1 }}>
        <div style={yazi({ left: X0, top: 392, fontWeight: 800, fontSize: 30, letterSpacing: 2 })}>TRIALS</div>
        <div style={{ position: "absolute", left: hx(4), top: 440, width: (hx(12) - hx(4)) * p1, height: 40, borderRadius: 12, background: RENK.yesil }} />
        <div style={yazi({ left: hx(4), top: 490, fontFamily: ANTON, fontSize: 52, color: RENK.yesil, opacity: p1 })}>4–12 WEEKS</div>
      </div>
      <div style={{ opacity: a2 }}>
        <div style={yazi({ left: X0, top: 566, fontWeight: 800, fontSize: 30, letterSpacing: 2 })}>LIKELY SAFE · NCCIH</div>
        <div style={{ position: "absolute", left: X0, top: 612, width: W * p2, height: 40, borderRadius: 12,
          background: `linear-gradient(to right, ${RENK.altin} 0%, ${RENK.altin} 66%, rgba(184,134,43,0.35) 100%)` }} />
        <div style={yazi({ left: X0, top: 662, fontFamily: ANTON, fontSize: 52, color: RENK.altin, opacity: p2 })}>UP TO 2–3 MONTHS</div>
      </div>
      <div style={{ position: "absolute", left: X0, top: 410 + 360, width: W, height: 3, background: RENK.lacivert, opacity: 0.0 }} />
      <div style={yazi({ left: X0, top: 750, fontWeight: 700, fontSize: 22, letterSpacing: 3, color: RENK.gri, opacity: a1 })}>ILLUSTRATIVE · NOT TO SCALE</div>
    </>
  );
};

export default S49;
