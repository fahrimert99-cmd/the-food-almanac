// Sahne 49 — 3. ipucu: dişleri ve boğazı koru. Solda nesneler, sağda başlık + üç maddelik liste.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(2, "diluted")} bitis={K(2, "and") } capa={[520, 470]} konum={[800, 130]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "plain water")} capa={[640, 830]} konum={[1010, 900]} metin="PLAIN WATER" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={290} boyut={92} hiza="sag" />
      <Liste t={t} x={1180} y={560} aralik={104} boyut={36} isaret="onay" genislik={680} ogeler={[
        { bas: K(2, "diluted"), metin: "DILUTE IT", renk: RENK.yesil },
        { bas: K(2, "don't sip"), metin: "NO SLOW SIPPING", renk: RENK.mercan },
        { bas: K(2, "rinse"), metin: "RINSE WITH WATER", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S49;
