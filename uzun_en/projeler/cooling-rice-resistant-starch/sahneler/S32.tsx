// Sahne 32 — Direnç nişastası tip 1-2 düşürdü; tip 3 (soğutma) kanıtlanmadı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "resistant") - 0.1} bitis={4.7} capa={[440, 800]} konum={[1180, 830]} metin="RESISTANT STARCH" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(1, "after-meal") - 0.1} capa={[800, 300]} konum={[1000, 640]} metin="AFTER-MEAL GLUCOSE" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Liste t={t} isaret="onay" x={1100} y={200} aralik={100} boyut={42} ogeler={[
        { bas: K(0, "1"), metin: "TYPE 1", bitis: 4.7 },
        { bas: K(0, "2"), metin: "TYPE 2", bitis: 4.7 },
      ]} />
      <Not t={t} bas={K(0, "lowered")} bitis={4.7} metin="lowered blood sugar after meals" x={1100} y={410} boyut={36} agirlik={700} genislik={760} />
      <Baslik t={t} bas={K(1, "type")} metin={b.satirlar[0]} x={1100} y={230} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "no")} metin={b.satirlar[1]} x={1100} y={355} boyut={120} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "significant")} metin={b.not ?? ""} x={1100} y={450} boyut={34} agirlik={700} genislik={740} />
      <Ikon t={t} bas={K(1, "more")} ad="soru" x={1160} y={800} zemin={RENK.altin} />
      <Baslik t={t} bas={K(1, "more")} metin="MORE RESEARCH NEEDED" x={1235} y={800} boyut={60} renk={RENK.altin} />
    </>
  );
};

export default S32;
