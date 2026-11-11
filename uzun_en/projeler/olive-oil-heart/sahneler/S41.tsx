// Sahne 41 — süzgeçte aynı yağ: altı kızartma sonrası ~%10 fenolik kalır.
import React from "react";
import { BaslikBlok, Etiket, Ikon, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAyni = K(0, "same oil"), tYuz = K(0, "10 percent"), tKir = K(0, "breakdown"), tRe = K(1, "Reusing");
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 70, 1760])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Etiket t={t} bas={tAyni} bitis={tRe - 0.3} capa={[720, 800]} konum={[1060, 905]} metin="SAME OIL, SIX ROUNDS" renk={RENK.altin} />
      <VurguRozet t={t} bas={tYuz} bitis={tRe - 0.3} vurgu="~10%" not="of phenolics remained" x={1500} y={110} genislik={440}
        boyut={92} renk={RENK.mercan} />
      <Etiket t={t} bas={tKir} bitis={tRe - 0.3} capa={[1330, 570]} konum={[1500, 330]} metin="OIL BREAKDOWN SIGNALS" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tRe} satirlar={["REUSING", "FRYING OIL"]} x={1860} y={170} boyut={88} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(1, "not")} ad="carpi" x={1000} y={760} boyut={96} zemin={RENK.mercan} />
    </>
  );
};

export default S41;
