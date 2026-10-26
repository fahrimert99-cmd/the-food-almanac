// Sahne 47 — alışkanlık 1: etiketi oku; Nutrition Facts panelinde B12.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHab = K(0, "habits");
  const tLook = K(1, "look at");
  const tCer = K(2, "breakfast cereals");
  const tPack = K(2, "packaged foods");
  const tFort = K(2, "fortified");
  const tNf = K(2, "Nutrition Facts");
  const tB12 = K(2, "vitamin B12");
  const [sh, ah] = pop(t, tHab, 0.5);
  const [sf, af] = pop(t, tFort, 0.5);
  const [sc, al] = pop(t, tNf, 0.6);
  const pb = eout(ilerle(t, tB12, 0.5));
  const gizle = 1 - eout(ilerle(t, tNf - 0.1, 0.3));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <div style={{ position: "absolute", left: 1320, top: 120, transform: `translate(-50%,0) scale(${sh})`, opacity: ah }}>
        <Hap metin="HABIT 1" renk={RENK.altin} boyut={30} />
      </div>
      <BaslikBlok t={t} bas={tLook} satirlar={["READ THE", "LABEL"]} x={1320} y={290} boyut={120} hiza="orta" />
      <Etiket t={t} bas={tCer} capa={[200, 540]} konum={[760, 470]} metin="CEREAL" renk={RENK.mercan} />
      <Etiket t={t} bas={tPack} capa={[480, 720]} konum={[860, 780]} metin="PACKAGED FOODS" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1320, top: 520, transform: `translate(-50%,0) scale(${sf})`, opacity: af * gizle }}>
        <Hap metin="FORTIFIED" renk={RENK.yesil} boyut={44} />
      </div>
      {/* Nutrition Facts paneli — çizim; sayı yok */}
      <div style={{ position: "absolute", left: 1090, top: 500, width: 460, transform: `scale(${sc})`, transformOrigin: "50% 0", opacity: al,
        background: "#FCF8EC", border: `5px solid ${RENK.murekkep}`, padding: "18px 24px 22px", boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
        <div style={{ fontFamily: ANTON, fontSize: 54, color: RENK.murekkep, borderBottom: `10px solid ${RENK.murekkep}`, paddingBottom: 6 }}>NUTRITION FACTS</div>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{ height: 14, margin: "20px 0", background: RENK.murekkep, opacity: 0.12, width: `${90 - i * 14}%`, borderRadius: 7 }} />
        ))}
        <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 14px", marginTop: 8, borderRadius: 14,
          background: `rgba(86,138,70,${0.18 * pb})`, border: `3px solid ${pb > 0 ? RENK.yesil : "transparent"}` }}>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.murekkep, flex: 1 }}>VITAMIN B12</div>
          <div style={{ opacity: pb }}><IkonYol ad="onay" boyut={44} renk={RENK.yesil} /></div>
        </div>
        <div style={{ fontFamily: INTER, fontWeight: 700, fontSize: 18, letterSpacing: 3, color: RENK.gri, marginTop: 12, textAlign: "right" }}>ILLUSTRATIVE</div>
      </div>
    </>
  );
};

export default S47;
