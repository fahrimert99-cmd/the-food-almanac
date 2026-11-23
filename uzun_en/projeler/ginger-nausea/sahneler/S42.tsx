// Sahne 42 — vaka raporu: INR 2.7 → 8.0
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCase = K(0, "case"), tWoman = K(1, "woman"), tMg = K(1, "48"), tInr = K(2, "INR,");
  const tA = K(2, "2.7"), tB = K(2, "8.0");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 100, 1800], [50, 130, 1650])}>
        <Etiket t={t} bas={tMg} bitis={tInr} capa={[950, 800]} konum={[1250, 700]} metin="48 MG DAILY CHEW" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={tCase} bitis={K(1, "milligram")} metin="CASE REPORTS" x={1860} y={300} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={tWoman} bitis={tInr} metin="70-YEAR-OLD WOMAN, LONG-TERM WARFARIN" x={1860} y={400} hiza="sag" genislik={640} boyut={34} />
      <Baslik t={t} bas={tInr} metin="INR" x={1860} y={250} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "clotting")} metin="a clotting test" x={1860} y={330} hiza="sag" boyut={34} />
      <VurguRozet t={t} bas={tA} vurgu="2.7" x={1330} y={520} genislik={300} renk={RENK.yesil} not="BEFORE" />
      <VurguRozet t={t} bas={tB} vurgu="8.0" x={1700} y={520} genislik={300} renk={RENK.mercan} not="ABOUT A MONTH LATER" />
    </>
  );
};
export default S42;
