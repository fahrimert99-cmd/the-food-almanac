// Sahne 29 — komodin ve saat; sağ panelde iki belirti türünün saat aralıkları.
import React from "react";
import { Baslik, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const X0 = 1290, X1 = 1810, SAAT = 16;
const xs = (h: number) => X0 + (h / SAAT) * (X1 - X0);

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVom = K(0, "vomiting"), tHalf = K(0, "half"), tDia = K(1, "diarrheal"), tEight = K(1, "eight");
  const aP = eout(ilerle(t, 0.3, 0.7));
  const p1 = eout(ilerle(t, tHalf, 1.2));
  const p2 = eout(ilerle(t, tEight, 1.4));
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [120, 40, 1680], [170, 60, 1580])} />
      <Panel a={aP} taraf="sag" genislik={900} opak={0.97} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aP}>
          {[0, 4, 8, 12, 16].map((h) => (
            <g key={h}>
              <line x1={xs(h)} x2={xs(h)} y1={330} y2={720} stroke={RENK.murekkep} strokeOpacity={0.14} strokeWidth={2} />
              <text x={xs(h)} y={770} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 600, fontSize: 28, fill: RENK.lacivert }}>{h}</text>
            </g>
          ))}
          <line x1={X0 - 10} x2={X1 + 10} y1={720} y2={720} stroke={RENK.murekkep} strokeWidth={4} />
          <text x={(X0 + X1) / 2} y={825} textAnchor="middle" style={{ fontFamily: INTER, fontWeight: 700, fontSize: 28, fill: RENK.gri }}>HOURS AFTER EATING</text>
        </g>
        <rect x={xs(0.5)} y={440} width={(xs(5) - xs(0.5)) * p1} height={64} rx={14} fill={RENK.mercan} />
        <rect x={xs(8)} y={590} width={(xs(16) - xs(8)) * p2} height={64} rx={14} fill={RENK.altin} />
      </svg>
      <Baslik t={t} bas={tVom} metin="VOMITING TYPE" x={X0} y={410} boyut={52} renk={RENK.mercan} />
      <Baslik t={t} bas={tHalf + 0.9} metin="0.5–5 HOURS" x={xs(5) + 20} y={472} boyut={44} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDia} metin="DIARRHEAL TYPE" x={X0} y={560} boyut={52} renk={RENK.altin} />
      <Baslik t={t} bas={tEight + 1.0} metin="8–16 HOURS" x={xs(8) + 24} y={622} boyut={44} renk={RENK.lacivert} style={{ color: "#fff" }} />
    </>
  );
};

export default S29;
