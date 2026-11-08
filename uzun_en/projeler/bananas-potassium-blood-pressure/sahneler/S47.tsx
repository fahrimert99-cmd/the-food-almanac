// Sahne 47 — tuz ikameleri: solda tuzluk, sağda başlık ve maddeler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "Salt substitutes"), tLite = K(0, "lite salt"), tKCl = K(0, "potassium chloride");
  const tHar = K(1, "Harvard's"), tDoc = K(1, "a doctor"), tMed = K(1, "medicines");
  const [sc, al] = pop(t, tHar, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* sol alttaki imza kalıntısı */}
        <div style={{ position: "absolute", left: 0, top: 985, width: 200, height: 95,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tLite} capa={[400, 420]} konum={[860, 300]} metin="LITE SALT" renk={RENK.lacivert} />
        <Etiket t={t} bas={tKCl} capa={[440, 800]} konum={[960, 880]} metin="POTASSIUM CHLORIDE" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tSub} satirlar={["SALT", "SUBSTITUTES"]} x={1860} y={230} boyut={100} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tSub + 0.9} metin="ask before using them" x={1860} y={440} hiza="sag" boyut={36} genislik={700} />
      <div style={{ position: "absolute", left: 1000, top: 560, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="HARVARD NUTRITION SOURCE" renk={RENK.lacivert} boyut={30} />
      </div>
      <Liste t={t} isaret="onay" x={1000} y={650} aralik={96} boyut={38} genislik={860}
        ogeler={[{ bas: tDoc, metin: "CHECK WITH A DOCTOR" }, { bas: tMed, metin: "ON POTASSIUM-RAISING MEDICINES", renk: RENK.altin }]} />
    </>
  );
};

export default S47;
