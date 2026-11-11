// Sahne 17 — çubuk grafik: indüklenen kramp süresi (152 / 134 / 85 s). Her çubuk sayısı söylenince yükselir.
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 300, GY = 470, GW = 1320, GH = 330;

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const ifadeler: [number, string][] = [[0, "152"], [1, "134"], [2, "85"]];
  const renkler = [RENK.gri, RENK.altin, RENK.yesil];
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: renkler[i], bas: K(ifadeler[i][0], ifadeler[i][1]) - 0.05 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.9, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  // fark göstergesi: "49 seconds" söylenince
  const tFark = K(3, "49");
  const [sF, aF] = pop(t, tFark, 0.55);
  const gw = GW / 3;
  const xSu = GX + gw * 1.5, xTursu = GX + gw * 2.5;
  const yUst = GY + GH - (134 / (152 * 1.15)) * GH;
  const yAlt = GY + GH - (85 / (152 * 1.15)) * GH;
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={cubuklar[0].bas} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} />
      {/* fark: su çubuğunun tepesinden turşu çubuğunun tepesine kesikli işaret */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aF}>
          <line x1={xSu + 120} x2={xTursu + 150} y1={yUst} y2={yUst} stroke={RENK.mercan} strokeWidth={3.5} strokeDasharray="12 9" />
          <line x1={xTursu + 130} x2={xTursu + 130} y1={yUst} y2={yAlt} stroke={RENK.mercan} strokeWidth={4} />
          <polyline points={`${xTursu + 118},${yAlt - 14} ${xTursu + 130},${yAlt} ${xTursu + 142},${yAlt - 14}`} fill="none"
            stroke={RENK.mercan} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
      <div style={{ position: "absolute", left: xTursu + 170, top: (yUst + yAlt) / 2 - 36, transform: `scale(${sF})`, transformOrigin: "0% 50%",
        opacity: aF, background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 22, padding: "4px 18px",
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)", display: "flex", alignItems: "center", gap: 10, whiteSpace: "nowrap" }}>
        <IkonYol ad="ok" boyut={30} renk={RENK.mercan} kalinlik={7} />
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.mercan }}>−49 s</span>
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S17;
