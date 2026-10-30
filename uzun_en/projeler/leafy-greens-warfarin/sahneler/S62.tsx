// Sahne 62 — yeni kan sulandırıcılar: bu diyet kuralı yok; karar doktorla
import React from "react";
import { Etiket, Kamera, RENK, SP, Baslik, kameraYolu, kelimeZamani } from "../kutuphane";

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [150, 40, 1700], [260, 100, 1500])}>
        <Etiket t={t} bas={K(0, "apixaban")} capa={[620, 330]} konum={[420, 150]} metin="APIXABAN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "rivaroxaban")} capa={[800, 300]} konum={[1000, 130]} metin="RIVAROXABAN" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "carry")} capa={[1180, 520]} konum={[1500, 400]} metin="NO DIET RULE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "doctor.") - 0.8} capa={[700, 790]} konum={[1300, 750]} metin="YOU + YOUR DOCTOR" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "newer")} bitis={K(1, "but") } metin="NEWER BLOOD THINNERS" x={1860} y={170} boyut={64} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S62;
