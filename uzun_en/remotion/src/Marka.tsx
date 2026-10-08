// Kanal kimliği: banner (2560x1440) ve profil görseli (800x800). Bir kez çizilir: uzun_en/araclar/marka_gorselleri.py
// Banner'ın her cihazda görünen güvenli alanı ortadaki 1546x423 şerittir; yazılar orada, süs görselleri dışında.
import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import "./fontlar";
import { ANTON, INTER } from "./fontlar";
import marka from "./marka.gen.json";
import { RENK } from "./zaman";

const kagitZemin = `radial-gradient(ellipse 70% 60% at 50% 50%, #FBF8F1 0%, ${RENK.kagit} 55%, #ECE5D6 100%)`;

const Gravur: React.FC<{ ad: string; x: number; y: number; w: number; kirp: [number, number, number, number]; a?: number }> = ({
  ad, x, y, w, kirp, a = 1,
}) => {
  const [x0, y0, x1, y1] = kirp;
  const s = w / (x1 - x0);
  const h = (y1 - y0) * s;
  return (
    <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, overflow: "hidden", opacity: a,
      mixBlendMode: "multiply", WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, #000 62%, transparent 100%)" }}>
      <Img src={staticFile(`img/marka/${ad}.jpg`)} style={{ position: "absolute", left: -x0 * s, top: -y0 * s, width: 1920 * s, height: 1080 * s }} />
    </div>
  );
};

export const Afis: React.FC = () => (
  <AbsoluteFill style={{ background: kagitZemin }}>
    {/* TV'de görünen üst/alt süsler */}
    <Gravur ad="b3" x={640} y={250} w={900} kirp={[300, 80, 1700, 1040]} a={0.55} />
    <Gravur ad="b4" x={1920} y={1190} w={900} kirp={[150, 60, 1800, 1040]} a={0.55} />
    {/* masaüstünde de görünen şerit kenarları */}
    <Gravur ad="b1" x={300} y={720} w={600} kirp={[80, 60, 1180, 1050]} />
    <Gravur ad="b2" x={2250} y={720} w={600} kirp={[560, 300, 1640, 1060]} />
    <div style={{ position: "absolute", left: 507, width: 1546, top: 508, height: 423, display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 12, color: RENK.altin }}>EVIDENCE OVER HYPE</div>
      <div style={{ fontFamily: ANTON, fontSize: 168, lineHeight: 1.05, letterSpacing: 3, color: RENK.lacivert, marginTop: 6 }}>
        {marka.ad.toUpperCase()}
      </div>
      <div style={{ width: 300, height: 7, background: RENK.altin, borderRadius: 4, margin: "6px 0 18px" }} />
      <div style={{ fontFamily: INTER, fontWeight: 500, fontSize: 46, color: RENK.koyuYesil }}>{marka.slogan}</div>
      <div style={{ marginTop: 22, background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 30px",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 5 }}>NEW VIDEOS EVERY TUESDAY &amp; FRIDAY</div>
    </div>
  </AbsoluteFill>
);

export const Avatar: React.FC = () => {
  const bas = marka.ad.replace(/^the\s+/i, "").split(/\s+/).map((w) => w[0]).join("").toUpperCase();
  return (
    <AbsoluteFill style={{ background: RENK.lacivert, alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 64, borderRadius: "50%", border: `10px solid ${RENK.altin}` }} />
      <div style={{ position: "absolute", inset: 92, borderRadius: "50%", border: `3px solid ${RENK.altin}`, opacity: 0.7 }} />
      <div style={{ fontFamily: ANTON, fontSize: 330, lineHeight: 1, color: "#FBF8F1", letterSpacing: 6, marginTop: -20 }}>{bas}</div>
      <div style={{ position: "absolute", top: 560, fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 10, color: RENK.altin }}>
        {marka.ad.split(/\s+/).pop()!.toUpperCase()}
      </div>
    </AbsoluteFill>
  );
};
