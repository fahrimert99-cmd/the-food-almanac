// Sahne 21 — düşmeyi önlemek için D vitamini önerilmiyor; yüksek riskte egzersiz. Üst panelde başlıklar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAg = K(0, "against"), tFalls = K(0, "falls"), t65 = K(0, "65");
  const tRisk = K(1, "higher risk"), tEx = K(1, "exercise");
  const aUst = eout(ilerle(t, 0.2, 0.6));
  const bitis1 = K(1, "fall prevention") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [140, 40, 1640], [170, 80, 1560])}>
        <Etiket t={t} bas={tEx} capa={[740, 800]} konum={[1000, 640]} metin="EXERCISE" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 520, opacity: aUst,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(0.97)} 78%, ${kagit(0)} 100%)` }} />
      <BaslikBlok t={t} bas={tAg} bitis={bitis1} satirlar={["AGAINST", "VITAMIN D"]} x={80} y={190} boyut={104} adim={0.5}
        renkler={[RENK.mercan, RENK.lacivert]} />
      <Not t={t} bas={tFalls} bitis={bitis1} metin="to prevent falls · adults living at home" x={86} y={400} boyut={34} genislik={900} />
      <VurguRozet t={t} bas={t65} bitis={bitis1} vurgu="65+" not="adults, living at home" x={1300} y={130} genislik={400} />
      <BaslikBlok t={t} bas={tRisk} satirlar={["HIGHER FALL RISK"]} x={80} y={190} boyut={96} renkler={[RENK.lacivert]} />
    </>
  );
};

export default S21;
