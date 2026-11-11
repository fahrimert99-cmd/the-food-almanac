// Sahne 12 — üç grup: prunesiz, 50 g, 100 g (iki tepsi görseli).
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tUc = K(0, "three groups"), tYok = K(0, "no prunes"), t50 = K(0, "50 grams"), t100 = K(0, "100 grams");
  const [sc, al] = pop(t, t50, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])} />
      <BaslikBlok t={t} bas={tUc} satirlar={["THREE", "GROUPS"]} x={1860} y={250} boyut={110} hiza="sag" />
      {b?.not && <Not t={t} bas={tUc + 0.5} metin={b.not} x={1860} y={500} hiza="sag" genislik={520} />}
      <Etiket t={t} bas={tYok} capa={[365, 560]} konum={[365, 270]} metin="NO PRUNES" renk={RENK.gri} />
      {/* 50 g grubu: görselde karşılığı yok, serbest hap */}
      <div style={{ position: "absolute", left: 690, top: 190, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800,
        fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>50 G A DAY</div>
      <Not t={t} bas={K(1, "five or six")} metin="≈ 5–6 PRUNES" x={690} y={228} hiza="orta" boyut={30} agirlik={800} renk={RENK.altin} />
      <Etiket t={t} bas={t100} capa={[1000, 540]} konum={[1000, 270]} metin="100 G A DAY" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "about ten")} metin="≈ 10 PRUNES" x={1290} y={600} boyut={30} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S12;
