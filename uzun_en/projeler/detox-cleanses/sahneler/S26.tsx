// Sahne 26 — gözlemsel bağ; bütün meyveler daha düşük riskle ilişkili (26/12/7%).
import React from "react";
import { Etiket, INTER, ANTON, Kamera, Baslik, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sayı rozeti: etiketin altında yaylanarak belirir
const Rozet: React.FC<{ t: number; bas: number; x: number; y: number; m: string }> = ({ t, bas, x, y, m }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, background: "#FCF8EC",
      border: `3px solid ${RENK.yesil}`, borderRadius: 16, padding: "0 20px", fontFamily: ANTON, fontSize: 56, lineHeight: 1.25,
      color: RENK.koyuYesil, whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.16)" }}>{m}</div>
  );
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [40, 40, 1840], [130, 90, 1680]);
  const tM = K(1, "Whole");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={cam}>
        <Etiket t={t} bas={K(0, "everyday juice")} bitis={4.8} capa={[1470, 400]} konum={[1720, 300]} metin="EVERYDAY JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "blueberries")} capa={[640, 500]} konum={[400, 170]} metin="BLUEBERRIES" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "grapes")} capa={[800, 410]} konum={[860, 150]} metin="GRAPES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "apples")} capa={[470, 440]} konum={[340, 320]} metin="APPLES" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "observational")} bitis={4.7} metin="OBSERVATIONAL LINK" x={70} y={170} boyut={84} renk={RENK.lacivert} />
      <Rozet t={t} bas={K(1, "26,")} x={410} y={220} m="–26%" />
      <Rozet t={t} bas={K(1, "12,")} x={870} y={200} m="–12%" />
      <Rozet t={t} bas={K(1, "7 percent")} x={340} y={380} m="–7%" />
      <div style={{ position: "absolute", left: 960, top: 880, transform: "translateX(-50%)", opacity: pop(t, K(1, "per three"), 0.5)[1],
        background: "#FCF8EC", border: `3px solid ${RENK.lacivert}`, borderRadius: 999, padding: "8px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, color: RENK.lacivert, whiteSpace: "nowrap" }}>PER 3 SERVINGS A WEEK</div>
    </>
  );
};

export default S26;
