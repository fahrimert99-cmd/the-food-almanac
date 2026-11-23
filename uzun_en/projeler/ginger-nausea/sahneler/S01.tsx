// Sahne 1 — cerrahi sonrası %31 + yeni inceleme (karışık sonuç)
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "surgery");
  const tRozet = K(0, "30");
  const tYeni = K(1, "newer");
  const tMess = K(1, "messier");
  const bit = tYeni - 0.15;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1790])}>
        <Etiket t={t} bas={K(0, "ginger")} bitis={bit} capa={[520, 580]} konum={[560, 900]} metin="GINGER ROOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "trials")} bitis={bit} capa={[970, 380]} konum={[1140, 190]} metin="GINGER TEA" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.3} />
      <BaslikBlok t={t} bas={tBas} bitis={tYeni - 0.2} satirlar={["AFTER SURGERY"]} x={1860} y={330} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={tRozet} bitis={tYeni - 0.2} vurgu="–31%" not="nausea and vomiting risk in a 2006 review of five trials"
        x={1500} y={400} genislik={460} />
      {/* yeni inceleme: karışık tablo */}
      <BaslikBlok t={t} bas={tYeni} satirlar={["A NEWER REVIEW"]} x={1860} y={330} boyut={80} hiza="sag" />
      <Not t={t} bas={tMess} metin="4× the patients, a messier picture" x={1860} y={430} hiza="sag" genislik={640} boyut={38} />
    </>
  );
};

export default S01;
