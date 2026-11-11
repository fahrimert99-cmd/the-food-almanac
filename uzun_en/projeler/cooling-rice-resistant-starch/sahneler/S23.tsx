// Sahne 23 — büküm: kazanç çoğunlukla haşlama (parboiling) kaynaklı, soğutma farkı anlamlı değil.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, ANTON, INTER, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKart = K(1, "not statistically");
  const kartBitis = K(2, "In") - 0.1;
  const [sc, al] = pop(t, tKart, 0.55);
  const a = t < kartBitis ? al : Math.max(0, 1 - (t - kartBitis) / 0.4) * al;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])}>
        <Etiket t={t} bas={K(1, "fresh parboiled")} capa={[400, 520]} konum={[700, 250]} metin="FRESH PARBOILED" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "cooled parboiled")} bitis={kartBitis} capa={[1200, 380]} konum={[1640, 250]} metin="COOLED" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "parboiling")} capa={[420, 480]} konum={[900, 780]} metin="PARBOILING" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "twist")} bitis={K(1, "gap")} metin="THE TWIST" x={1830} y={800} boyut={90} renk={RENK.koyuYesil} hiza="sag" />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1380, top: 700, transform: `translate(-50%, 0) scale(${sc})`, opacity: a, width: 640,
          padding: "16px 20px 20px", textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 26,
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
          <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: RENK.altin }}>COOLING GAP</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert }}>NOT STATISTICALLY SIGNIFICANT</div>
        </div>
      )}
      <BaslikBlok t={t} bas={K(2, "parboiling")} satirlar={s.meta.baslik!.satirlar} x={1830} y={700} boyut={100} hiza="sag" />
      <Not t={t} bas={K(2, "not from")} metin="not the cooling" x={1830} y={870} hiza="sag" boyut={36} agirlik={700} genislik={520} />
    </>
  );
};

export default S23;
