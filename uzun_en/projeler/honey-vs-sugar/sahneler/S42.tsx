// Sahne 42 — eklenen şeker sayılır: çay ve tost üstündeki bal; 2 yemek kaşığı ile günlük sınırlar.
import React from "react";
import { ANTON, BaslikBlok, Etiket, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yatay çubuk: değerler önceki sahnelerin anlatımından (34 g = 2 yemek kaşığı, 25 g / 36 g = AHA)
const CUBUKLAR = [
  { ifade: "two tablespoons", ad: "2 TBSP HONEY", g: 34, renk: RENK.altin },
  { ifade: "women's", ad: "WOMEN'S LIMIT", g: 25, renk: RENK.koyuYesil },
  { ifade: "men's", ad: "MEN'S LIMIT", g: 36, renk: RENK.lacivert },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gecis = c[1].bas - 0.15;
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      {/* sağ kenardaki sahte yazı dışarıda kalsın */}
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [110, 60, 1700])}>
        <Etiket t={t} bas={K(0, "into tea")} bitis={gecis} capa={[1450, 600]} konum={[1230, 215]} metin="HONEY IN TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "toast")} bitis={gecis} capa={[900, 790]} konum={[470, 790]} metin="HONEY ON TOAST" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={860} opak={0.9} />
      <BaslikBlok t={t} bas={K(0, "Sugars")} bitis={gecis} satirlar={["COUNTS AS", "ADDED SUGAR"]} x={80} y={300} boyut={96} />
      {CUBUKLAR.map((b, i) => {
        const bas = K(1, b.ifade);
        const p = eout(ilerle(t, bas, 0.8));
        if (p <= 0) return null;
        const y = 250 + i * 160;
        return (
          <div key={b.ad} style={{ position: "absolute", left: 80, top: y, opacity: Math.min(1, p * 2) * sol(t, 1e9) }}>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{b.ad}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 8 }}>
              <div style={{ width: b.g * 15 * p, height: 52, borderRadius: 10, background: b.renk, boxShadow: "0 6px 16px rgba(48,40,34,0.2)" }} />
              <span style={{ fontFamily: ANTON, fontSize: 56, color: b.renk, opacity: p }}>{b.g} g</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default S42;
