// Sahne 9 — NOVA grup 4: tanım listesi + raf nesnelerine etiketler.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tListeSon = K(1, "think") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [0, 40, 1780])}>
        {/* raf nesneleri: sağdaki boş kâğıda etiketler */}
        <Etiket t={t} bas={K(1, "soft drinks")} capa={[150, 300]} konum={[1130, 370]} metin="SOFT DRINKS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "packaged snacks")} capa={[420, 330]} konum={[1130, 480]} metin="PACKAGED SNACKS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "ready-to-heat")} capa={[500, 520]} konum={[1130, 590]} metin="READY MEALS" renk={RENK.yesil} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "NIH")} metin="GROUP FOUR" x={1860} y={210} boyut={128} renk={RENK.koyuYesil} hiza="sag" />
      {/* tanım: üç madde, söylendikçe gelir, sonraki cümleden önce solar */}
      <Liste t={t} x={1000} y={330} aralik={92} boyut={36} isaret="nokta" genislik={860} ogeler={[
        { bas: K(0, "cheap"), metin: "CHEAP INDUSTRIAL SOURCES", renk: RENK.altin, bitis: tListeSon },
        { bas: K(0, "sources of energy"), metin: "OF ENERGY + NUTRIENTS", renk: RENK.altin, bitis: tListeSon },
        { bas: K(0, "plus additives"), metin: "PLUS ADDITIVES", renk: RENK.mercan, bitis: tListeSon },
      ]} />
    </>
  );
};

export default S09;
