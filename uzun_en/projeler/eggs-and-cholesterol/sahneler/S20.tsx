// Sahne 20 — HDL +2.1 mg/dL, oran belirgin değişmedi. Terazi görseli; sağ alttaki imza kâğıt yamayla örtülü.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHdl = K(0, "HDL,"), tGood = K(0, "good"), t21 = K(0, "2.1"), tRatio = K(1, "ratio"), tNot = K(1, "did not");
  const [sc, al] = pop(t, tGood, 0.5);
  const [sn, an] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [60, 90, 1740])}>
        {/* imza kalıntısı */}
        <div style={{ position: "absolute", left: 1640, top: 985, width: 280, height: 95,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <BaslikBlok t={t} bas={tHdl} satirlar={s.meta.baslik!.satirlar} x={140} y={190} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} bitis={7.1} />
      <div style={{ position: "absolute", left: 146, top: 400, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * (t < 7.1 ? 1 : 0) }}>
        <Hap metin="SO-CALLED GOOD" renk={RENK.yesil} boyut={30} />
      </div>
      <VurguRozet t={t} bas={t21} vurgu="+2.1 MG/DL" not="HDL" x={1080} y={230} genislik={480} boyut={80} renk={RENK.yesil} bitis={7.1} />
      <Etiket t={t} bas={tRatio} capa={[960, 760]} konum={[640, 810]} metin="THE RATIO" renk={RENK.altin} />
      <div style={{ position: "absolute", left: 1330, top: 810, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an }}>
        <Hap metin="NO CLEAR CHANGE" renk={RENK.lacivert} boyut={32} />
      </div>
    </>
  );
};

export default S20;
