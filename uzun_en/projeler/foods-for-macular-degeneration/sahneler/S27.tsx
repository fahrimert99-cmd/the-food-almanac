// Sahne 27 — AREDS2 ana sonuç: anlamlı yavaşlama yok
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; metin: string; renk: string }> = ({ t, bas, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return <div style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={32} /></div>;
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [40, 45, 1840], [90, 45, 1740])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "letdown")} metin="A LETDOWN" x={960} y={195} boyut={110} hiza="orta" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 280, display: "flex", justifyContent: "center", gap: 28 }}>
        <Cip t={t} bas={K(1, "5")} metin="ABOUT 5 YEARS" renk={RENK.lacivert} />
        <Cip t={t} bas={K(1, "lutein")} metin="LUTEIN + ZEAXANTHIN" renk={RENK.yesil} />
        <Cip t={t} bas={K(1, "omega-3s")} metin="OMEGA-3S" renk={RENK.altin} />
      </div>
      <Baslik t={t} bas={K(1, "significantly")} metin="NO SIGNIFICANT SLOWING" x={960} y={405} boyut={80} hiza="orta" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "compared")} metin="compared with placebo" x={960} y={450} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S27;
