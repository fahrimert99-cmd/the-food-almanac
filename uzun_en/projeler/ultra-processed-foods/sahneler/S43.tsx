// Sahne 43 — Yeme hızı ve tokluk: sol nesneler, sağda yarışan iki çubuk (ILLUSTRATIVE).
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, RENK, SP, eout, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCal = K(1, "calories"), tFul = K(1, "fullness");
  const bar = (bas: number, sure: number) => einout(ilerle(t, bas, sure));
  const x0 = 1060, w = 780;
  const sat = [
    { ad: "CALORIES TAKEN IN", bas: tCal - 0.1, p: bar(tCal, 1.0), renk: RENK.mercan, y: 560 },
    { ad: "FULLNESS SIGNALS", bas: tFul - 0.1, p: bar(tFul, 1.9), renk: RENK.yesil, y: 720 },
  ];
  const [sc, al] = pop(t, tCal, 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 50, 1800])}>
        <Etiket t={t} bas={K(0, "eating")} bitis={K(1, "Soft,") - 0.1} capa={[467, 560]} konum={[800, 420]} metin="EATING SPEED" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Soft,")} capa={[200, 570]} konum={[330, 420]} metin="SOFT FOODS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "eating")} satirlar={["SPEED", "AND FULLNESS"]} x={1840} y={170} boyut={118} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {sat.map((b) => {
        const a = eout(ilerle(t, b.bas, 0.5));
        return (
          <div key={b.ad} style={{ position: "absolute", left: x0, top: b.y - 56, width: w, opacity: a }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: b.renk, marginBottom: 10 }}>{b.ad}</div>
            <div style={{ height: 40, borderRadius: 20, background: "#FCF8EC", border: `3px solid ${RENK.murekkep}`, overflow: "hidden" }}>
              <div style={{ width: `${b.p * 100}%`, height: "100%", background: b.renk }} />
            </div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: x0, top: 830, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px", fontFamily: INTER,
        fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin }}>ILLUSTRATIVE</div>
    </>
  );
};
export default S43;
