// Sahne 12 — insan çalışmaları kısaydı: kum saati, sağda başlık ve rozet.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDays = K(0, "two days"), tYears = K(0, "two years"), tShort = K(0, "short,"), tDis = K(0, "disease"), tThree = K(1, "three"), tNo = K(1, "no significant");
  const [sc, al] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={tShort} bitis={tDays + 0.6} capa={[450, 230]} konum={[860, 120]} metin="SHORT STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={tDis} bitis={tThree - 0.2} capa={[450, 720]} konum={[860, 900]} metin="NOT LONG ENOUGH" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tDays} metin="2 DAYS TO" x={1860} y={200} boyut={110} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tYears} metin="2 YEARS" x={1860} y={320} boyut={110} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tYears + 0.3} metin="the longest human studies" x={1860} y={395} hiza="sag" boyut={34} />
      <VurguRozet t={t} bas={tThree} vurgu="3" not="LOOKED AT CLINICAL OUTCOMES" x={1560} y={480} genislik={500} boyut={110} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1560, top: 760, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="NO SIGNIFICANT DIFFERENCES" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S12;
