// Sahne 47 — Am Fam Physician: krampla en çok ilişkilendirilen ilaçlar.
import React from "react";
import { BaslikBlok, ANTON, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "most");
  const tNot = K(0, "linked");
  const SATIRLAR = [
    { bas: K(1, "Raloxifene"), ad: "RALOXIFENE", alt: "osteoporosis", altBas: K(1, "osteoporosis") },
    { bas: K(1, "teriparatide"), ad: "TERIPARATIDE", alt: "osteoporosis", altBas: K(1, "osteoporosis") },
    { bas: K(2, "Conjugated"), ad: "CONJUGATED ESTROGENS" },
    { bas: K(3, "naproxen"), ad: "NAPROXEN", alt: "pain reliever", altBas: K(3, "pain") },
    { bas: K(4, "intravenous"), ad: "IRON SUCROSE", alt: "intravenous", altBas: K(4, "intravenous") },
  ];
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])} />
      <KaynakEtiketi t={t} bas={0.25} metin="Allen & Kirby · Am Fam Physician · 2012" y={20} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["FIVE", "MEDICINES"]} x={1300} y={190} boyut={100} />
      <Not t={t} bas={tNot} metin="most strongly linked to leg cramps" x={1304} y={390} boyut={32} genislik={560} />
      {SATIRLAR.map((r, i) => {
        const p = eout(ilerle(t, r.bas, 0.5));
        const pa = eout(ilerle(t, r.altBas ?? 1e9, 0.5));
        if (p <= 0) return null;
        return (
          <div key={r.ad + i} style={{ position: "absolute", left: 1300, top: 500 + i * 92, width: 580, opacity: p,
            transform: `translateX(${(1 - p) * -30}px)`, display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 52, height: 52, flex: "none", borderRadius: "50%", background: RENK.mercan, color: "#fff", display: "flex",
              alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 30 }}>{i + 1}</div>
            <div>
              <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, lineHeight: 1.1, color: RENK.murekkep }}>{r.ad}</div>
              {r.alt && <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 22, color: RENK.gri, opacity: pa, height: 28 }}>{r.alt}</div>}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default S47;
