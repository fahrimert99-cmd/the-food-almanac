// Sahne 18 — zaman çizgisi (önce / sırasında / sonra) + numune, mikrobiyom, bağışıklık etiketleri.
import React from "react";
import { AdimAkisi, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOnce = K(0, "before"), tSira = K(0, "during"), tSonra = K(0, "four");
  const tNum = K(0, "samples"), tMik = K(0, "microbiome"), tBag = K(0, "immune");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tNum} bitis={tMik} capa={[780, 440]} konum={[700, 250]} metin="SAMPLES" renk={RENK.altin} />
        <Etiket t={t} bas={tMik} capa={[1300, 420]} konum={[1620, 250]} metin="MICROBIOME" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tBag} capa={[880, 740]} konum={[1500, 800]} metin="IMMUNE SYSTEM" renk={RENK.mercan} />
      </Kamera>
      <AdimAkisi t={t} x={540} y={120} boyut={30} numarali={false} adimlar={[
        { bas: tOnce, metin: "BEFORE", renk: RENK.altin },
        { bas: tSira, metin: "DURING", renk: RENK.yesil },
        { bas: tSonra, metin: "4 WEEKS AFTER", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S18;
