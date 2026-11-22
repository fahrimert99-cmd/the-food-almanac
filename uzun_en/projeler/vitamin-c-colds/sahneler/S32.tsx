// Sahne 32 — ebeveynler/büyükanne-büyükbabalar: çocuk nezlesi %14 kısa; çocuk üst sınırı daha düşük.
import React from "react";
import { BaslikBlok, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const aPanel = eout(ilerle(t, 0.2, 0.7));
  const tCik = c[1].bas - 0.15;
  const tLim = K(1, "upper limits");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [10, 0, 1760])} />
      <Panel a={aPanel} taraf="sag" genislik={920} opak={0.98} />
      <BaslikBlok t={t} bas={K(0, "parents")} bitis={tCik} satirlar={["PARENTS &", "GRANDPARENTS"]} x={1860} y={250} boyut={84} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "14")} bitis={tCik} vurgu="–14%" not="CHILDREN'S COLDS SHORTER" x={1560} y={470} genislik={440} boyut={120} />
      <Not t={t} bas={K(0, "daily")} bitis={tCik} metin="WITH DAILY VITAMIN C" x={1860} y={760} hiza="sag" boyut={34} agirlik={800} />
      <BaslikBlok t={t} bas={tLim} satirlar={["LOWER LIMITS", "FOR CHILDREN"]} x={1860} y={250} boyut={84} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} ogeler={[{ bas: K(1, "pediatrician"), metin: "ASK A PEDIATRICIAN", renk: RENK.yesil }]} x={1260} y={560}
        isaret="onay" boyut={38} genislik={600} />
      <Not t={t} bas={K(1, "high-dose")} metin="BEFORE HIGH-DOSE SUPPLEMENTS" x={1260} y={650} boyut={32} agirlik={800} genislik={600} />
    </>
  );
};

export default S32;
