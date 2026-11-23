// Sahne 26 — çiğ pirinç kasesi + bakteri dairesi; sağ boşlukta başlık ve toksin vurgusu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBac = K(1, "Bacillus"), tToksin = K(1, "toxin"), tCer = K(1, "cereulide"), tIsi = K(1, "extremely");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={tBac} capa={[1130, 270]} konum={[1560, 190]} metin="BACILLUS CEREUS" renk={RENK.mercan} boyut={30} />
        <Etiket t={t} bas={tCer} bitis={tIsi - 0.1} capa={[820, 620]} konum={[1560, 790]} metin="CEREULIDE" renk={RENK.altin} boyut={30} />
      </Kamera>
      <BaslikBlok t={t} bas={tToksin} satirlar={["A TOXIN", "THAT SURVIVES"]} x={1860} y={400} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={tIsi + 0.2} vurgu="HEAT-STABLE" not="EXTREMELY" x={1570} y={680} genislik={520} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S26;
