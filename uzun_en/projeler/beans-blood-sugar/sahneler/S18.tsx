import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Risk skoru: defter + kalp; ikinci cümlede "hesaplama" uyarısı
const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const b2 = K(1, "Keep");
  const sc = 1 + 0.06 * Math.sin(t * 3);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={pencere}>
        <Etiket t={t} bas={K(0, "heart")} bitis={b2 - 0.1} capa={[870, 480]} konum={[400, 880]} metin="ESTIMATED RISK SCORE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "legume")} bitis={b2 - 0.1} capa={[1380, 330]} konum={[1500, 560]} metin="LEGUME DIET" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Mostly")} bitis={b2 - 0.1} metin="MOSTLY BECAUSE" x={110} y={140} boyut={70} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Mostly") + 0.2} bitis={b2 - 0.1} metin="OF THAT" x={110} y={220} boyut={70} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "0.8")} bitis={b2 - 0.1} vurgu="–0.8%" not="estimated heart disease risk score" x={1560} y={720} genislik={470} renk={RENK.koyuYesil} />
      <Panel a={eout(ilerle(t, b2 - 0.3, 0.6))} taraf="sol" genislik={1000} />
      <Baslik t={t} bas={K(1, "calculation")} metin="A CALCULATION," x={110} y={400} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT A COUNT" x={110} y={510} boyut={92} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "actual")} x={110} y={620} boyut={36} agirlik={800} metin="of actual heart attacks" />
    </>
  );
};
export default S18;
