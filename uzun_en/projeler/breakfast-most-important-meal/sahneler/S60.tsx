// Sahne 60 — 60 yaş sonrası kas için toplam protein; sabah ilaçları için eczacıya sor
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMus = K(0, "muscle after 60"), tTot = K(0, "total protein"), tBr = K(0, "breakfast"), tMed = K(1, "morning medicines");
  const tAsk = K(1, "ask your pharmacist"), tTim = K(1, "before you change");
  const [sc, al] = pop(t, tTim, 0.5);
  const son0 = c[1].bas - 0.15;
  return (
    <>
      {/* kamera alt kenarı imzanın üstünde kalır */}
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 0, 1700], [140, 20, 1560])}>
        <Etiket t={t} bas={tBr} bitis={son0} capa={[900, 640]} konum={[1000, 380]} metin="BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={tMed} capa={[380, 520]} konum={[400, 330]} metin="MORNING MEDICINES" renk={RENK.lacivert} boyut={26} />
        {al > 0 && (
          <div style={{ position: "absolute", left: 1000, top: 190, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
            <Hap metin="TIMING FIRST" renk={RENK.mercan} boyut={36} />
          </div>
        )}
      </Kamera>
      <Baslik t={t} bas={tMus} bitis={tTot - 0.1} metin="MUSCLE AFTER 60" x={70} y={150} boyut={90} renk={RENK.altin} />
      <BaslikBlok t={t} bas={tTot} bitis={son0} satirlar={["TOTAL PROTEIN", "MATTERS MOST"]} x={70} y={140} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "PHARMACIST"]} x={1860} y={140} boyut={80} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S60;
