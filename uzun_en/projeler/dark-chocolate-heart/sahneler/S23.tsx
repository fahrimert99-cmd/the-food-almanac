// Sahne 23 — Cochrane derlemesi: 35 deney, 1.804 yetişkin, süre ve uygulama
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translateX(-100%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al,
      background: "#FCF8EC", color: RENK.lacivert, border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 30px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, whiteSpace: "nowrap" }}>{metin}</div>
  );
};

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [40, 40, 1700]);
  const t35 = K(0, "35"), tAd = K(0, "1,804"), tHealthy = K(0, "mostly healthy");
  const tTwo = K(1, "two"), t18 = K(1, "18"), tNine = K(1, "nine"), tVol = K(1, "volunteers"), tFlav = K(1, "flavanol-rich"), tChoc = K(1, "chocolate products"), tCmp = K(1, "comparison");
  // süre çubuğu: 0–18 hafta, x 1250–1830, y 640
  const x0 = 1250, x1 = 1830, y = 640;
  const xs = (v: number) => x0 + (v / 18) * (x1 - x0);
  const pS = eout(ilerle(t, tTwo - 0.2, 0.5)) * sol(t, tVol - 0.1, 0.4);
  const p18 = eout(ilerle(t, t18 - 0.1, 0.9));
  const p9 = eout(ilerle(t, tNine, 0.4));
  const son = xs(2) + (xs(18) - xs(2)) * p18;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={w}>
        <Etiket t={t} bas={tChoc} capa={[700, 790]} konum={[1000, 780]} metin="CHOCOLATE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={t35} metin="35 TRIALS" x={1860} y={230} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tAd} metin="1,804 ADULTS" x={1860} y={340} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tHealthy} metin="mostly healthy adults" x={1860} y={420} boyut={34} hiza="sag" renk={RENK.gri} />
      {/* süre çubuğu */}
      <div style={{ position: "absolute", left: x0, top: y - 100, opacity: pS, fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert }}>TRIAL LENGTH</div>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: pS }}>
        <line x1={xs(2)} y1={y} x2={son} y2={y} stroke={RENK.altin} strokeWidth={14} strokeLinecap="round" />
        <circle cx={xs(2)} cy={y} r={12} fill={RENK.altin} stroke="#fff" strokeWidth={4} />
        {p18 > 0.95 && <circle cx={xs(18)} cy={y} r={12} fill={RENK.altin} stroke="#fff" strokeWidth={4} />}
        <circle cx={xs(9)} cy={y} r={11 * p9} fill={RENK.lacivert} />
      </svg>
      <Not t={t} bas={tTwo} bitis={tVol - 0.1} metin="2 WEEKS" x={xs(2) - 30} y={y + 32} boyut={34} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={t18} bitis={tVol - 0.1} metin="18 WEEKS" x={xs(18) + 10} y={y + 32} boyut={34} renk={RENK.lacivert} agirlik={800} hiza="sag" />
      <Not t={t} bas={tNine} bitis={tVol - 0.1} metin="≈ 9 WEEKS ON AVERAGE" x={xs(9)} y={y - 62} boyut={30} renk={RENK.altin} agirlik={800} hiza="orta" />
      {/* uygulanan ürünler */}
      <Kutu t={t} bas={tFlav} metin="FLAVANOL-RICH COCOA" x={1860} y={600} renk={RENK.koyuYesil} />
      <Kutu t={t} bas={tChoc} metin="CHOCOLATE PRODUCTS" x={1860} y={680} renk={RENK.altin} />
      <Kutu t={t} bas={tCmp} metin="OR A COMPARISON" x={1860} y={760} renk={RENK.gri} />
    </>
  );
};

export default S23;
