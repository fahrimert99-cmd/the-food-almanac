// Sahne 52 — yaşla az mide asidi; atrofik gastrit %38 / %15.
import React from "react";
import { BaslikBlok, Baslik, CubukGrafik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = K(1, "older") - 0.3;
  const aP = eout(ilerle(t, t1, 0.7));
  return (
    <>
      {/* alttaki imza ve sağ kenar kusuru pencereyle dışarıda */}
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [110, 30, 1700], [150, 40, 1640])}>
        <Etiket t={t} bas={K(0, "stomach")} bitis={t1} capa={[1330, 560]} konum={[1520, 230]} metin="STOMACH ACID" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "free")} bitis={t1} capa={[560, 830]} konum={[740, 300]} metin="B12 IN FOOD" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.2} bitis={t1} satirlar={["WITH AGE:", "LESS ACID"]} x={70} y={100} boyut={84} />
      <Panel a={aP} taraf="sol" genislik={960} />
      <Baslik t={t} bas={K(1, "older")} metin="LOW B12" x={120} y={190} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "atrophic")} metin="OLDER ADULTS WITH ATROPHIC GASTRITIS" x={120} y={262} boyut={30} genislik={640} />
      <CubukGrafik t={t} bas={K(1, "38") - 0.4} x={140} y={440} w={700} h={340} maks={45} cubuklar={[
        { etiket: "GASTRITIS", deger: 38, metin: "38%", renk: RENK.mercan, bas: K(1, "38") - 0.6 },
        { etiket: "COMPARISON", deger: 15, metin: "15%", renk: RENK.yesil, bas: K(1, "15") - 0.6 },
      ]} />
      <Not t={t} bas={K(1, "versus")} metin="PORTER ET AL. · AJCN · 2021" x={140} y={900} boyut={24} renk="#585862" />
    </>
  );
};
export default S52;
