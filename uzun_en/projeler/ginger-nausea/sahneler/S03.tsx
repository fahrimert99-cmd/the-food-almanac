// Sahne 3 — videonun vaadi: ne kadar almalı, kim önce sormalı
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(0, "who");
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1780])}>
        <Etiket t={t} bas={K(0, "know")} bitis={tAsk - 0.1} capa={[790, 660]} konum={[420, 840]} metin="GINGER ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "much")} bitis={tAsk - 0.1} capa={[1330, 700]} konum={[1500, 880]} metin="CAPSULES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "take,")} bitis={tAsk - 0.1} capa={[1110, 560]} konum={[1300, 380]} metin="GINGER TEA" renk={RENK.koyuYesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.3, 0.6))} taraf="sag" genislik={700} opak={0.8} />
      <BaslikBlok t={t} bas={K(0, "how")} bitis={tAsk - 0.1} satirlar={["HOW MUCH?"]} x={1860} y={170} boyut={100} hiza="sag" />
      <BaslikBlok t={t} bas={tAsk} satirlar={["WHO SHOULD", "ASK FIRST?"]} x={1860} y={170} boyut={100} hiza="sag" />
    </>
  );
};

export default S03;
