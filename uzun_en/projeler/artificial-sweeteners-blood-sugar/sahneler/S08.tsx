// Sahne 8 — "şeker yok, sıçrama yok?" beklentisi; sonra araştırmacıların sorusu.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const cik = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "should")} capa={[440, 380]} konum={[900, 150]} metin="DIET SODA" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "expectation") - 0.1} bitis={cik} metin="THE SIMPLE EXPECTATION" x={1230} y={240} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(0, "no sugar")} bitis={cik} metin="NO SUGAR," x={1230} y={340} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "absorb.") - 0.3} bitis={cik} metin="NO SPIKE?" x={1230} y={460} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "researchers")} metin="RESEARCHERS ASK" x={1230} y={240} boyut={30} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(1, "body")} metin="DOES THE BODY" x={1230} y={340} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "behaves")} metin="BEHAVE THAT" x={1230} y={445} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "simply.")} metin="SIMPLY?" x={1230} y={550} boyut={92} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(1, "simply.") + 0.3} ad="soru" x={1620} y={700} boyut={120} zemin={RENK.altin} />
    </>
  );
};

export default S08;
