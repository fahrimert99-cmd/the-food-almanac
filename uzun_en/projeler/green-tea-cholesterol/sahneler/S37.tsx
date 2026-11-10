// Sahne 37 — çoğu hafif; Avrupa düzenleyicileri 2018
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMild = K(0, "mild"), tClear = K(1, "clear signal"), tEU = K(1, "European regulators"), t18 = K(1, "2018");
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1720])}>
        <Etiket t={t} bas={tMild} bitis={tClear - 0.2} capa={[1295, 330]} konum={[1560, 420]} metin="MOSTLY MILD" renk={RENK.yesil} />
        <Etiket t={t} bas={tEU} capa={[650, 330]} konum={[880, 140]} metin="EU REGULATORS" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={tClear} metin="A CLEAR SIGNAL" x={1860} y={170} boyut={76} renk={RENK.koyuYesil} hiza="sag" />
      <Baslik t={t} bas={t18} metin="2018" x={1860} y={260} boyut={76} renk={RENK.altin} hiza="sag" />
    </>
  );
};

export default S37;
