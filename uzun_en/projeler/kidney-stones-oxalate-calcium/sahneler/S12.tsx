// Sahne 12 — normal kalsiyum (~1200 mg) + daha az hayvansal protein ve tuz.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tNorm = K(0, "normal amount"), tNum = K(0, "1,200");
  const tProt = K(1, "animal protein"), tSalt = K(1, "salt");
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [60, 40, 1700], [130, 110, 1560])}>
        <Etiket t={t} bas={tNorm + 0.3} bitis={c[1].bas} capa={[1133, 400]} konum={[1440, 280]} metin="CALCIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={tSalt} capa={[1333, 893]} konum={[1450, 760]} metin="SALT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tNorm} bitis={c[1].bas} metin="NORMAL CALCIUM" x={90} y={150} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tNum} bitis={c[1].bas} vurgu="1,200 mg" not="per day" x={1700} y={450} genislik={380} renk={RENK.yesil} />
      <Baslik t={t} bas={tProt - 0.1} metin="LESS ANIMAL PROTEIN" x={90} y={90} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSalt - 0.1} metin="LESS SALT" x={90} y={175} boyut={64} renk={RENK.mercan} />
    </>
  );
};

export default S12;
