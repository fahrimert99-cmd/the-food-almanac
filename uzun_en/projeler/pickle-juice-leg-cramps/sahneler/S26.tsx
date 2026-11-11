// Sahne 26 — çalışmanın gönüllüleri: sağlıklı genç erkekler, 60 yaş üstü değil.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(1, "not");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [50, 50, 1780])}>
        <Etiket t={t} bas={K(1, "volunteers")} bitis={tNot - 0.1} capa={[1250, 650]} konum={[1640, 560]} metin="VOLUNTEERS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "healthy")} bitis={tNot - 0.1} capa={[700, 870]} konum={[660, 700]} metin="HEALTHY YOUNG MEN" renk={RENK.yesil} boyut={24} />
        <Etiket t={t} bas={K(2, "studies")} capa={[470, 330]} konum={[800, 170]} metin="HIS STUDIES" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "healthy")} capa={[700, 870]} konum={[660, 700]} metin="ALL YOUNG MEN" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <BaslikBlok t={t} bas={tNot} satirlar={["NOT", "OLDER ADULTS"]} x={1860} y={190} boyut={92} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      <VurguRozet t={t} bas={K(1, "60")} vurgu="OVER 60" not="not in the study" x={1630} y={600} renk={RENK.mercan} genislik={330} boyut={76} />
    </>
  );
};

export default S26;
