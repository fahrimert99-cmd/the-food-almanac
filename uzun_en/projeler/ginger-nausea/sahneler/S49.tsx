// Sahne 49 — kemoterapi çalışması: tedavi öncesi bulantı, birçok neden, zencefil tek araç.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKemo = K(0, "chemotherapy"), tSick = K(1, "feeling sick"), tLink = K(1, "strongly"), tNaus = K(1, "nausea");
  const tMany = K(2, "many causes"), tOne = K(2, "ginger");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [260, 120, 1500], [330, 160, 1400])}>
        <Etiket t={t} bas={tOne} capa={[1360, 570]} konum={[1500, 430]} metin="GINGER ROOT" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sol" genislik={900} />
      {/* 1. vuruş: kemoterapi çalışması */}
      <BaslikBlok t={t} bas={tKemo} satirlar={["CHEMOTHERAPY", "TRIAL"]} x={70} y={250} boyut={92} bitis={8.6} />
      <Not t={t} bas={tSick} metin="FEELING SICK BEFORE TREATMENT" x={76} y={470} boyut={36} renk={RENK.mercan} agirlik={800} bitis={8.6} />
      <Ikon t={t} bas={tLink} ad="ok" x={120} y={590} boyut={74} zemin={RENK.altin} bitis={8.6} />
      <Not t={t} bas={tNaus} metin="STRONGLY LINKED TO FIRST-DAY NAUSEA" x={185} y={565} boyut={36} agirlik={800} genislik={640} bitis={8.6} />
      {/* 2. vuruş: birçok neden, zencefil yalnızca bir araç */}
      <BaslikBlok t={t} bas={tMany} satirlar={["MANY CAUSES"]} x={70} y={300} boyut={96} renkler={[RENK.lacivert]} />
      <Not t={t} bas={tOne} metin="GINGER IS ONE TOOL" x={76} y={380} boyut={44} renk={RENK.koyuYesil} agirlik={800} />
    </>
  );
};

export default S49;
