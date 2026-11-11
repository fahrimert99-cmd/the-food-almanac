// Sahne 6 — kafein hafif idrar söktürücü; böbrekler ve fincan.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrue = K(2, "true");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "Caffeine")} bitis={K(1, "That") + 0.2} capa={[1180, 720]} konum={[1650, 640]} metin="CAFFEINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "kidneys")} bitis={tTrue - 0.2} capa={[800, 560]} konum={[760, 110]} metin="YOUR KIDNEYS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.25} satirlar={["CAFFEINE", "A MILD DIURETIC"]} x={1860} y={150} boyut={92} hiza="sag" />
      <Baslik t={t} bas={K(1, "more urine")} metin="→ MORE URINE" x={1860} y={420} boyut={64} renk={RENK.mercan} hiza="sag" />
      <Ikon t={t} bas={tTrue} ad="onay" x={1590} y={690} boyut={88} />
      <Baslik t={t} bas={tTrue} metin="TRUE" x={1860} y={690} boyut={80} renk={RENK.yesil} hiza="sag" />
      <Baslik t={t} bas={K(2, "where")} metin="WHERE THE" x={1860} y={800} boyut={56} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "myth")} metin="MYTH BEGINS" x={1860} y={864} boyut={56} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S06;
