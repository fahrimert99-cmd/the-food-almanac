// Sahne 31 — serbest formdaki B12: solda zenginleştirilmiş kase, sağda "protein bağı yok → asit gerekmez" şeması.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFort = K(0, "fortified"), tFree = K(0, "free"), tProt = K(1, "protein"), tSo = K(1, "so"), tAsit = K(1, "doesn't");
  const [sB, aB] = pop(t, tFree, 0.55);
  const [sP, aP] = pop(t, tProt, 0.5);
  const aCizgi = Math.min(1, Math.max(0, (t - tProt - 0.2) / 0.5));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1840])}>
        <Etiket t={t} bas={tFort} bitis={tProt - 0.3} capa={[330, 660]} konum={[760, 420]} metin="FORTIFIED FOODS" renk={RENK.altin} />
      </Kamera>
      {/* şema: serbest B12 | yemek proteini; aradaki bağ yok */}
      <div style={{ position: "absolute", left: 1140, top: 640, transform: `translate(-50%, -50%) scale(${sB})`, opacity: aB, width: 150, height: 150,
        borderRadius: "50%", background: RENK.altin, border: `5px solid ${RENK.kagitAcik}`, boxShadow: "0 10px 26px rgba(48,40,34,0.22)",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, color: "#fff" }}>B12</div>
      <Not t={t} bas={tFree + 0.2} metin="FREE FORM" x={1140} y={740} hiza="orta" boyut={34} renk={RENK.altin} agirlik={800} />
      <div style={{ position: "absolute", left: 1620, top: 640, transform: `translate(-50%, -50%) scale(${sP})`, opacity: aP, padding: "30px 34px",
        borderRadius: 24, background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>FOOD PROTEIN</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aCizgi }}>
        <line x1={1240} y1={640} x2={1240 + 120 * aCizgi} y2={640} stroke={RENK.lacivert} strokeWidth={5} strokeDasharray="12 10" />
      </svg>
      <Ikon t={t} bas={tSo} ad="carpi" x={1360} y={640} zemin={RENK.mercan} boyut={84} />
      <BaslikBlok t={t} bas={tAsit} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={210} boyut={116} hiza="sag" />
    </>
  );
};

export default S31;
