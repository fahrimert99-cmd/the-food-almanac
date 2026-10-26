// Sahne 13 — NIH: yetersiz mide asidi ve intrinsik faktör eksikliği B12 emilimini zorlaştırır.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMide = K(0, "stomach"), tB12 = K(0, "B12"), tGastrit = K(1, "atrophic"), tHelper = K(1, "helper protein"), tFaktor = K(1, "intrinsic");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* görseldeki sahte alt yazıyı örter */}
        <div style={{ position: "absolute", left: 1090, top: 800, width: 560, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tMide} bitis={9.5} capa={[1380, 560]} konum={[1000, 330]} metin="NOT ENOUGH ACID" renk={RENK.mercan} />
        <Etiket t={t} bas={tB12} bitis={9.5} capa={[480, 560]} konum={[480, 330]} metin="B12 IN FOOD" renk={RENK.altin} />
        <Etiket t={t} bas={tHelper} bitis={16.6} capa={[1450, 380]} konum={[1050, 190]} metin="HELPER PROTEIN" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin="NIH · OFFICE OF DIETARY SUPPLEMENTS" bas={K(0, "National")} bitis={9.5} />
      <Not t={t} bas={tGastrit} metin="ATROPHIC GASTRITIS" x={140} y={110} boyut={34} renk={RENK.mercan} agirlik={800} />
      <BaslikBlok t={t} bas={tFaktor} satirlar={["INTRINSIC", "FACTOR"]} x={140} y={210} boyut={92} renkler={[RENK.lacivert, RENK.koyuYesil]} satirArasi={1.0} />
      <AdimAkisi t={t} x={570} y={430} boyut={28} numarali={false}
        adimlar={[{ bas: K(1, "B12 needs"), metin: "B12", renk: RENK.altin }, { bas: K(1, "needs"), metin: "INTRINSIC FACTOR", renk: RENK.yesil },
          { bas: K(1, "absorbed"), metin: "ABSORBED", renk: RENK.yesil }]} />
    </>
  );
};

export default S13;
