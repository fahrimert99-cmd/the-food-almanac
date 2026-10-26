// Sahne 12 — deney: su, greyfurt suyu, portakal suyu bardakları ve felodipin tableti.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSu = K(1, "water"), tGrey = K(1, "grapefruit"), tPort = K(1, "orange");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [20, 60, 1880], [140, 130, 1700])}>
        <Etiket t={t} bas={K(0, "felodipine")} bitis={tSu - 0.1} capa={[260, 905]} konum={[380, 760]} metin="FELODIPINE" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSu} capa={[440, 560]} konum={[400, 290]} metin="WATER" renk="#4B8CA8" />
        <Etiket t={t} bas={tGrey} capa={[980, 620]} konum={[1070, 290]} metin="GRAPEFRUIT JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={tPort} capa={[690, 560]} konum={[670, 235]} metin="ORANGE JUICE" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "six")} bitis={K(0, "days") + 0.4} vurgu="6 MEN" not="borderline high blood pressure"
        x={1620} y={130} genislik={400} boyut={92} renk={RENK.lacivert} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S12;
