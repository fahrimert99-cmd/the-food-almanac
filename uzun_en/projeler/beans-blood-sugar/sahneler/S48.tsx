// Sahne 48 — kendin dene: glukoz sensörü, fasulyeli öğün, kendi eğrin = tek veri noktası
import React from "react";
import { AdimAkisi, Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, einout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(0, "test");
  const tEgri = K(1, "curve");
  const tTek = K(2, "single");
  const p = einout(ilerle(t, tEgri - 0.1, 1.6));
  // telefon ekranına çizilen şematik eğri (yerel koordinat, ekranın uzun ekseni +33°)
  const yol = "M -240 70 C -150 70, -130 -60, -40 -70 C 40 -78, 100 20, 240 40";
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* 1. cümle: glukoz sensörü */}
        <Etiket t={t} bas={K(0, "glucose")} capa={[1413, 760]} konum={[1640, 900]} metin="GLUCOSE MONITOR" renk={RENK.altin} />
        {/* 2. cümle: fasulyeli öğün ve kendi eğrin */}
        <Etiket t={t} bas={K(1, "beans")} bitis={tTek - 0.2} capa={[1280, 330]} konum={[1200, 195]} metin="MEAL WITH BEANS" renk={RENK.yesil} />
        {p > 0 && (
          <>
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
              <g transform="translate(680 585) rotate(33)">
                <line x1={-260} y1={110} x2={260} y2={110} stroke="#fff" strokeWidth={3} opacity={0.5} />
                <path d={yol} fill="none" stroke={RENK.altin} strokeWidth={10} strokeLinecap="round" pathLength={1}
                  strokeDasharray={1} strokeDashoffset={1 - p} />
              </g>
            </svg>
            <div style={{ position: "absolute", left: 440, top: 770, opacity: p }}>
              <Hap metin="ILLUSTRATIVE" renk={RENK.gri} boyut={22} />
            </div>
          </>
        )}
      </Kamera>
      {/* sol üst boş kâğıt */}
      <Baslik t={t} bas={tTest} bitis={K(1, "Compare") - 0.2} metin="TEST IT" x={150} y={110} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tTest + 0.2} bitis={K(1, "Compare") - 0.2} metin="YOURSELF" x={150} y={225} boyut={110} renk={RENK.lacivert} />
      <div style={{ opacity: sol(t, tTek - 0.3) }}>
        <AdimAkisi t={t} x={760} y={70} boyut={28} numarali={false} adimlar={[
          { bas: K(1, "Compare"), metin: "BEANS", renk: RENK.yesil },
          { bas: K(1, "place"), metin: "IN PLACE OF SOME RICE", renk: RENK.altin },
        ]} />
      </div>
      {/* 3. cümle */}
      <VurguRozet t={t} bas={tTek - 0.2} vurgu="1 DATA POINT" not="not a verdict" x={430} y={90} genislik={520} boyut={80} renk={RENK.altin} />
    </>
  );
};

export default S48;
