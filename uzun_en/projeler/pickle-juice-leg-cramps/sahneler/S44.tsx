// Sahne 44 — düşük kesinlik: tek küçük çalışma, 12 hafta sahte germe karşılaştırması.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLow = K(0, "low");
  const tBir = K(0, "one small");
  const tCalf = K(1, "Calf");
  const tSham = K(1, "sham");
  const t12 = K(1, "12");
  const tAz = K(1, "little or no");
  const tFrek = K(1, "frequency");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1800])}>
        <Etiket t={t} bas={tCalf} bitis={t12 - 0.1} capa={[760, 720]} konum={[1130, 700]} metin="CALF STRETCH" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tLow} satirlar={["LOW", "CERTAINTY"]} x={1040} y={200} boyut={130} />
      <VurguRozet t={t} bas={tBir} bitis={t12 - 0.2} vurgu="1 TRIAL" not="it rests on one small trial" x={1330} y={460} genislik={520} boyut={84} />
      <Not t={t} bas={tSham} bitis={t12 - 0.2} metin="tested against sham stretching" x={1060} y={640} boyut={30} genislik={560} />
      <VurguRozet t={t} bas={t12} vurgu="12 WEEKS" not="sham stretching · people 60 and older" x={1330} y={460} genislik={560} boyut={84} />
      <BaslikBlok t={t} bas={tAz} satirlar={["LITTLE OR NO", "DIFFERENCE"]} x={1040} y={740} boyut={64} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={tFrek} metin="to how often cramps happen" x={1044} y={860} boyut={32} genislik={700} />
    </>
  );
};

export default S44;
