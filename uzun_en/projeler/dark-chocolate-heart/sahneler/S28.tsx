// Sahne 28 — sınır: tansiyon umut verici işaret, kanıt değil
import React from "react";
import { BaslikBlok, Etiket, Hap, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLim = K(0, "limit."), tCount = K(1, "count"), tHeart = K(1, "heart"), tStroke = K(1, "strokes"), tHope = K(2, "hopeful"), tNot = K(2, "not");
  const [s1, a1] = pop(t, tLim - 0.3, 0.5);
  const [s2, a2] = pop(t, tHeart, 0.5), [s3, a3] = pop(t, tStroke, 0.5);
  const f = sol(t, tHope - 0.3, 0.4);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <div style={{ position: "absolute", right: 60, top: 150, opacity: a1 * f, transform: `scale(${s1})`, transformOrigin: "100% 50%",
        fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 10, color: RENK.altin }}>THE LIMIT</div>
      <Etiket t={t} bas={tCount} bitis={tHope - 0.3} capa={[360, 190]} konum={[900, 150]} metin="NOT COUNTED" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1500, top: 380, transform: `translate(-50%,-50%) scale(${s2})`, opacity: a2 * f }}>
        <Hap metin="HEART ATTACKS" renk={RENK.mercan} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 1500, top: 470, transform: `translate(-50%,-50%) scale(${s3})`, opacity: a3 * f }}>
        <Hap metin="STROKES" renk={RENK.mercan} boyut={34} />
      </div>
      <BaslikBlok t={t} bas={tHope} satirlar={["A HOPEFUL SIGN,"]} x={1860} y={400} boyut={100} hiza="sag" renkler={[RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tNot} satirlar={["NOT PROOF"]} x={1860} y={520} boyut={120} hiza="sag" renkler={[RENK.mercan]} />
    </>
  );
};

export default S28;
