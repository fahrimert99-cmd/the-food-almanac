// Sahne 55 — adım 2: kalsiyum + oksalat aynı tabakta; bağlanma şeması.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, INTER, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const altigen = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCa = K(1, "calcium"), tOx = K(1, "oxalate"), tTitle = K(2, "spinach"), tChe = K(2, "cheese"), tYog = K(2, "yogurt");
  const tBind = K(2, "bind"), tGut = K(2, "gut"), tTwo = K(0, "two");
  const [sc, al] = pop(t, tTwo, 0.5);
  const yaklas = einout(ilerle(t, tBind - 0.9, 1.1));
  const aD = eout(ilerle(t, tBind - 1.3, 0.5));
  const cx = 1330 + 110 * yaklas, hx = 1700 - 110 * yaklas, dy = 700;
  const [sg, ag] = pop(t, tGut, 0.5);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tCa} bitis={tTitle - 0.2} capa={[935, 330]} konum={[1420, 250]} metin="CALCIUM" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tOx} bitis={tTitle - 0.2} capa={[640, 700]} konum={[1420, 440]} metin="OXALATE" renk={RENK.yesil} boyut={28} />
        <Etiket t={t} bas={tChe} bitis={tYog - 0.15} capa={[623, 587]} konum={[560, 250]} metin="CHEESE" renk={RENK.altin} boyut={28} />
        <Etiket t={t} bas={tYog} capa={[360, 440]} konum={[250, 250]} metin="YOGURT" renk={RENK.altin} boyut={28} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 60, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 62, transform: `scale(${sc})`,
        opacity: al, border: `4px solid ${RENK.kagitAcik}` }}>2</div>
      <BaslikBlok t={t} bas={tTitle} satirlar={["SPINACH +", "CHEESE"]} x={1230} y={200} boyut={100} />
      {aD > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }} opacity={aD}>
          <circle cx={cx} cy={dy} r={52} fill={RENK.altin} fillOpacity={0.85} stroke={RENK.altin} strokeWidth={5} />
          <text x={cx} y={dy + 14} textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 40, fill: "#fff" }}>Ca</text>
          <polygon points={altigen(hx, dy, 56)} fill={RENK.yesil} fillOpacity={0.8} stroke={RENK.koyuYesil} strokeWidth={5} strokeLinejoin="round" />
          <text x={hx} y={dy + 14} textAnchor="middle" style={{ fontFamily: ANTON, fontSize: 36, fill: "#fff" }}>Ox</text>
          {yaklas > 0.95 && <circle cx={(cx + hx) / 2} cy={dy} r={92} fill="none" stroke={RENK.altin} strokeWidth={4} strokeDasharray="10 8" />}
          <text x={1520} y={dy + 120} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 800, fontSize: 22, letterSpacing: 3, fill: RENK.gri }}>ILLUSTRATIVE</text>
        </svg>
      )}
      {ag > 0 && (
        <div style={{ position: "absolute", left: 1520, top: 530, transform: `translateX(-50%) scale(${sg})`, opacity: ag }}>
          <Hap metin="BIND IN YOUR GUT" renk={RENK.altin} boyut={30} />
        </div>
      )}
    </>
  );
};
export default S55;
