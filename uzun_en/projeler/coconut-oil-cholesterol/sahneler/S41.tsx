// Sahne 41 — Sızma / rafine edilmemiş hindistancevizi yağı: tek küçük deney, yetmez.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Liste, RENK, SP, VurguRozet, ANTON, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKhaw = K(1, "Khaw"), tLdl = K(1, "LDL"), tOne = K(2, "one small"), tNot = K(2, "isn't");
  const [sc, al] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1560], [80, 90, 1420])}>
        <Etiket t={t} bas={K(0, "unrefined")} bitis={tKhaw + 1} capa={[460, 470]} konum={[780, 300]} metin="UNREFINED" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={3.3} satirlar={["EXTRA VIRGIN", "THE SAME?"]} x={1860} y={230} boyut={100} hiza="sag" />
      <VurguRozet t={t} bas={tLdl} bitis={tOne - 0.1} vurgu="≈ OLIVE OIL" not="LDL in the Khaw trial" x={1400} y={300} boyut={78} genislik={620} renk={RENK.koyuYesil} />
      <Liste t={t} x={1000} y={300} aralik={104} boyut={38} isaret="nokta" genislik={820}
        ogeler={[
          { bas: tOne, metin: "ONE SMALL TRIAL", renk: RENK.altin },
          { bas: K(2, "four-week"), metin: "FOUR WEEKS", renk: RENK.altin },
          { bas: K(2, "healthy"), metin: "HEALTHY PEOPLE", renk: RENK.altin },
        ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1000, top: 660, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%",
          display: "flex", alignItems: "center", gap: 16, background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 999,
          padding: "12px 34px 12px 18px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <IkonYol ad="uyari" boyut={46} renk={RENK.mercan} />
          <span style={{ fontFamily: ANTON, fontSize: 52, color: RENK.mercan, whiteSpace: "nowrap" }}>NOT ENOUGH</span>
          <span style={{ fontFamily: INTER, fontWeight: 700, fontSize: 26, color: RENK.lacivert, whiteSpace: "nowrap" }}>for a safe daily choice</span>
        </div>
      )}
    </>
  );
};

export default S41;
