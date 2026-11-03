// Sahne 24 — kakao ekstresi ve multivitamin ayrı test edildi.
import React from "react";
import { Etiket, Kamera, Hap, INTER, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyri = K(1, "separately");
  const tKendi = K(1, "stands on");
  const [s1, a1] = pop(t, tAyri, 0.5);
  const [s2, a2] = pop(t, tAyri + 0.35, 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 80, 1780])}>
        <Etiket t={t} bas={K(0, "cocoa")} bitis={tAyri - 0.1} capa={[520, 470]} konum={[420, 190]} metin="COCOA EXTRACT" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "no effect")} bitis={tAyri - 0.1} vurgu="NO EFFECT" not="GLOBAL THINKING SCORES" x={1440} y={110}
        genislik={560} boyut={92} renk={RENK.mercan} />
      {/* iki ayrı test */}
      <div style={{ position: "absolute", left: 960, top: 120, display: "flex", gap: 22, alignItems: "center", opacity: sol(t, 1e9) }}>
        <div style={{ transform: `scale(${s1})`, opacity: a1 }}>
          <Hap metin="COCOA EXTRACT" renk={RENK.mercan} boyut={30} />
        </div>
        <span style={{ opacity: a2, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>VS</span>
        <div style={{ transform: `scale(${s2})`, opacity: a2 }}>
          <Hap metin="MULTIVITAMIN" renk={RENK.yesil} boyut={30} />
        </div>
      </div>
      <Not t={t} bas={tAyri + 0.5} metin="TESTED SEPARATELY" x={1000} y={215} boyut={30} renk={RENK.koyuYesil} agirlik={800} />
      <Not t={t} bas={tKendi} metin="THE MULTIVITAMIN RESULT STANDS ON ITS OWN" x={1000} y={262} boyut={30} agirlik={800} />
    </>
  );
};

export default S24;
