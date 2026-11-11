// Sahne 22 — 13 yıl sonra: patika görseli solda, sağda başlık, çubuklar ve gri bölge ölçeği.
import React from "react";
import { BaslikBlok, CubukGrafik, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, Baslik } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(0, "13"), tGap = K(0, "gap"), tBut = K(1, "but"), t203 = K(1, "20.3"), t156 = K(1, "15.6");
  const tGray = K(2, "gray"), tLow = K(2, "clearly"), tNorm = K(2, "comfortably");
  const segler = [
    { bas: tLow, ad: "CLEARLY LOW", renk: RENK.mercan },
    { bas: tGray, ad: "BORDERLINE", renk: RENK.altin },
    { bas: tNorm, ad: "COMFORTABLY NORMAL", renk: RENK.yesil },
  ];
  const pO = eout(ilerle(t, tGray - 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [0, 60, 1700])} />
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={1000} />
      <BaslikBlok t={t} bas={tYil} satirlar={["13 YEARS", "LATER"]} x={1860} y={230} boyut={118} hiza="sag" bitis={tBut - 0.1} />
      <Not t={t} bas={tGap} bitis={tBut - 0.1} metin="the gap in clearly low B12 was no longer statistically significant" x={1860} y={500} hiza="sag" genislik={640} boyut={38} />
      <Baslik t={t} bas={tBut} bitis={tGray - 0.2} metin="LOW OR BORDERLINE B12" x={1860} y={200} boyut={58} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={tGray} metin="THE GRAY ZONE" x={1860} y={260} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ opacity: 1 - pO }}>
        <CubukGrafik t={t} bas={t203} cubuklar={[
          { etiket: "Metformin", deger: 20.3, metin: "20.3%", renk: RENK.altin, bas: t203 - 0.05 },
          { etiket: "Placebo", deger: 15.6, metin: "15.6%", renk: RENK.yesil, bas: t156 - 0.05 },
        ]} x={1090} y={400} w={700} h={400} maks={23} />
      </div>
      {segler.map((g, i) => {
        const [sc, al] = pop(t, g.bas, 0.5);
        return (
          <div key={g.ad} style={{ position: "absolute", left: 1040 + i * 260, top: 520, width: 250, opacity: al, transform: `scale(${sc})` }}>
            <div style={{ height: 64, background: g.renk, borderRadius: i === 0 ? "18px 0 0 18px" : i === 2 ? "0 18px 18px 0" : 0 }} />
            <div style={{ marginTop: 14, textAlign: "center", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>{g.ad}</div>
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1040, top: 420, opacity: pO, fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 2, color: RENK.altin,
        border: `3px solid ${RENK.altin}`, background: "#FCF6E6", borderRadius: 999, padding: "6px 18px" }}>ILLUSTRATIVE</div>
    </>
  );
};

export default S22;
