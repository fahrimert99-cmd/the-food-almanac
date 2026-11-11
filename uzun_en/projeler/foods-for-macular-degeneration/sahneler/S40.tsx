// Sahne 40 — terazi: ıspanak kasesi ve hap şişesi; 12 mg, formül yerine geçmez, denenen şey hap.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "But"), t2 = K(2, "trials");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])} />
      {/* 1. cümle: ıspanak, hap dozu, 12 mg */}
      <Etiket t={t} bas={K(0, "more")} bitis={t1} capa={[460, 400]} konum={[250, 250]} metin="SPINACH" renk={RENK.yesil} />
      <Etiket t={t} bas={K(0, "daily")} bitis={t1} capa={[1360, 420]} konum={[1130, 200]} metin="DAILY PILL DOSE" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "12")} bitis={t1} vurgu="12 MG" not="lutein + zeaxanthin" x={1660} y={250} genislik={380} />
      {/* 2. cümle: başlık */}
      <BaslikBlok t={t} bas={t1 + 0.1} bitis={t2 - 0.1} satirlar={["NO REPLACING", "THE FORMULA"]} x={860} y={100} boyut={80}
        hiza="orta" renkler={[RENK.lacivert, RENK.mercan]} />
      {/* 3. cümle: denenen şey */}
      <Etiket t={t} bas={K(2, "pills")} capa={[1360, 420]} konum={[1500, 190]} metin="TRIALS: PILLS" renk={RENK.altin} />
      <Etiket t={t} bas={K(2, "greens")} capa={[460, 400]} konum={[250, 250]} metin="NOT THE GREENS" renk={RENK.yesil} />
    </>
  );
};

export default S40;
