// Sahne 7 — retrogradasyon: gevşek zincirler soğurken yan yana dizilir. Sağ altta küçük animasyonlu diyagram.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, einout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const Diyagram: React.FC<{ t: number; bas: number; son: number }> = ({ t, bas, son }) => {
  const a = eout(ilerle(t, bas - 0.2, 0.5)) * sol(t, son);
  if (a <= 0) return null;
  const p = einout(ilerle(t, bas + 0.6, 2.4));
  const x0 = 1400, w = 440, satir = 5;
  return (
    <div style={{ position: "absolute", left: 1340, top: 690, width: 520, height: 250, opacity: a, background: "rgba(251,248,241,0.94)",
      border: `3px solid ${RENK.murekkep}`, borderRadius: 20 }}>
      <svg width={520} height={300} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: satir }).map((_, i) => {
          const y = 80 + i * (36 - 8 * p);
          const yy = y + 12 * p * 0;
          const pts = Array.from({ length: 41 }, (_, k) => {
            const x = 40 + (k / 40) * (w - 60);
            const dy = Math.sin(k * 0.55 + i * 1.7) * 15 * (1 - p) + Math.cos(k * 0.21 + i) * 8 * (1 - p);
            return `${x - 0 + 0},${yy + dy}`;
          }).join(" ");
          return <polyline key={i} points={pts} fill="none" stroke={p > 0.85 ? RENK.koyuYesil : RENK.altin} strokeWidth={7} strokeLinecap="round" />;
        })}
      </svg>
      <div style={{ position: "absolute", left: 0, right: 0, top: 12, textAlign: "center", fontFamily: "Inter, sans-serif", fontWeight: 800,
        fontSize: 28, letterSpacing: 3, color: RENK.lacivert }}>{p < 0.5 ? "LOOSE CHAINS" : "PACKED TOGETHER"}</div>
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tRetro = K(1, "call");
  return (
    <>
      <Kamera gorsel="tam/07" sinirla={false} pencere={kameraYolu(t, s.sure, [0, -70, 1920], [50, -40, 1800])}>
        <Etiket t={t} bas={K(0, "cools")} capa={[640, 440]} konum={[330, 170]} metin="COOLED RICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "tight")} bitis={tRetro - 0.1} capa={[1520, 330]} konum={[1520, 568]} metin="TIGHT CRYSTALS" renk={RENK.koyuYesil} />
      </Kamera>
      <Diyagram t={t} bas={K(0, "line")} son={tRetro - 0.15} />
      <Baslik t={t} bas={tRetro} metin="RETRO-" x={1860} y={680} boyut={112} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tRetro + 0.18} metin="GRADATION" x={1860} y={792} boyut={112} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "retrogradation")} metin="cooked starch re-packing as it cools" x={1860} y={870} hiza="sag" boyut={28} genislik={520} />
    </>
  );
};

export default S07;
