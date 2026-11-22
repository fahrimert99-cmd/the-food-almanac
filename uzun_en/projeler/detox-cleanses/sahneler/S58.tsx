// Sahne 58 — tam gıdalar masası: karaciğere yardım eden sade alışkanlıklar.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTam = K(0, "whole plant");
  const tAlk = K(0, "alcohol");
  const tSek = K(0, "sugary");
  const tKilo = K(0, "gradual");
  const tDok = K(0, "your doctor");
  const tSor = K(1, "ask");
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [130, 80, 1680])}>
        <Etiket t={t} bas={tTam} bitis={tAlk - 0.1} capa={[700, 480]} konum={[640, 105]} metin="WHOLE PLANT FOODS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "what helps")} bitis={tTam - 0.1} metin="WHAT HELPS YOUR LIVER" x={80} y={110} boyut={68} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAlk} bitis={tKilo - 0.15} metin="LESS ALCOHOL" x={1860} y={110} boyut={68} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={tSek} bitis={tKilo - 0.15} metin="& SUGARY DRINKS" x={1860} y={186} boyut={68} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={tKilo} bitis={tSor - 0.1} metin="GRADUAL WEIGHT LOSS" x={1860} y={110} boyut={68} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tDok} bitis={tSor - 0.1} metin="IF YOUR DOCTOR ADVISES IT" x={1860} y={160} hiza="sag" boyut={34} agirlik={800} />
      {/* son başlığın altında kâğıt yaması (yaprak karmaşasını örter) */}
      <div style={{ position: "absolute", left: 300, top: 0, width: 1320, height: 230, opacity: eout(ilerle(t, tSor - 0.1, 0.4)),
        background: `radial-gradient(ellipse 60% 70% at 50% 45%, ${kagit(0.95)} 0%, ${kagit(0.8)} 55%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tSor} metin="ASK BEFORE CHANGING ANYTHING" x={960} y={110} boyut={80} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S58;
