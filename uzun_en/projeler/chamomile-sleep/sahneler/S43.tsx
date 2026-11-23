// S43 — kan sulandırıcılar ve varfarin
import React from "react";
import { Baslik, eout, ilerle, kagit, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Etiket t={t} bas={K(0, "blood thinners")} capa={[700, 440]} konum={[520, 170]} metin="BLOOD THINNERS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "chamomile")} capa={[1330, 330]} konum={[1590, 150]} metin="CHAMOMILE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "warfarin")} capa={[840, 392]} konum={[1010, 150]} metin="WARFARIN" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 480, top: 810, width: 960, height: 130, borderRadius: 28, background: kagit(0.94), opacity: eout(ilerle(t, K(1, "reported"), 0.4)) }} />
      <Baslik t={t} bas={K(1, "reported")} metin="INTERACTIONS REPORTED" x={960} y={880} boyut={72} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};
export default S43;
