// Sahne 36 — etiketten "gerçek zencefil" iddiası çıktı; <%2 zencefil özütü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOz = K(2, "less");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "claim")} bitis={K(1, "packaging")} capa={[480, 430]} konum={[1500, 200]} metin="REAL-GINGER CLAIM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "ginger")} capa={[880, 790]} konum={[1500, 820]} metin="GINGER EXTRACT" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "2019")} bitis={tOz - 0.1} vurgu="2019" not="U.S. packaging" x={1500} y={320} genislik={400} />
      <BaslikBlok t={t} bas={tOz} satirlar={["LESS THAN", "2%"]} x={1500} y={330} boyut={120} hiza="orta" renkler={[RENK.lacivert, RENK.altin]} />
      <Not t={t} bas={K(2, "ginger") } metin="ginger extract on one major brand's U.S. label" x={1500} y={555} hiza="orta" genislik={560} boyut={30} agirlik={700} />
    </>
  );
};

export default S36;
