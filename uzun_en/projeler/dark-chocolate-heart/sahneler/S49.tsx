// Sahne 49 — bağımsız test sonuçları ve düşük kakao yüzdesi
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTest = K(1, "independent"), tMarka = K(1, "brand"), tDus = K(2, "lower"), t70 = K(2, "70");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1740])}>
        <Etiket t={t} bas={tMarka} capa={[1500, 700]} konum={[1520, 890]} metin="YOUR BRAND" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, tTest - 0.2, 0.6))} taraf="sol" genislik={760} />
      <BaslikBlok t={t} bas={tTest} satirlar={["INDEPENDENT", "TEST RESULTS"]} x={70} y={300} boyut={92} bitis={tDus - 0.1}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <BaslikBlok t={t} bas={tDus} satirlar={["LOWER CACAO", "PERCENTAGE"]} x={70} y={230} boyut={84}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={t70} vurgu="70 OVER 80" not="Consumer Reports suggests" x={360} y={470} genislik={560} boyut={96} />
    </>
  );
};

export default S49;
