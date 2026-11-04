// Sahne 52 — adım 5: porsiyon; sebze + protein ile dengeli öğün.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPor = K(1, "portion"), tKucuk = K(2, "smaller"), tSebze = K(3, "vegetables"), tProt = K(3, "protein"), tDeng = K(3, "balanced");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={tKucuk} bitis={tSebze - 0.2} capa={[860, 600]} konum={[300, 850]} metin="SMALLER BOWL" renk={RENK.lacivert} />
        <Etiket t={t} bas={tSebze} capa={[900, 300]} konum={[1640, 300]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={tProt} capa={[1260, 600]} konum={[1640, 760]} metin="PROTEIN" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.0} metin="STEP 5" x={70} y={72} boyut={52} renk={RENK.altin} />
      <Baslik t={t} bas={tPor} bitis={tDeng - 0.1} metin="MIND THE" x={70} y={165} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPor + 0.15} bitis={tDeng - 0.1} metin="PORTION" x={70} y={245} boyut={76} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tDeng} metin="BALANCED" x={70} y={165} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={tDeng + 0.15} metin="MEAL" x={70} y={245} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};
export default S52;
