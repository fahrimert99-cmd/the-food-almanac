// Sahne 12 — veri toplama: hatırlatma defteri, numune kavanozu, tuzluk, ocak; sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tRec = K(0, "24-hour"), tNum = K(1, "duplicate"), tMasa = K(1, "table"), tPis = K(1, "cooking"), tOlc = K(1, "measure it");
  const [sc, al] = pop(t, tOlc, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tRec} bitis={7.2} capa={[850, 900]} konum={[1380, 870]} metin="FOUR 24-HOUR RECALLS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tNum} bitis={10.8} capa={[240, 790]} konum={[330, 905]} metin="DUPLICATE SAMPLE" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tMasa} bitis={12.4} capa={[570, 600]} konum={[1330, 600]} metin="SALT AT THE TABLE" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tPis} capa={[800, 330]} konum={[1330, 440]} metin="COOKING AT HOME" renk={RENK.altin} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.4} satirlar={b.satirlar} x={1860} y={160} boyut={96} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 740, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="MEASURED DIRECTLY" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S12;
