// Sahne 17 — BÖLÜM 3 açılışı: deneyin sonucu. Görselsiz çubuk grafik (meta.grafik): 30/60/120. dk'da
// sebze + protein önce yenince kan şekeri ne kadar DÜŞÜKTÜ. Her çubuk sayısı söylendiğinde yükselir.
import React from "react";
import { AbsoluteFill, ANTON, Baslik, CubukGrafik, IkonYol, INTER, RENK, SP, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

// Grafik yerleşimi (ekran koordinatı)
const GX = 300, GY = 470, GW = 1320, GH = 330;

// Kan damlası (S16'daki örnek damlalarıyla aynı biçim): x,y = gövde merkezi
const damla = (x: number, y: number, r: number) =>
  `M ${x} ${y - r * 1.75} C ${x + r * 0.25} ${y - r * 1.05} ${x + r} ${y - r * 0.55} ${x + r} ${y + r * 0.05} ` +
  `A ${r} ${r} 0 0 1 ${x - r} ${y + r * 0.05} C ${x - r} ${y - r * 0.55} ${x - r * 0.25} ${y - r * 1.05} ${x} ${y - r * 1.75} Z`;

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const g = s.meta.grafik ?? { baslik: "", alt: "", cubuklar: [], kaynak: "" };
  // her çubuk kendi sayısı söylendiğinde yükselir
  const ifadeler = ["29 percent", "37 percent", "17 percent"];
  const baslar = ifadeler.map((f) => K(0, f) - 0.05);
  const cubuklar = g.cubuklar.map((c, i) => ({ ...c, renk: i === 1 ? RENK.koyuYesil : RENK.yesil, bas: baslar[i] }));
  const tSebze = K(0, "vegetables"), tGlu = K(0, "glucose levels");
  const aBas = eout(ilerle(t, 0.25, 0.6));
  const aAlt = eout(ilerle(t, tSebze, 0.6));
  const [sL, aL] = pop(t, tGlu, 0.55);
  const aKay = eout(ilerle(t, 1.2, 0.6));
  const gw = GW / Math.max(1, cubuklar.length);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      {/* başlık + alt başlık (bölüm rozeti bölgesinin altında) */}
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={0.3} metin={g.baslik.toUpperCase()} x={156} y={222} boyut={80} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 160, top: 284, opacity: aAlt, transform: `translateY(${(1 - aAlt) * 12}px)`,
        fontFamily: INTER, fontWeight: 500, fontSize: 34, color: RENK.lacivert }}>{g.alt}</div>
      {/* gösterge: çubuk = sebze + protein önce iken kan şekeri ne kadar düşük */}
      <div style={{ position: "absolute", left: 160, top: 342, transform: `scale(${sL})`, transformOrigin: "0% 50%", opacity: aL,
        display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999,
        padding: "7px 24px 7px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.14)", whiteSpace: "nowrap" }}>
        <span style={{ width: 40, height: 40, borderRadius: 10, background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ transform: "rotate(90deg)", display: "flex" }}><IkonYol ad="ok" boyut={30} renk="#fff" kalinlik={7} /></span>
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 1.5, color: RENK.koyuYesil }}>LOWER GLUCOSE</span>
        <span style={{ fontFamily: INTER, fontWeight: 600, fontSize: 24, color: RENK.lacivert }}>veg + protein first vs. carbs first</span>
      </div>
      <CubukGrafik t={t} bas={1.2} cubuklar={cubuklar} x={GX} y={GY} w={GW} h={GH} maks={42} />
      {/* ölçüm anları: S16'daki kan örneklerine gönderme (etiketin solunda küçük damla) */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {cubuklar.map((c, i) => {
          const [sc, al] = pop(t, c.bas - 0.2, 0.45);
          if (al <= 0) return null;
          const cx = GX + gw * (i + 0.5) - c.etiket.length * 9.6 - 26;
          const cy = GY + GH + 42;
          return (
            <g key={i} opacity={al} transform={`translate(${cx} ${cy}) scale(${sc}) translate(${-cx} ${-cy})`}>
              <path d={damla(cx, cy, 10)} fill={RENK.mercan} />
              <circle cx={cx - 3.5} cy={cy - 2} r={2.6} fill="#fff" opacity={0.55} />
            </g>
          );
        })}
      </svg>
      {/* kaynak dipnotu (altyazı bandının üstünde) */}
      <div style={{ position: "absolute", left: 160, right: 160, top: 900, opacity: aKay, textAlign: "center",
        fontFamily: INTER, fontWeight: 500, fontSize: 24, color: "#585862" }}>{g.kaynak}</div>
    </AbsoluteFill>
  );
};

export default S17;
