// Sahne 40 — iki programın içeriği, 0.029 farkı ve "her şey bir arada" etiketleri.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const OGELER = ["EXERCISE", "HEALTHY DIET", "MENTAL CHALLENGE", "SOCIAL TIME", "HEART HEALTH CHECKS"];
const IFADE = ["exercise", "healthy diet", "mental challenge", "social time", "heart health"];

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitisPanel = c[2].bas - 0.1;
  const pPanel = eout(ilerle(t, 0.15, 0.7)) * sol(t, bitisPanel, 0.5);
  const cik0 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={K(2, "bundled")} capa={[420, 680]} konum={[330, 230]} metin="EXERCISE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "bundled") + 0.3} capa={[900, 790]} konum={[620, 885]} metin="MENTAL CHALLENGE" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "everything")} capa={[1290, 700]} konum={[1590, 560]} metin="HEART CHECKS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "food")} capa={[900, 330]} konum={[1380, 190]} metin="HOW MUCH WAS FOOD?" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={680} opak={0.95} />
      {/* 1. cümle: beş ortak bileşen */}
      {OGELER.map((m, i) => {
        const [sc, al] = pop(t, K(0, IFADE[i]), 0.5);
        const a = al * sol(t, cik0, 0.4);
        if (a <= 0) return null;
        return (
          <div key={m} style={{ position: "absolute", left: 1380, top: 190 + i * 110, opacity: a, transform: `scale(${sc})`,
            transformOrigin: "0% 50%", display: "flex", alignItems: "center", gap: 18, whiteSpace: "nowrap" }}>
            <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="onay" boyut={32} renk="#fff" />
            </span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, color: RENK.murekkep }}>{m}</span>
          </div>
        );
      })}
      {/* 2. cümle: fark */}
      <Baslik t={t} bas={K(1, "two years")} bitis={bitisPanel} metin="TWO YEARS" x={1420} y={260} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "slightly")} bitis={bitisPanel} vurgu="0.029" not="extra yearly gain for the structured program"
        x={1600} y={380} genislik={440} />
    </>
  );
};

export default S40;
