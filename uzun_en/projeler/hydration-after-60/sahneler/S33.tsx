// Sahne 33 — Doktorun sıvı sınırı önce gelir: sağda başlık, listede nedenler, sürahi ve steteskop etiketleri.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, ilerle, eout } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1790]);
  const tFirst = K(0, "first");
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pen} />
      <Etiket t={t} bas={K(0, "doctor")} capa={[615, 722]} konum={[470, 880]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "fluid limit")} capa={[1000, 560]} konum={[1480, 800]} metin="FLUID LIMIT" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "doctor")} metin="YOUR DOCTOR'S" x={1200} y={170} boyut={100} renk={RENK.lacivert} hiza="sol" />
      <Baslik t={t} bas={K(0, "limit,")} metin="LIMIT COMES" x={1200} y={282} boyut={100} renk={RENK.lacivert} hiza="sol" />
      <Baslik t={t} bas={tFirst} metin="FIRST" x={1200} y={394} boyut={100} renk={RENK.koyuYesil} hiza="sol" />
      <div style={{ position: "absolute", left: 1204, top: 462, height: 6, width: 260 * eout(ilerle(t, tFirst + 0.2, 0.6)), background: RENK.altin }} />
      <Not t={t} bas={K(0, "heart")} metin="HEART FAILURE" x={1200} y={530} boyut={34} agirlik={800} renk={RENK.lacivert} bitis={tFirst - 0.2} />
      <Not t={t} bas={K(0, "kidney")} metin="KIDNEY DISEASE" x={1200} y={584} boyut={34} agirlik={800} renk={RENK.lacivert} bitis={tFirst - 0.2} />
      <Not t={t} bas={K(0, "any other")} metin="ANY OTHER REASON" x={1200} y={638} boyut={34} agirlik={800} renk={RENK.lacivert} bitis={tFirst - 0.2} />
      <Not t={t} bas={K(1, "can't know")} metin="THIS VIDEO CAN'T KNOW YOUR SITUATION" x={1200} y={540} boyut={30} agirlik={800} renk={RENK.mercan} genislik={700} />
    </>
  );
};

export default S33;
