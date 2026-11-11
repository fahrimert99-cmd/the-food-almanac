// Sahne 46 — iyi desteklenenler: terazi görseli, üç madde, sonra 165°F.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDest = K(0, "supported"), tRaw = K(0, "raw chicken"), tSplash = K(0, "splashes");
  const tKitchen = K(0, "kitchens"), t165 = K(1, "165");
  const bit = K(1, "cooking") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* başlık altı: pencere çizgilerini yumuşat */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 760, height: 150,
          background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tRaw} bitis={bit} capa={[500, 640]} konum={[400, 400]} metin="RAW CHICKEN" renk={RENK.mercan} />
        <Etiket t={t} bas={t165} capa={[587, 330]} konum={[330, 250]} metin="THERMOMETER" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tDest} bitis={bit} metin="WELL SUPPORTED" x={70} y={80} boyut={84} renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" x={720} y={150} aralik={86} boyut={30} genislik={570}
        ogeler={[
          { bas: tRaw, metin: "RINSE ≠ SAFE", bitis: bit },
          { bas: tSplash, metin: "RINSE SPLASHES BACTERIA", bitis: bit },
          { bas: tKitchen, metin: "KITCHENS CONTAMINATED", bitis: bit },
        ]} />
      <VurguRozet t={t} bas={t165} vurgu="165°F" not="COOKING MAKES IT SAFE" x={960} y={80} genislik={470} renk={RENK.yesil} boyut={96} />
    </>
  );
};

export default S46;
