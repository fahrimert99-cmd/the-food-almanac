// Sahne 44 — Yol 1: günde yaklaşık 3 g, iki porsiyon, gün içine bölünebilir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(1, "three grams");
  const tIki = K(2, "two servings");
  const tSabah = K(2, "breakfast");
  const tGec = K(2, "later in the day");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1760])}>
        {/* sol kase: sabah, sağ kase: günün ilerisi */}
        <Etiket t={t} bas={tSabah - 0.1} capa={[313, 530]} konum={[330, 340]} metin="BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={tGec - 0.1} capa={[713, 575]} konum={[760, 850]} metin="LATER IN THE DAY" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={0.1} satirlar={["ONE:", "3 GRAMS"]} x={1860} y={250} boyut={112} hiza="sag" adim={tUc - 0.1} />
      <VurguRozet t={t} bas={tIki} vurgu="≈ 2" not="servings of oatmeal" x={1560} y={540} genislik={420} boyut={120} />
    </>
  );
};

export default S44;
