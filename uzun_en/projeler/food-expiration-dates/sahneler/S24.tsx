// Sahne 24 — Mama kutusu ve biberon: formülde tarih bir kuraldır.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tForm = K(0, "formula"), tRule = K(0, "rule rather"), tIf = K(1, "If you");
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 60, 1800])}>
        {/* sağ kenardaki sert kesiği kâğıtla yumuşat */}
        <div style={{ position: "absolute", left: 1110, top: 0, width: 810, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(1)} 50px, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={tForm} bitis={tRule + 1.4} capa={[467, 560]} konum={[1180, 330]} metin="INFANT FORMULA" renk={RENK.altin} />
        <Etiket t={t} bas={tRule} bitis={tIf - 0.1} capa={[853, 600]} konum={[1230, 640]} metin="A RULE, NOT A COURTESY" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tIf} satirlar={b.satirlar} x={1860} y={400} boyut={124} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S24;
