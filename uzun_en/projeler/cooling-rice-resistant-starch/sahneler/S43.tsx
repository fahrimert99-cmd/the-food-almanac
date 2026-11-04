// Sahne 43 — oda sıcaklığında bekleyen pirinç, çoğalan bakteri ve ısıya dayanıklı toksin.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTok = K(1, "toxin");
  const tKapat = tTok - 0.25;
  const pKart = eout(ilerle(t, tTok, 0.5));
  const [sc, al] = pop(t, K(1, "reheat"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1780])}>
        <Etiket t={t} bas={K(0, "rice")} bitis={tKapat} capa={[500, 650]} konum={[520, 400]} metin="COOKED RICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "room")} bitis={tKapat} capa={[1300, 760]} konum={[1010, 470]} metin="ROOM TEMPERATURE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "wake")} bitis={K(0, "multiply") - 0.15} capa={[1230, 160]} konum={[900, 150]} metin="SPORES WAKE UP" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "multiply")} bitis={tKapat} capa={[1230, 160]} konum={[900, 150]} metin="THEY MULTIPLY" renk={RENK.mercan} />
      </Kamera>
      {pKart > 0 && (
        <>
          <div style={{ position: "absolute", left: 60, top: 120, width: 800, height: 290, opacity: pKart, background: RENK.kagitAcik,
            borderRadius: 28, boxShadow: "0 14px 34px rgba(48,40,34,0.22)", border: `3px solid ${RENK.lacivert}` }} />
          <Baslik t={t} bas={tTok} metin="HEAT-STABLE" x={100} y={210} boyut={104} renk={RENK.lacivert} />
          <Baslik t={t} bas={tTok + 0.2} metin="TOXIN" x={100} y={326} boyut={104} renk={RENK.mercan} />
          <Ikon t={t} bas={tTok + 0.5} ad="uyari" x={780} y={265} boyut={96} zemin={RENK.altin} />
        </>
      )}
      <div style={{ position: "absolute", left: 60, top: 450, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="A QUICK REHEAT MAY NOT HELP" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S43;
