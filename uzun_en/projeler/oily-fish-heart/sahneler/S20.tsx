// Sahne 20 — tabak, kalp ve kapsül kasesi: kapsüller belirgin biçimde önlemedi; AHA önermiyor.
import React from "react";
import { AltSis, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.lacivert,
      whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>{metin}</div>
  );
};

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1740]);
  const tAha = K(0, "American"), son = 12.3;
  const aAha = pop(t, tAha, 0.55);
  const aSol = sol(t, son);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={p} />
      <AltSis a={0.4} />
      <BaslikBlok t={t} bas={K(0, "did not")} bitis={son} satirlar={["NO CLEAR", "PREVENTION"]} x={110} y={150} boyut={84} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "heart attacks")} bitis={son} metin="heart attacks or strokes" x={114} y={345} boyut={32} agirlik={700} />
      <Etiket t={t} bas={K(0, "capsules")} bitis={tAha - 0.2} capa={[1450, 430]} konum={[1640, 310]} metin="FISH OIL CAPSULES" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1250, top: 120, width: 580, transform: `scale(${aAha[0]})`, transformOrigin: "50% 0", opacity: aAha[1] * aSol,
        background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 22, padding: "14px 22px 18px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.altin }}>AMERICAN HEART ASSOCIATION</div>
        <div style={{ fontFamily: "Anton, sans-serif", fontSize: 54, lineHeight: 1.1, color: RENK.lacivert }}>DOESN'T RECOMMEND</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 26, color: RENK.lacivert }}>them to prevent heart disease in the general public</div>
      </div>
      <div style={{ position: "absolute", left: 140, top: 880, display: "flex", gap: 16 }}>
        <Hap2 t={t} bas={K(1, "like fish")} metin="DON'T LIKE FISH?" renk={RENK.mercan} />
        <Hap2 t={t} bas={K(1, "practical")} metin="SEE: PRACTICAL PART" renk={RENK.yesil} />
      </div>
    </>
  );
};

export default S20;
