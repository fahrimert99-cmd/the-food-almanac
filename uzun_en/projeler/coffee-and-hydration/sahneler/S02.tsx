// Sahne 2 — terazi: kahve günleri ve su günleri toplam vücut suyu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  const tSayi = K(0, "51.5");
  return (
    <>
      <Kamera gorsel="tam/02" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 36, 1800])}>
        <Etiket t={t} bas={K(0, "coffee days")} capa={[310, 560]} konum={[230, 800]} metin="COFFEE DAYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "water days")} capa={[800, 570]} konum={[990, 790]} metin="WATER DAYS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tSayi} satirlar={["51.5 VS 51.4", "KILOGRAMS"]} x={1860} y={360} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "almost identical") - 0.1} vurgu={m.baslik?.vurgu ?? "≈ SAME"} not="daily urine output" x={1500} y={640} boyut={100} genislik={440} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S02;
