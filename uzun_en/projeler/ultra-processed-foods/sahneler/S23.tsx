// Sahne 23 — sonuç: UPF menüsü felaket değil ama az işlenmiş menü ~1 puan daha iyi.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = 5.6, cik2 = 8.3;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [100, 50, 1700])}>
        <Etiket t={t} bas={K(0, "ultra-processed")} bitis={cik} capa={[1250, 240]} konum={[1250, 100]} metin="ULTRA-PROCESSED" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "less processed")} capa={[480, 560]} konum={[480, 400]} metin="LESS PROCESSED" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.4} />
      <Baslik t={t} bas={K(0, "healthy-eating")} bitis={cik2} metin="BUILT ON HEALTHY-EATING GUIDANCE" x={60} y={140} boyut={34} font="inter" renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "wasn't")} bitis={cik2} metin="NOT A DISASTER" x={60} y={230} boyut={104} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "one")} vurgu="≈ 1 POINT" not="OF BODY WEIGHT" x={1750} y={420} genislik={300} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S23;
