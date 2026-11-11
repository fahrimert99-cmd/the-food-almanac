// Sahne 3 — hap kutusundaki bozuk yazılar sol kâğıt panelle örtülü; kamera şişe ve gözlüğe odaklı.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(0, "which") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [620, 110, 1300], [650, 100, 1270])}>
        <Etiket t={t} bas={K(0, "multivitamin")} bitis={t2 + 0.4} capa={[1215, 520]} konum={[1660, 330]} metin="MULTIVITAMIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "after")} capa={[1560, 725]} konum={[1660, 560]} metin="AFTER 60" renk={RENK.koyuYesil} />
      </Kamera>
      {/* sol panel: organizer üzerindeki sahte yazıları tamamen örter */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 760,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 86%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "what")} bitis={t2} metin="WHAT IT" x={56} y={300} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "what") + 0.18} bitis={t2} metin="MAY DO" x={56} y={410} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "two")} metin="TWO" x={56} y={300} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "nutrients")} metin="NUTRIENTS" x={56} y={410} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "closer")} metin="A CLOSER LOOK" x={60} y={500} boyut={44} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S03;
