// Sahne 22 — insülin %17 düşük, tepe 30 dk geç; GLP-1 %19 düşük.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} /></div>;
};

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t17 = K(0, "17 percent"), tPeak = K(0, "peak"), tGlp = K(1, "GLP-1"), tGut = K(1, "gut hormone"), t19 = K(1, "19 percent");
  const bitisA = tGlp - 0.1;
  return (
    <>
      {/* alt köşelerdeki sahte yazılar kadraj dışında (y < 1040) */}
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [60, 30, 1680])}>
        <Etiket t={t} bas={0.1} bitis={bitisA} capa={[560, 600]} konum={[950, 520]} metin="INSULIN" renk={RENK.mercan} />
        <Etiket t={t} bas={tPeak} bitis={bitisA} capa={[270, 790]} konum={[950, 760]} metin="PEAK 30 MIN LATER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.2} metin="LESS INSULIN," x={1840} y={170} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tGlp} metin="LESS GLP-1" x={1840} y={280} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={t17} bitis={bitisA} vurgu="–17%" not="INSULIN AFTER LUNCH" x={1560} y={390} genislik={380} renk={RENK.mercan} />
      <Pil t={t} bas={tGut} bitis={t19 - 0.1} x={1560} y={470} metin="A GUT HORMONE" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t19} vurgu="–19%" not="GLP-1 LEVEL" x={1560} y={390} genislik={380} renk={RENK.koyuYesil} />
    </>
  );
};

export default S22;
