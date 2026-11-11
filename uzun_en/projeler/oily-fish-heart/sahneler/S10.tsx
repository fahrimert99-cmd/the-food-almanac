// Sahne 10 — tabakta balık, kapsül değil: iki nesne arasında "≠" ve kısa başlık.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPlate = K(0, "fish on a plate"), tCaps = K(0, "capsules"), tDiff = K(1, "difference");
  const [sc, al] = pop(t, tDiff, 0.6);
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [100, 110, 1720])}>
        <Etiket t={t} bas={tPlate} capa={[600, 560]} konum={[520, 250]} metin="FISH ON A PLATE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tCaps} capa={[1460, 560]} konum={[1230, 190]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 430, top: 790, width: 1060, height: 150, borderRadius: 40, opacity: al,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.95)} 0%, ${kagit(0.9)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tDiff} metin="THE DIFFERENCE MATTERS" x={960} y={870} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 1215, top: 420, width: 150, height: 150, borderRadius: "50%", background: RENK.lacivert,
        transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`,
        boxShadow: "0 10px 26px rgba(48,40,34,0.22)" }}>
        <svg width={142} height={142} viewBox="0 0 142 142" fill="none" stroke="#fff" strokeWidth={11} strokeLinecap="round">
          <line x1={40} y1={56} x2={102} y2={56} /><line x1={40} y1={86} x2={102} y2={86} /><line x1={46} y1={108} x2={96} y2={34} />
        </svg>
      </div>
    </>
  );
};

export default S10;
