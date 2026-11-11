// Sahne 33 — tek büyük akşam yemeği? Tost ve sandviç; üstte öğün hapları, sağda başlık.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const OGUNLER = [
  { ifade: "light", metin: "LIGHT BREAKFAST", renk: RENK.altin },
  { ifade: "modest", metin: "MODEST LUNCH", renk: RENK.yesil },
  { ifade: "large", metin: "LARGE DINNER", renk: RENK.mercan },
];

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTitle = K(1, "researchers");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [100, 170, 1750])}>
        <Etiket t={t} bas={K(0, "breakfast,")} bitis={tTitle} capa={[370, 640]} konum={[370, 860]} metin="TOAST" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "protein-rich")} capa={[880, 600]} konum={[880, 880]} metin="PROTEIN-RICH" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.6} yukseklik={120} />
      <div style={{ position: "absolute", left: 90, top: 90, display: "flex", gap: 14 }}>
        {OGUNLER.map((o) => {
          const [sc, al] = pop(t, K(0, o.ifade), 0.5);
          const a = al * sol(t, tTitle - 0.2);
          if (a <= 0) return null;
          return (
            <div key={o.metin} style={{ transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center", gap: 10,
              whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${o.renk}`, borderRadius: 999,
              padding: "8px 22px 8px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep,
              boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
              <span style={{ width: 16, height: 16, borderRadius: "50%", background: o.renk }} />{o.metin}
            </div>
          );
        })}
      </div>
      <BaslikBlok t={t} bas={tTitle} satirlar={s.meta.baslik!.satirlar} x={1850} y={260} boyut={112} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "wastes")} metin="Is some muscle-building effect wasted?" x={1850} y={520} hiza="sag" genislik={560} boyut={34} agirlik={800} />
    </>
  );
};

export default S33;
