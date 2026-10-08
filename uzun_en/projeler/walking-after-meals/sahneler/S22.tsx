// Sahne 22 — Dunstan 2012: hafif ve orta tempolu yürüyüş molaları (meta.grafik, görselsiz).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Ikon, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  const tOrta = K(0, "30 percent") - 0.1;
  const tHafif = K(1, "gentle");
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 0 ? RENK.yesil : RENK.koyuYesil, bas: i === 0 ? tHafif : tOrta }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, K(0, "walking"), 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const [sc, al] = pop(t, K(1, "which matters"), 0.55);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={74} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* çubuklar solda; sağda iki not */}
      <CubukGrafik t={t} bas={tOrta} cubuklar={cubuklar} x={200} y={470} w={960} h={330} maks={40} />
      <div style={{ position: "absolute", left: 1290, top: 590, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%",
        display: "flex", alignItems: "center", gap: 18 }}>
        <Ikon t={t} bas={K(1, "which matters")} ad="onay" x={44} y={44} boyut={88} />
        <div style={{ marginLeft: 112, fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.25, color: RENK.lacivert, width: 460 }}>
          GENTLE WALKING STILL HELPS
        </div>
      </div>
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S22;
