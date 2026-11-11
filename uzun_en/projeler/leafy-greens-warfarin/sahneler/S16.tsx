// Sahne 16 — Franco: 39 kişi, 230 ziyaret; daha çok K vitamini = daha düşük INR (temsili çizgi).
import React from "react";
import { Etiket, Hap, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t39 = K(0, "39"), t230 = K(0, "230"), tClinic = K(0, "anticoagulation");
  const tMore = K(1, "more"), tLower = K(1, "lower");
  const son = tMore - 0.2;
  const pPanel = eout(ilerle(t, tMore - 0.1, 0.6));
  const pEks = eout(ilerle(t, tMore, 0.6));
  const pCiz = eout(ilerle(t, K(1, "the lower") - 0.1, 1.6));
  // temsili azalan çizgi (sayı yok)
  const x0 = 1340, x1 = 1790, yT = 330, yB = 780;
  const ex = x0 + (x1 - x0) * pCiz;
  const ey = (x: number) => yT + 40 + (yB - yT - 120) * ((x - x0) / (x1 - x0));
  const [sc, al] = pop(t, tLower, 0.5);
  const yazi: React.CSSProperties = { position: "absolute", fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert };
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 80, 1780])}>
        <Etiket t={t} bas={tClinic} bitis={son} capa={[1560, 700]} konum={[1500, 900]} metin="ANTICOAGULATION CLINIC" renk={RENK.altin} boyut={26} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "researchers")} />}
      <VurguRozet t={t} bas={t39} bitis={son} vurgu="39" not="people" x={760} y={90} genislik={300} />
      <VurguRozet t={t} bas={t230} bitis={son} vurgu="230" not="visits" x={1130} y={90} genislik={300} />
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      <div style={{ opacity: pEks }}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <polyline points={`${x0},${yT - 20} ${x0},${yB} ${x1 + 20},${yB}`} fill="none" stroke={RENK.murekkep} strokeWidth={4} />
          {pCiz > 0 && <line x1={x0 + 30} y1={ey(x0 + 30)} x2={ex} y2={ey(ex)} stroke={RENK.yesil} strokeWidth={11} strokeLinecap="round" />}
          {pCiz > 0 && pCiz < 1 && <circle cx={ex} cy={ey(ex)} r={13} fill={RENK.yesil} stroke="#fff" strokeWidth={4} />}
        </svg>
        <div style={{ ...yazi, left: x0, top: yB + 20, fontSize: 28 }}>MORE VITAMIN K →</div>
        <div style={{ ...yazi, left: x0 - 8, top: yT - 70, fontSize: 28 }}>INR</div>
      </div>
      <div style={{ position: "absolute", left: 1580, top: 760, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="LOWER CLOTTING SCORE" renk={RENK.yesil} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1600, top: 880, opacity: pEks }}>
        <Hap metin="ILLUSTRATIVE" renk={RENK.altin} boyut={22} />
      </div>
    </>
  );
};

export default S16;
