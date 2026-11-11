// Sahne 11 — PREDIMED katılımcıları: 7.447 kişi, 55–80 yaş, %57 kadın; yüksek riskli ama olay geçirmemiş.
import React from "react";
import { Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(0, "7,447"), t2 = K(0, "55"), t3 = K(0, "57"), tRisk = K(1, "high risk"), tYok = K(1, "none");
  const son = tRisk - 0.2;
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [90, 55, 1740])} />
      <VurguRozet t={t} bas={t1} bitis={son} vurgu="7,447" not="adults" x={330} y={100} genislik={400} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t2} bitis={son} vurgu="55–80" not="years old" x={1560} y={100} genislik={400} renk={RENK.altin} />
      <VurguRozet t={t} bas={t3} bitis={son} vurgu="57%" not="were women" x={1560} y={290} genislik={400} renk={RENK.lacivert} boyut={88} />
      <Etiket t={t} bas={tRisk} capa={[1090, 715]} konum={[1500, 250]} metin="HIGH RISK" renk={RENK.mercan} />
      <Etiket t={t} bas={tYok} capa={[960, 655]} konum={[420, 250]} metin="NO PRIOR EVENTS" renk={RENK.yesil} />
    </>
  );
};

export default S11;
