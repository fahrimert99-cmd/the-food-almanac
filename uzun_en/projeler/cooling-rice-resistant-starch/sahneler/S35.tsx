// Sahne 35 — dört sonuç: tabakların altında rozetler.
import React from "react";
import { Baslik, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "numbers"), t18 = K(1, "18 percent"), t6 = K(2, "six milligrams"), t4 = K(3, "4 percent"), tPot = K(4, "no clear drop");
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 60, 1920], [50, 90, 1800])} />
      <Baslik t={t} bas={tBas - 0.3} metin="SMALL" x={1860} y={140} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tBas - 0.1} metin="EFFECTS" x={1860} y={256} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t18} vurgu="–18%" not="RICE TRIAL" x={300} y={740} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t6} vurgu="≈ 6 MG/DL" not="ANOTHER TRIAL" x={727} y={740} renk={RENK.yesil} boyut={80} />
      <VurguRozet t={t} bas={t4} vurgu="–4%" not="PASTA" x={1127} y={740} renk={RENK.altin} />
      <VurguRozet t={t} bas={tPot} vurgu="NO CLEAR DROP" not="POTATOES" x={1620} y={460} renk={RENK.mercan} boyut={54} genislik={420} />
    </>
  );
};

export default S35;
