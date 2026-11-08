// Sahne 22 — rastgele gruplar: dört tatlandırıcı grubu, iki kontrol grubu. Kâse etiketleri şematiktir.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRand = K(0, "randomly"), tFour = K(1, "four groups"), tSac = K(1, "saccharin"), tSuc = K(1, "sucralose"),
    tAsp = K(1, "aspartame"), tSte = K(1, "stevia"), tWk = K(1, "two weeks"), tDose = K(1, "below the acceptable"), tCtl = K(2, "control");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tSac} bitis={12.2} capa={[720, 600]} konum={[300, 500]} metin="SACCHARIN" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSuc} bitis={12.2} capa={[690, 800]} konum={[300, 880]} metin="SUCRALOSE" renk={RENK.altin} />
        <Etiket t={t} bas={tAsp} bitis={12.2} capa={[1250, 800]} konum={[1640, 880]} metin="ASPARTAME" renk={RENK.mercan} />
        <Etiket t={t} bas={tSte} bitis={12.2} capa={[1210, 620]} konum={[1640, 520]} metin="STEVIA" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tRand} satirlar={["RANDOMLY", "ASSIGNED"]} x={80} y={160} boyut={76} bitis={2.9}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Baslik t={t} bas={tFour} metin="4 GROUPS" x={1860} y={170} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tWk} metin="2 WEEKS" x={1860} y={265} boyut={90} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tDose} metin="below the acceptable daily intake" x={1860} y={325} hiza="sag" boyut={30} />
      <Baslik t={t} bas={tCtl} metin="2 CONTROL" x={80} y={160} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={tCtl + 0.15} metin="GROUPS" x={80} y={245} boyut={76} renk={RENK.koyuYesil} />
      <Not t={t} bas={tCtl + 0.5} metin="no sweetener" x={84} y={315} boyut={32} />
    </>
  );
};

export default S22;
