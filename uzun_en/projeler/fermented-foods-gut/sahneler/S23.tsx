// Sahne 23 — ana bağışıklık skoru değişmedi; üç yanıt örüntüsü, başlangıç çeşitliliğine bağlı.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const NOKTALAR: [number, number][] = [[140, 150], [690, 130], [960, 150]];

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSkor = K(0, "main"), tDeg = K(0, "change"), tUc = K(1, "three"), tBagli = K(1, "linked"), tBas = K(1, "starting");
  const sonSkor = tUc - 0.15;
  const pFlat = eout(ilerle(t, tDeg, 0.9));
  const aSkor = sol(t, sonSkor);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {NOKTALAR.map(([x, y], i) => {
          const [sc, al] = pop(t, K(1, ["three", "different", "patterns"][i]), 0.5);
          if (al <= 0) return null;
          return (
            <div key={i} style={{ position: "absolute", left: x - 34, top: y - 34, width: 68, height: 68, borderRadius: "50%",
              background: RENK.lacivert, color: "#fff", border: `4px solid ${RENK.kagitAcik}`, display: "flex", alignItems: "center",
              justifyContent: "center", fontFamily: ANTON, fontSize: 38, transform: `scale(${sc})`, opacity: al }}>{i + 1}</div>
          );
        })}
        <Etiket t={t} bas={tBas} capa={[560, 760]} konum={[1500, 800]} metin="STARTING MICROBIOME" renk={RENK.altin} />
      </Kamera>
      <div style={{ opacity: aSkor }}>
        <Baslik t={t} bas={tSkor} metin="MAIN IMMUNE SCORE" x={1260} y={330} boyut={76} renk={RENK.lacivert} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1260} y1={470} x2={1260 + 500 * pFlat} y2={470} stroke={RENK.koyuYesil} strokeWidth={9} strokeLinecap="round" />
          <text x={1260} y={540} style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, fill: RENK.altin, opacity: pFlat }}>ILLUSTRATIVE</text>
        </svg>
        <Not t={t} bas={tDeg} metin="no overall change" x={1260} y={570} boyut={36} />
      </div>
      <BaslikBlok t={t} bas={tUc} satirlar={["3 PATTERNS"]} x={1260} y={330} boyut={120} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tUc + 0.4} metin="in the high fiber group" x={1264} y={420} boyut={36} />
      <Not t={t} bas={tBagli} metin="linked to starting diversity" x={1264} y={480} boyut={34} bitis={1e9} />
    </>
  );
};

export default S23;
