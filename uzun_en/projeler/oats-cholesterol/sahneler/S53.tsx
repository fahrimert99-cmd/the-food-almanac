// Sahne 53 — kavuz türleri karşılaştırılmadı, gece yulafı test edilmedi, şekerli ekler.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCik = K(1, "toppings") - 0.2;
  const tMetin = K(0, "cholesterol,");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "Steel-cut")} bitis={tCik} capa={[410, 770]} konum={[410, 895]} metin="STEEL-CUT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "rolled")} bitis={tCik} capa={[960, 800]} konum={[960, 905]} metin="ROLLED" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "instant")} bitis={tCik} capa={[1500, 770]} konum={[1500, 895]} metin="INSTANT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "overnight")} bitis={tCik} capa={[1000, 330]} konum={[1640, 260]} metin="OVERNIGHT OATS" renk={RENK.lacivert} />
      </Kamera>
      {/* 1. vuruş: karşılaştırılmadı */}
      <Baslik t={t} bas={K(0, "compared")} bitis={tCik} metin="NOT COMPARED" x={70} y={160} boyut={80} renk={RENK.lacivert} />
      <Not t={t} bas={tMetin} bitis={tCik} metin="ON CHOLESTEROL" x={74} y={225} boyut={36} agirlik={800} renk={RENK.koyuYesil} />
      {/* 2. vuruş: gece yulafı test edilmedi */}
      <Baslik t={t} bas={K(0, "tested.")} bitis={tCik} metin="NOT TESTED" x={1860} y={400} boyut={74} renk={RENK.mercan} hiza="sag" />
      {/* 3. vuruş: şekerli ekler */}
      <Baslik t={t} bas={K(1, "toppings")} metin="WATCH THE" x={70} y={160} boyut={56} renk={RENK.gri} font="inter" aralik={4} />
      <Baslik t={t} bas={K(1, "sugary")} metin="SUGARY" x={70} y={250} boyut={92} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "sugary") + 0.2} metin="TOPPINGS" x={70} y={350} boyut={92} renk={RENK.lacivert} />
    </>
  );
};

export default S53;
