// Sahne 49 — Madde 3: adil, sınırlı deneme. Solda defter/kök, sağda süre rozeti ve ipuçları.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0, 0.55);
  const [s1, a1] = pop(t, K(2, "up to two"), 0.5);
  const [s2, a2] = pop(t, K(3, "check how"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [40, 40, 1840], [100, 70, 1700])}>
        {/* görseldeki dikey kâğıt tonu dikişi (x≈1100) sağ yarıyı tek tonla örterek gizlenir */}
        <div style={{ position: "absolute", left: 960, top: 0, width: 1000, height: 1080,
          background: "linear-gradient(to right, rgba(245,244,239,0) 0px, rgba(245,244,239,1) 110px, rgba(245,244,239,1) 100%)" }} />
        <Etiket t={t} bas={K(3, "pain")} capa={[360, 520]} konum={[1020, 600]} metin="NOTE YOUR PAIN" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 76, top: 64, width: 112, height: 112, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76,
        transform: `scale(${sc})`, opacity: al, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>3</div>
      <BaslikBlok t={t} bas={K(1, "fair")} satirlar={["A FAIR", "TEST"]} x={1860} y={200} boyut={110} hiza="sag" />
      <VurguRozet t={t} bas={K(2, "four")} vurgu="4–12 WEEKS" not="length of the trials" x={1560} y={430} genislik={460} boyut={88} />
      <div style={{ position: "absolute", left: 1560, top: 690, transform: `translate(-50%,0) scale(${s1})`, opacity: a1 }}>
        <Hap metin="UP TO 2–3 MONTHS LIKELY SAFE" renk={RENK.yesil} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1560, top: 790, transform: `translate(-50%,0) scale(${s2})`, opacity: a2 }}>
        <Hap metin="CHECK AFTER A MONTH OR TWO" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S49;
