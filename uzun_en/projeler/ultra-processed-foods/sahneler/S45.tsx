// Sahne 45 — Besin ögeleri bağlantının üçte birinden azını açıkladı (şematik, ILLUSTRATIVE).
import React from "react";
import { BaslikBlok, INTER, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = c[1].bas - 0.15;
  const x0 = 1000, w = 840, y0 = 640;
  const tBar = K(0, "measured");
  const dolu = eout(ilerle(t, tBar, 1.3)) * 0.29;
  const aBar = eout(ilerle(t, tBar - 0.2, 0.5));
  const aThird = eout(ilerle(t, K(0, "third"), 0.5));
  const aKalan = eout(ilerle(t, K(1, "open"), 0.5));
  const [sc, al] = pop(t, tBar, 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <BaslikBlok t={t} bas={K(0, "less")} bitis={gec} satirlar={["UNDER A", "THIRD"]} x={1840} y={170} boyut={130} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={K(0, "less") + 0.3} bitis={gec} metin="of the diabetes link was explained by measured nutrients" x={1840} y={430}
        hiza="sag" genislik={780} boyut={36} renk={RENK.lacivert} />
      {/* şematik çubuk: tüm bağlantı ve ölçülen besin payı */}
      <div style={{ position: "absolute", left: x0, top: y0 - 54, opacity: aBar, fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 2, color: RENK.lacivert }}>THE DIABETES LINK</div>
      <div style={{ position: "absolute", left: x0, top: y0, width: w, height: 56, borderRadius: 28, background: "#FCF8EC",
        border: `3px solid ${RENK.murekkep}`, overflow: "hidden", opacity: aBar }}>
        <div style={{ width: `${dolu * 100}%`, height: "100%", background: RENK.altin }} />
        <div style={{ position: "absolute", left: "33.3%", top: 0, bottom: 0, borderLeft: `3px dashed ${RENK.lacivert}`, opacity: aThird }} />
      </div>
      <div style={{ position: "absolute", left: x0 + w / 3 - 30, top: y0 + 66, opacity: aThird, fontFamily: INTER, fontWeight: 800,
        fontSize: 30, color: RENK.lacivert }}>⅓</div>
      <Not t={t} bas={K(0, "fiber,")} metin="MEASURED NUTRIENTS: FIBER · ADDED SUGAR · SODIUM" x={x0} y={y0 + 112} boyut={26} agirlik={800} renk={RENK.altin} genislik={w} />
      <div style={{ position: "absolute", left: x0 + w / 3 + 30, top: y0 + 8, opacity: aKalan, fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 2, color: RENK.mercan }}>OPEN QUESTIONS</div>
      <div style={{ position: "absolute", left: x0, top: y0 + 170, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px", fontFamily: INTER,
        fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin }}>ILLUSTRATIVE</div>
      <Liste t={t} x={x0} y={170} aralik={96} boyut={42} isaret="nokta" genislik={840} ogeler={[
        { bas: K(1, "processing"), metin: "PROCESSING ITSELF", renk: RENK.altin },
        { bas: K(1, "additives,"), metin: "ADDITIVES", renk: RENK.altin },
        { bas: K(1, "things"), metin: "NOT MEASURED YET", renk: RENK.mercan },
      ]} />
    </>
  );
};
export default S45;
