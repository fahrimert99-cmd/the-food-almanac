// Sahne 21 — Cochrane: 100 kişide 8 daha az
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCoch = K(0, "Cochrane"), t8 = K(1, "8"), tEvery = K(1, "every"), tProg = K(1, "progressed"), tInter = K(1, "intermediate");
  const [sh, ah] = pop(t, tInter, 0.5);
  const x0 = 1420, y0 = 460, g = 44;
  const pG = eout(ilerle(t, tEvery, 0.6));
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tCoch} />
      <BaslikBlok t={t} bas={t8 - 0.1} satirlar={["8 FEWER", "IN EVERY 100"]} x={1860} y={170} boyut={96} hiza="sag" />
      <div style={{ position: "absolute", left: 1640, top: 392, transform: `translate(-50%,0) scale(${sh})`, opacity: ah }}>
        <Hap metin="INTERMEDIATE DISEASE" renk={RENK.lacivert} boyut={26} />
      </div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {Array.from({ length: 100 }, (_, i) => {
          const c = i % 10, r = Math.floor(i / 10);
          const hl = i < 8;
          const p = hl ? eout(ilerle(t, tProg + i * 0.07, 0.4)) : 0;
          return (
            <circle key={i} cx={x0 + c * g + g / 2} cy={y0 + r * g + g / 2} r={15 + 3 * p}
              fill={hl && p > 0.02 ? RENK.yesil : RENK.lacivert} opacity={hl && p > 0.02 ? 1 : 0.28 * pG}
              stroke={hl && p > 0.02 ? "#fff" : "none"} strokeWidth={3} />
          );
        })}
      </svg>
      <div style={{ position: "absolute", left: 1640, top: 906, transform: "translateX(-50%)", opacity: eout(ilerle(t, tProg + 0.7, 0.5)),
        fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 26, color: RENK.koyuYesil, whiteSpace: "nowrap" }}>8 FEWER PROGRESSED</div>
    </>
  );
};

export default S21;
