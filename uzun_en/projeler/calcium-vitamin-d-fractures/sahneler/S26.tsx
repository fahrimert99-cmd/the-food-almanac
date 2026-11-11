// Sahne 26 — meta.grafik: kalsiyum + D ile kırıklar ne kadar azaldı (kalça −43%, omurga dışı −32%).
import React from "react";
import { AbsoluteFill, Baslik, CubukGrafik, Hap, INTER, Not, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

const GX = 240, GY = 500, GW = 1080, GH = 300;

const Pp: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik!;
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i ? RENK.koyuYesil : RENK.yesil, bas: i ? K(0, "32 percent") - 0.05 : 0.9 }));
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, 0.7, 0.6));
  const aKay = eout(ilerle(t, 1.2, 0.6));
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 120, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin="HOW MUCH LOWER FRACTURES WERE" x={156} y={190} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.45} metin="WITH CALCIUM PLUS VITAMIN D" x={156} y={268} boyut={66} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 330, opacity: aAlt, fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      <CubukGrafik t={t} bas={0.9} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={50} />
      {/* sağ sütun: anlatımdaki üç nitelik */}
      <Pp t={t} bas={K(1, "large")} x={1620} y={520} metin="LARGE EFFECT" renk={RENK.yesil} />
      <Pp t={t} bas={K(1, "very")} x={1620} y={620} metin="AVERAGE AGE 84" renk={RENK.altin} />
      <Pp t={t} bas={K(1, "living")} x={1620} y={720} metin="LIVING IN CARE" renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "32 percent") + 0.3} metin="outside the spine" x={GX + GW * 0.75} y={GY + GH + 62} boyut={26} hiza="orta" genislik={400} renk={RENK.gri} />
      <div style={{ position: "absolute", left: 160, right: 160, top: 905, opacity: aKay, textAlign: "center", fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S26;
