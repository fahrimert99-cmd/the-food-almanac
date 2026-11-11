// Sahne 9 — ekmek → glikoz → insülin zinciri.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Hap, Kamera, Parcaciklar, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = pop(t, K(1, "rises,") - 0.1, 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 100, 1730])}>
        {/* kalem üzerindeki bozuk yazıyı kapatan yama */}
        <div style={{ position: "absolute", left: 1415, top: 915, width: 215, height: 60,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #F1EFE9 0%, #EDEBE4 70%, rgba(237,235,228,0) 100%)" }} />
        <Etiket t={t} bas={K(1, "starch")} bitis={K(1, "glucose,") - 0.1} capa={[760, 640]} konum={[900, 360]} metin="STARCH" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "glucose,")} bitis={K(1, "rises,") + 1.2} capa={[565, 225]} konum={[850, 300]} metin="GLUCOSE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "insulin")} capa={[1690, 905]} konum={[1500, 720]} metin="INSULIN" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(1, "insulin") + 0.2} kaynak={[1350, 920]} hedef={[760, 700]} adet={14} aralik={0.17} omur={1.8}
          renk={RENK.yesil} boyut={7} kavis={-120} tohum="ins" />
      </Kamera>
      <BaslikBlok t={t} bas={0.1} bitis={c[1].bas - 0.1} satirlar={["BREAD", "→ GLUCOSE"]} x={1850} y={230} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.altin]} />
      <AdimAkisi t={t} x={1330} y={140} boyut={30} numarali={false} adimlar={[
        { bas: K(1, "glucose,"), metin: "GLUCOSE", renk: RENK.altin },
        { bas: K(1, "insulin"), metin: "INSULIN", renk: RENK.yesil },
        { bas: K(1, "cells."), metin: "CELLS", renk: RENK.lacivert },
      ]} />
      <div style={{ position: "absolute", left: 1330, top: 262, transform: `translate(-50%,-50%) scale(${pen[0]})`, opacity: pen[1] }}>
        <Hap metin="BLOOD SUGAR RISES ↑" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S09;
