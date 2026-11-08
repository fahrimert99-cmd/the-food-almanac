// Sahne 17 — Dürüst sınır: tehlikeli patojen bulunmadı; çalışma sıçrama yolunu gösteriyor.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDang = K(0, "dangerous"), tSo = K(1, "So");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={K(0, "relatives")} bitis={tSo - 0.2} capa={[440, 507]} konum={[800, 440]} metin="RELATIVES OF KNOWN GERMS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "study")} capa={[960, 720]} konum={[960, 540]} metin="THIS STUDY" renk={RENK.koyuYesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "fair,")} bitis={tDang - 0.2} metin="TO BE FAIR" x={1150} y={150} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <BaslikBlok t={t} bas={tDang} bitis={tSo - 0.2} satirlar={["NO DANGEROUS", "PATHOGENS FOUND"]} x={1150} y={140} boyut={84} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={K(1, "shows")} metin="SHOWS THE SPLASH ROUTE" x={1150} y={150} boyut={70} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={K(1, "not")} metin="NOT THE EXACT ILLNESS RISK" x={1150} y={235} boyut={70} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S17;
