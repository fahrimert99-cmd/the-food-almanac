// Sahne 44 — PYY tokluk hormonu ve açık soru: mide → beyin parçacıkları.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, Hap, eout, ilerle, kameraYolu, kelimeZamani, pop, random, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tPyy = K(0, "PYY,"), tYuksek = K(0, "higher"), tGec = c[1].bas - 0.15;
  // mideden beyne akan parçacıklar
  const par: React.ReactNode[] = [];
  const a = sol(t, tGec, 0.4);
  for (let j = 0; j < 14 && a > 0; j++) {
    const t0 = tPyy + j * 0.3, u = ((t - t0) / 1.8) % 1;
    if (t < t0) continue;
    const r = random(`pyy${j}`);
    const sx = 1030, sy = 470 + (r - 0.5) * 120, ex = 560, ey = 450 + (r - 0.5) * 60;
    const e = eout(u), px = sx + (ex - sx) * e, py = sy + (ey - sy) * e - Math.sin(Math.PI * e) * 70;
    par.push(<circle key={j} cx={px} cy={py} r={7 + 5 * r} fill={RENK.altinAcik} stroke={RENK.altin} strokeWidth={2} opacity={Math.sin(Math.PI * u) * a} />);
  }
  const [sc, al] = pop(t, tYuksek, 0.5);
  const aR = al * sol(t, tGec, 0.4);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 50, 1800])}>
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>{par}</svg>
        <Etiket t={t} bas={K(0, "fullness")} bitis={tGec} capa={[1230, 380]} konum={[1640, 300]} metin="FULLNESS HORMONE PYY" renk={RENK.altin} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", right: 40, top: 520, opacity: aR, transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
        <Hap metin="HIGHER AFTER UNPROCESSED DIET" renk={RENK.yesil} boyut={23} />
      </div>
      <Not t={t} bas={K(1, "NIH")} metin="THE NIH TEAM COULD NOT SAY" x={100} y={110} boyut={32} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(1, "actually")} metin="WHAT CAUSED" x={100} y={215} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "extra")} metin="THE EXTRA EATING?" x={100} y={315} boyut={76} renk={RENK.mercan} />
    </>
  );
};
export default S44;
