// Sahne 43 — dürüst özet: solda kahvaltı tabağı (kahraman), sağda başlık ve üç madde.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, ANTON, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; no: number; renk: string; ana: string; alt?: string; tAlt?: number }> = ({
  t, bas, y, no, renk, ana, alt, tAlt = 0,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const [sa, aa] = pop(t, tAlt, 0.45);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1000, top: y, width: 860, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 24, padding: "14px 24px", display: "flex", gap: 20,
      alignItems: "center", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 52, height: 52, borderRadius: "50%", background: renk, color: "#fff", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: ANTON, fontSize: 30, flex: "none" }}>{no}</span>
      <div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>{ana}</div>
        {alt && <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 26, color: renk, opacity: aa, transform: `scale(${sa})`, transformOrigin: "0% 50%" }}>{alt}</div>}
      </div>
    </div>
  );
};

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), m = s.meta.baslik!;
  const pencere = kameraYolu(t, s.sure, [0, 40, 1900], [30, 90, 1730]);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={pencere}>
        <Etiket t={t} bas={K(2, "blood")} bitis={K(3, "and")} capa={[245, 330]} konum={[600, 190]} metin="BLOOD SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={K(3, "protein")} capa={[540, 760]} konum={[640, 400]} metin="PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "honest")} satirlar={m.satirlar} x={1000} y={190} boyut={96} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Madde t={t} bas={K(1, "weight")} y={440} no={1} renk={RENK.yesil} ana="NOT A WEIGHT DISASTER" />
      <Madde t={t} bas={K(2, "bigger")} y={590} no={2} renk={RENK.altin} ana="BIGGER BLOOD SUGAR SWING LATER" alt="IF YOU HAVE TYPE 2 DIABETES" tAlt={K(2, "type")} />
      <Madde t={t} bas={K(3, "total")} y={770} no={3} renk={RENK.koyuYesil} ana="TOTAL PROTEIN MATTERS MOST" alt="FOR MUSCLE" tAlt={K(3, "muscle")} />
    </>
  );
};

export default S43;
