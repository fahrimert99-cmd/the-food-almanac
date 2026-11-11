// Sahne 22 — erken evre: küçük kazanç; ileri evrede daha çok yarar
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEarly = K(0, "early signs"), tTiny = K(0, "tiny"), tHelps = K(1, "helps most"), tAlong = K(1, "further along");
  const fade = tHelps - 0.25;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 60, 1720])} />
      <BaslikBlok t={t} bas={tEarly} bitis={fade} satirlar={["EARLY SIGNS"]} x={90} y={190} boyut={104} />
      <VurguRozet t={t} bas={tTiny} bitis={fade} vurgu="≈ 4" not="fewer in every 1,000" x={330} y={290} genislik={400} />
      <AdimAkisi t={t} x={470} y={210} boyut={26} numarali={false} adimlar={[
        { bas: tHelps, metin: "EARLY SIGNS", renk: RENK.gri },
        { bas: tAlong, metin: "FURTHER ALONG", renk: RENK.yesil },
      ]} />
      <BaslikBlok t={t} bas={tHelps + 0.2} satirlar={["HELPS MOST"]} x={90} y={350} boyut={96} renkler={[RENK.koyuYesil]} />
      <Etiket t={t} bas={K(1, "supplement")} capa={[950, 620]} konum={[560, 520]} metin="SUPPLEMENT" renk={RENK.altin} />
    </>
  );
};

export default S22;
