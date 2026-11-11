// Sahne 51 — örüntü, tek öğün değil. Takvimdeki bozuk rakamlar baştan temiz bir takvim kartıyla örtülü.
import React from "react";
import { Baslik, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const COL = 7, ROW = 5, CW = 70, CH = 52;

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tGun = K(0, "patterns"), tTuz = K(1, "dinner"), tOr = K(2, "pattern");
  const pP = eout(ilerle(t, c[2].bas - 0.2, 0.6));
  const hucre = [];
  for (let r = 0; r < ROW; r++) for (let k = 0; k < COL; k++) {
    const i = r * COL + k, tuz = i === 17;
    const p = eout(ilerle(t, tGun - 0.3 + i * 0.045, 0.3));
    const son = eout(ilerle(t, tOr + (i % COL) * 0.04 + r * 0.06, 0.4));
    hucre.push(
      <g key={i}>
        <rect x={k * CW + 4} y={r * CH + 4} width={CW - 8} height={CH - 8} rx={8} fill={tuz && t >= tTuz ? RENK.mercan : "none"}
          stroke={RENK.murekkep} strokeWidth={2} opacity={0.75} />
        {i !== 17 && <circle cx={k * CW + CW / 2} cy={r * CH + CH / 2} r={9 * p} fill={son > 0.01 ? RENK.yesil : RENK.gri} opacity={0.85} />}
      </g>
    );
  }
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* temiz takvim kartı: bozuk rakamlı takvimi örter */}
        <div style={{ position: "absolute", left: 690, top: 56, width: 540, height: 330, background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`,
          borderRadius: 14, boxShadow: "0 12px 30px rgba(48,40,34,0.25)" }}>
          <div style={{ height: 40, background: RENK.lacivert, borderRadius: "8px 8px 0 0" }} />
          <svg width={COL * CW} height={ROW * CH} style={{ position: "absolute", left: 25, top: 56 }}>{hucre}</svg>
        </div>
        <Etiket t={t} bas={tTuz} bitis={c[2].bas - 0.1} capa={[1130, 500]} konum={[1560, 420]} metin="ONE SALTY DINNER" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={640} />
      <Baslik t={t} bas={tOr - 0.1} metin="IT'S THE" x={1860} y={330} boyut={80} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tOr + 0.1} metin="PATTERN" x={1860} y={430} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S51;
