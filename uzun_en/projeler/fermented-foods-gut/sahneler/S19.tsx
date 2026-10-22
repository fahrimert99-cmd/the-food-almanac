// Sahne 19 — çeşitlilik arttı: sağda başlık ve ILLUSTRATIVE yükselen çizgi (sayı yok).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFerm = K(0, "fermented"), tGut = K(0, "gut"), tDiv = K(0, "diversity"), tUp = K(0, "steadily"), tWeeks = K(0, "ten");
  const p = eout(ilerle(t, tUp, 1.5));
  // yükselen çizgi: x 1080–1780, y 900 → 700
  const nok = Array.from({ length: 31 }, (_, i) => {
    const u = i / 30;
    return [1080 + 700 * u, 900 - 200 * u - 12 * Math.sin(u * 9)] as [number, number];
  });
  const gor = nok.slice(0, Math.max(2, Math.round(p * 30) + 1));
  const son = gor[gor.length - 1];
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tFerm} bitis={tDiv} capa={[620, 190]} konum={[1150, 110]} metin="FERMENTED FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tGut} bitis={tDiv} capa={[880, 420]} konum={[1230, 250]} metin="GUT MICROBIOME" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tDiv} satirlar={["DIVERSITY", "WENT UP"]} x={1080} y={400} boyut={112} />
      <Not t={t} bas={tWeeks} metin="over ten weeks" x={1084} y={640} boyut={38} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {p > 0 && (
          <>
            <polyline points={`1080,730 1080,900 1800,900`} fill="none" stroke={RENK.lacivert} strokeWidth={4} />
            <polyline points={gor.map((q) => q.join(",")).join(" ")} fill="none" stroke={RENK.yesil} strokeWidth={11}
              strokeLinecap="round" strokeLinejoin="round" />
            <circle cx={son[0]} cy={son[1]} r={13} fill={RENK.yesil} stroke="#fff" strokeWidth={4} />
            <text x={1800} y={940} textAnchor="end" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, fill: RENK.lacivert }}>10 WEEKS</text>
            <text x={1090} y={760} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, fill: RENK.altin }}>ILLUSTRATIVE</text>
          </>
        )}
      </svg>
    </>
  );
};

export default S19;
