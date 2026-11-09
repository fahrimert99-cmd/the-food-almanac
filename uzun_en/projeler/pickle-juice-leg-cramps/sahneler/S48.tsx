// Sahne 48 — denemelerde bildirilen kramp oranları (aralık çubukları, gerçek sayılar).
import React from "react";
import { ANTON, BaslikBlok, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X0 = 460, PX = 37.33; // 0–15% ekseni: x = X0 + değer*PX
const x = (v: number) => X0 + v * PX;

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrials = K(0, "trials");
  const tSayi1 = K(0, "6");
  const tSayi2 = K(0, "3.5");
  const tSayi3 = K(0, "3 percent");
  const tSon = K(1, "most");
  const pPanel = eout(ilerle(t, tSayi1 - 0.5, 0.7));
  const SATIRLAR = [
    { ad: "RALOXIFENE", a: 6, b: 12, deger: "6–12%", bas: tSayi1 - 0.1, y: 400 },
    { ad: "CONJUGATED ESTROGENS", a: 3.5, b: 14, deger: "3.5–14%", bas: tSayi2 - 0.1, y: 540 },
    { ad: "NAPROXEN", a: 0, b: 3, deger: "≈3%", bas: tSayi3 - 0.1, y: 680 },
  ];
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1700])} />
      <Panel a={pPanel} taraf="sol" genislik={1200} opak={0.97} />
      <BaslikBlok t={t} bas={tTrials} satirlar={["CRAMPS IN TRIALS"]} x={80} y={120} boyut={80} renkler={[RENK.lacivert]} />
      <Not t={t} bas={tTrials + 0.5} metin="share of people taking each medicine" x={84} y={190} boyut={30} />
      {SATIRLAR.map((r) => {
        const p = eout(ilerle(t, r.bas, 0.5));
        if (p <= 0) return null;
        const g = eout(ilerle(t, r.bas + 0.15, 0.9));
        const [sc, al] = pop(t, r.bas + 0.7, 0.5);
        const x1 = x(r.a), x2 = x(r.a + (r.b - r.a) * g);
        return (
          <React.Fragment key={r.ad}>
            <div style={{ position: "absolute", left: 80, top: r.y - 20, width: 360, opacity: p, fontFamily: INTER, fontWeight: 800, fontSize: 28,
              letterSpacing: 1, color: RENK.murekkep }}>{r.ad}</div>
            <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: p }}>
              <rect x={x(0)} y={r.y - 4} width={x(15) - x(0)} height={8} rx={4} fill={RENK.murekkep} opacity={0.15} />
              {r.a === 0
                ? <circle cx={x(r.b) * g + x(0) * (1 - g)} cy={r.y} r={17} fill={RENK.mercan} />
                : <rect x={x1} y={r.y - 20} width={Math.max(0, x2 - x1)} height={40} rx={20} fill={RENK.mercan} />}
            </svg>
            <div style={{ position: "absolute", left: (r.a === 0 ? x(r.b) : (x(r.a) + x(r.b)) / 2), top: r.y - 92, transform: `translateX(-50%) scale(${sc})`,
              opacity: al, fontFamily: ANTON, fontSize: 44, color: RENK.mercan, whiteSpace: "nowrap" }}>{r.deger}</div>
          </React.Fragment>
        );
      })}
      {/* eksen işaretleri */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: pPanel }}>
        {[0, 5, 10, 15].map((v) => (
          <text key={v} x={x(v)} y={760} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 22, fill: RENK.gri }}>{v}%</text>
        ))}
      </svg>
      <BaslikBlok t={t} bas={tSon} satirlar={["MOST PEOPLE", "NEVER GET THEM"]} x={80} y={830} boyut={58} />
    </>
  );
};

export default S48;
