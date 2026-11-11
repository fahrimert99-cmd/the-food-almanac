// Sahne 1 — kaynayan tencere, sağ panelde başlık ve –68% rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, Parcaciklar, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(1, "frozen vegetables");
  const pPanel = eout(ilerle(t, tBaslik - 0.5, 0.8));
  const cikis = tBaslik - 0.3;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 60, 1760], [60, 90, 1640])}>
        <Etiket t={t} bas={K(0, "Boil")} bitis={cikis} capa={[500, 440]} konum={[1000, 250]} metin="BOILING WATER" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "vegetables")} bitis={cikis} capa={[640, 520]} konum={[1020, 440]} metin="CARROT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "vitamin")} bitis={cikis} capa={[350, 430]} konum={[330, 190]} metin="BROCCOLI" renk={RENK.yesil} />
        <Parcaciklar t={t} bas={K(0, "folate")} kaynak={[500, 470]} hedef={[900, 150]} adet={14} aralik={0.2} omur={1.8} tohum="s1" />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <KaynakEtiketi t={t} metin="Bureau et al. · LWT · 2015" bas={tBaslik} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["BOILED", "VEGETABLES"]} x={1860} y={290} boyut={100} hiza="sag" />
      <Not t={t} bas={K(1, "13")} metin="13 frozen vegetables" x={1860} y={525} hiza="sag" boyut={34} genislik={600} />
      <VurguRozet t={t} bas={K(1, "68")} vurgu="–68%" not="folate lost on average" x={1560} y={600} genislik={420} />
    </>
  );
};

export default S01;
