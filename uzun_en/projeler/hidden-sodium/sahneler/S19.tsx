// Sahne 19 — CDC raporu: 8.000+ kişi, ortalama 3.409 mg, sofra tuzu sayılmadı.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2017 = K(0, "2017"), t8000 = K(0, "8,000"), t3409 = K(1, "3,409"), tTuz = K(1, "table salt");
  const tNutri = K(0, "nutrition");
  const pen = kameraYolu(t, s.sure, [0, 10, 1920], [70, 50, 1780]);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={pen}>
        {/* sofra tuzu: görseldeki tuzluk */}
        <Etiket t={t} bas={tTuz} capa={[1700, 650]} konum={[1490, 880]} metin="NOT COUNTED" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={t2017} />
      <VurguRozet t={t} bas={t8000} vurgu="8,000+" not="people in the survey" x={960} y={150} genislik={520} bitis={tNutri + 5.6} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t3409} vurgu="3,409 MG" not="average sodium a day" x={960} y={150} genislik={560} renk={RENK.altin} />
    </>
  );
};

export default S19;
