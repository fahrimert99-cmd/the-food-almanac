// Sahne 39 — sınırlar: küçük ve kısa denemeler; glukoz ölçüldü, kalp krizi/uzun vade değil.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLim = K(0, "limits"), tTr = K(1, "trials"), tTen = K(1, "ten"), tOne = K(1, "one day");
  const tGlu = K(2, "glucose,"), tHeart = K(2, "heart"), tLong = K(2, "long");
  const bit = K(2, "They") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])}>
        <Etiket t={t} bas={tTr} bitis={bit} capa={[1400, 560]} konum={[1250, 400]} metin="TRIALS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tLim} metin="THE LIMITS" x={140} y={170} boyut={120} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tTen} bitis={bit} vurgu="10–40" not="PEOPLE PER TRIAL" x={1000} y={170} genislik={420} boyut={96} />
      <VurguRozet t={t} bas={tOne} bitis={bit} vurgu="1 DAY – 2 WEEKS" not="TRIAL LENGTH" x={1560} y={170} genislik={520} boyut={72} renk={RENK.lacivert} />
      <Liste t={t} x={740} y={120} aralik={90} boyut={38} genislik={900} isaret="onay" ogeler={[{ bas: tGlu, metin: "MEASURED: GLUCOSE" }]} />
      <Liste t={t} x={740} y={210} aralik={90} boyut={38} genislik={900} isaret="carpi" ogeler={[
        { bas: tHeart, metin: "NOT MEASURED: HEART ATTACKS", renk: RENK.mercan },
        { bas: tLong, metin: "NOT MEASURED: LONG-TERM HEALTH", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S39;
