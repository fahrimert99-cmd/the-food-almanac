// Sahne 41 — kanıtın sınırı: sol altta masa, sağ boş kâğıt alanında yazılar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(0, "proves"), tBan = K(0, "bananas"), tInme = K(0, "strokes"), tKalp = K(0, "heart attacks");
  const tKohort = K(1, "cohort studies"), tTuz = K(1, "salt trial"), tBaslik = K(1, "encouraging");
  const cikis = tBaslik - 0.15;
  const [sc, al] = pop(t, tTuz, 0.5);
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tBan} bitis={4.7} capa={[640, 945]} konum={[1020, 880]} metin="BANANA" renk={RENK.altin} />
        <Etiket t={t} bas={tKohort} capa={[570, 730]} konum={[1010, 640]} metin="COHORT STUDIES" renk={RENK.lacivert} />
      </Kamera>
      {/* 1. cümle: kanıtlanmamış iddialar */}
      <Baslik t={t} bas={tNot} bitis={4.7} metin="NOT PROVEN" x={1000} y={250} boyut={84} renk={RENK.mercan} />
      <Liste t={t} isaret="carpi" x={1000} y={340} aralik={96} boyut={42} genislik={800}
        ogeler={[{ bas: tInme, metin: "STROKES", renk: RENK.mercan, bitis: 4.7 }, { bas: tKalp, metin: "HEART ATTACKS", renk: RENK.mercan, bitis: 4.7 }]} />
      {/* 2. cümle: kohort + tuz denemesi */}
      {al > 0 && t < cikis + 0.6 && (
        <div style={{ position: "absolute", left: 1000, top: 770, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * (t > cikis ? Math.max(0, 1 - (t - cikis) / 0.5) : 1) }}>
          <Hap metin="SALT TRIAL" renk={RENK.altin} boyut={32} />
        </div>
      )}
      {/* sonuç başlığı */}
      <BaslikBlok t={t} bas={tBaslik} satirlar={["ENCOURAGING,", "NOT FINAL"]} x={1860} y={300} boyut={104} hiza="sag"
        renkler={[RENK.koyuYesil, RENK.lacivert]} />
    </>
  );
};

export default S41;
