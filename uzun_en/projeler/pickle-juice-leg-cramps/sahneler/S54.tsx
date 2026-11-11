// Sahne 54 — adım 1: yatmadan önce germe (baldır + uyluk arkası), Hollanda denemesi, dikkat notu.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [20, 10, 1880], [60, 30, 1800]);
  const tBaldir = K(1, "calves"), tUyluk = K(1, "thighs"), tDutch = K(1, "Dutch");
  const tDur = K(2, "stop"), tSor = K(2, "ask"), tDenge = K(2, "balance");
  return (
    <>
      <Kamera gorsel="tam/54" pencere={p} />
      <Baslik t={t} bas={0} metin="1" x={1370} y={170} boyut={190} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "before")} satirlar={["STRETCH", "BEFORE BED"]} x={1370} y={380} boyut={88}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={tBaldir} bitis={tDutch} capa={[520, 660]} konum={[1130, 610]} metin="CALVES" renk={RENK.yesil} />
      <Etiket t={t} bas={tUyluk} bitis={tDutch} capa={[560, 310]} konum={[1130, 330]} metin="BACK OF THIGHS" renk={RENK.yesil} />
      <KaynakEtiketi t={t} metin="Hallegraeff · J Physiother · 2012" bas={tDutch} />
      <Liste t={t} x={1300} y={690} aralik={90} boyut={30} isaret="carpi" genislik={560} ogeler={[
        { bas: tDur, metin: "STOP IF IT HURTS", renk: RENK.mercan },
        { bas: tSor, metin: "ASK DOCTOR FIRST", renk: RENK.altin },
      ]} />
      <Not t={t} bas={tDenge} metin="if balance or joint problems" x={1300} y={850} boyut={30} agirlik={800} />
    </>
  );
};
export default S54;
