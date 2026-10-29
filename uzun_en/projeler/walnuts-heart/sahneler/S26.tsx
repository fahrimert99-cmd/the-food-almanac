// Sahne 26 — kilo: ceviz grubu sabit (+0.06 kg), cevizsiz grup yaklaşık yarım kg verdi. Panel sağda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, ANTON, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sapma çubukları (ekran koordinatı): 300 px = 1 kg, taban çizgisi y=650
const TABAN = 650, OLCEK = 300;
const COLS = [
  { x: 1500, ad: "WALNUT", deger: 0.06, metin: "+0.06 KG", renk: RENK.yesil, ifade: "stayed" },
  { x: 1730, ad: "WALNUT-FREE", deger: -0.5, metin: "≈ –0.5 KG", renk: RENK.mercan, ifade: "lost" },
];

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tYazi = K(1, "walnut group's"), tCevizsiz = K(1, "walnut-free");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 60, 1760])} />
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={170} boyut={88} hiza="sag" />
      <Not t={t} bas={0.9} metin={b.not ?? ""} x={1860} y={400} hiza="sag" genislik={520} boyut={28} />
      <Etiket t={t} bas={tYazi} capa={[370, 400]} konum={[420, 150]} metin="WALNUT GROUP" renk={RENK.yesil} />
      <Etiket t={t} bas={tCevizsiz} capa={[940, 420]} konum={[880, 150]} metin="WALNUT-FREE GROUP" renk={RENK.mercan} />
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <line x1={1390} x2={1840} y1={TABAN} y2={TABAN} stroke={RENK.lacivert} strokeWidth={3} opacity={pPanel * 0.6} />
        {COLS.map((c) => {
          const p = eout(ilerle(t, K(1, c.ifade), 0.8));
          const h = c.deger * OLCEK * p;
          return <rect key={c.ad} x={c.x - 50} y={h >= 0 ? TABAN - h : TABAN} width={100} height={Math.abs(h)} fill={c.renk} rx={6} />;
        })}
      </svg>
      {COLS.map((c) => {
        const [sc, al] = pop(t, K(1, c.ifade) + 0.4, 0.5);
        return (
          <React.Fragment key={c.ad}>
            <div style={{ position: "absolute", left: c.x, top: 560, transform: "translate(-50%, 0)", opacity: al, fontFamily: INTER, fontWeight: 800,
              fontSize: 22, letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>{c.ad}</div>
            <div style={{ position: "absolute", left: c.x, top: c.deger < 0 ? 830 : 700, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
              fontFamily: ANTON, fontSize: 46, color: c.renk, whiteSpace: "nowrap" }}>{c.metin}</div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S26;
