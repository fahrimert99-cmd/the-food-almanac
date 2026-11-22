// Sahne 45 — yağlı karaciğer: sağlıklı beslenme ve porsiyon kontrolü
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kelimeZamani, kameraYolu } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820]);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={w}>
        <Etiket t={t} bas={K(0, "eating healthfully")} bitis={K(0, "controlling") - 0.1} capa={[420, 330]} konum={[700, 190]} metin="EATING HEALTHFULLY" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={K(0, "controlling")} capa={[640, 760]} konum={[640, 910]} metin="CONTROLLING PORTIONS" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(0, "fatty liver")} bitis={c[1].bas - 0.1} capa={[1300, 720]} konum={[1250, 900]} metin="LIVER" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? "NIDDK · FATTY LIVER (NAFLD)"} bas={K(0, "NIDDK")} />
      <Baslik t={t} bas={K(0, "fatty liver")} metin="FATTY LIVER" x={1130} y={150} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "24 percent")} vurgu="24%" not="of American adults, by expert estimates" x={1290} y={230} genislik={340} />
    </>
  );
};

export default S45;
