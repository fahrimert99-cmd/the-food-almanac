// Sahne 27 — Çoğu çalışma kısaydı (2–12 hafta); uzun vadeli etki daha belirsiz. Sol panel, sağda yulaf ve saat.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const yama = (x: number, y: number, w = 150, h = 110) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tShort = K(0, "short"), tTwo = K(0, "two"), tLower = K(1, "lower"), tLong = K(2, "Long-term"), tScarce = K(2, "long trials");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        {yama(1095, 470)}{yama(1030, 610)}{yama(960, 505, 120, 90)}
        <Etiket t={t} bas={K(1, "short term")} capa={[1240, 640]} konum={[1560, 880]} metin="SHORT TERM" renk={RENK.altin} />
      </Kamera>
      <Panel a={1} taraf="sol" genislik={1300} opak={1} />
      <BaslikBlok t={t} bas={tShort - 0.1} satirlar={["MOSTLY", "SHORT TRIALS"]} x={80} y={190} boyut={96} />
      <VurguRozet t={t} bas={tTwo} vurgu="2–12 WEEKS" not="first analysis" x={400} y={420} genislik={560} boyut={84} renk={RENK.altin} />
      <Liste t={t} x={80} y={640} aralik={92} boyut={34} isaret="nokta" genislik={1000} ogeler={[
        { bas: tLower, metin: "LDL DOWN IN THE SHORT TERM", renk: RENK.yesil },
        { bas: tLong, metin: "LONG-TERM: LESS CERTAIN", renk: RENK.altin },
        { bas: tScarce, metin: "LONG TRIALS ARE SCARCE", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S27;
