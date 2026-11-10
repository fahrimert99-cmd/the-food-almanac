// Sahne 42 — "Well supported": ekmek, yumurta, reçel; sağ panelde onaylı üç madde.
import React from "react";
import { BaslikBlok, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// masadaki bozuk yazılı küçük çıkartmaları boş çıkartmayla değiştirir
const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h, borderRadius: "50%",
    background: "#F4F1E8", border: "2px solid #2a2a2a" }} />
);

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1760])}>
        <Yama x={137} y={759} w={104} h={38} />
        <Yama x={563} y={779} w={104} h={38} />
        <Yama x={893} y={730} w={104} h={38} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={0.1} satirlar={["WELL", "SUPPORTED"]} x={1860} y={240} boyut={120} hiza="sag" />
      <Liste t={t} x={1130} y={520} aralik={110} boyut={32} isaret="onay" genislik={730} ogeler={[
        { bas: K(0, "infant formula"), metin: "INFANT FORMULA: THE EXCEPTION", renk: RENK.altin },
        { bas: K(0, "federal regulations"), metin: "NO FEDERAL DATE REQUIRED" },
        { bas: K(0, "USDA"), metin: "USDA: DON'T TOSS SAFE FOOD" },
      ]} />
    </>
  );
};

export default S42;
