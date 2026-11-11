// Sahne 61 — gıda ile hap farkı, sıcak basması çalışmaları, doktora danış.
import React from "react";
import { Etiket, Hap, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHot = K(1, "Hot flash");
  const cikis = tHot - 0.1;
  const tDr = K(1, "ask their doctors");
  const [sf, af] = pop(t, K(0, "different"), 0.5);
  const [sd, ad] = pop(t, tDr, 0.55);
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "Soy foods")} bitis={cikis} capa={[400, 430]} konum={[400, 110]} metin="SOY FOODS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "pills")} bitis={cikis} capa={[1560, 520]} konum={[1560, 830]} metin="ISOFLAVONE PILLS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "tested pills")} capa={[1560, 420]} konum={[1620, 830]} metin="TESTED: PILLS" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 960, top: 100, transform: `translate(-50%, -50%) scale(${sf})`, opacity: af * sol(t, cikis) }}>
        <Hap metin="DIFFERENT THINGS" renk={RENK.mercan} boyut={34} />
      </div>
      <VurguRozet t={t} bas={K(1, "modest")} vurgu="MODEST" not="reduction in hot flashes" x={960} y={50} boyut={84} genislik={560} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 80, top: 790, width: 620, transform: `scale(${sd})`, transformOrigin: "0 0", opacity: ad,
        display: "flex", alignItems: "center", gap: 20, background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 26,
        padding: "16px 24px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.25, color: RENK.lacivert }}>
          SURVIVORS: ASK YOUR DOCTORS FIRST
        </div>
      </div>
    </>
  );
};
export default S61;
