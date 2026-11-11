// Sahne 19 — USPSTF 2018: üstte sol kağıt alanda başlık, masadaki nesnelere etiketler, 2018 rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "United States"), tPanel = K(0, "independent expert"), tRec = K(0, "recommendation"), t18 = K(0, "2018");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 56, 1720])}>
        <Etiket t={t} bas={tPanel} bitis={tRec} capa={[800, 390]} konum={[880, 190]} metin="EXPERT PANEL" renk={RENK.lacivert} />
        <Etiket t={t} bas={tRec} capa={[930, 615]} konum={[1180, 820]} metin="RECOMMENDATION" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={["U.S. PREVENTIVE", "SERVICES TASK FORCE"]} x={64} y={120} boyut={64} adim={0.35}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={t18} vurgu="2018" not="recommendation" x={1440} y={140} genislik={340} />
    </>
  );
};

export default S19;
