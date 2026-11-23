// Sahne 26 — küçük çalışma + NIH merkezi: çoğu çalışma fayda göstermiyor.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTiny = K(0, "tiny"), t13 = K(0, "13"), tNih = K(1, "National"), tComp = K(1, "complementary"), tDont = K(1, "don't");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [50, 90, 1800])}>
        <Etiket t={t} bas={tTiny} bitis={t13 + 1.8} capa={[620, 520]} konum={[560, 270]} metin="TINY STUDY" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={t13} bitis={3.95} vurgu="13" not="PEOPLE, IN A LAB" x={1180} y={110} genislik={400} boyut={96} />
      <Baslik t={t} bas={tNih} metin="NIH CENTER" x={110} y={150} boyut={100} renk={RENK.lacivert} />
      <Not t={t} bas={tComp} metin="complementary health" x={116} y={230} boyut={34} />
      <Ikon t={t} bas={tDont} ad="carpi" x={1395} y={165} zemin={RENK.mercan} boyut={84} />
      <Baslik t={t} bas={tDont} metin="MOST STUDIES:" x={1860} y={125} boyut={64} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tDont + 0.2} metin="NO BENEFIT" x={1860} y={205} boyut={88} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(1, "motion")} metin="for motion sickness" x={1860} y={265} hiza="sag" boyut={32} genislik={500} />
    </>
  );
};

export default S26;
