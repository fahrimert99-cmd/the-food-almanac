// Sahne 61 — özet: paketli ve restoran yemeği, %71 ve %5
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S61: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMost = K(0, "sodium"), tPack = K(0, "packaged"), tRest = K(0, "restaurant");
  const t71 = K(1, "71"), t5 = K(1, "5 percent"), tTab = K(1, "table");
  const Z = t71 - 0.4;
  return (
    <>
      <Kamera gorsel="tam/61" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tTab} capa={[1400, 650]} konum={[1690, 650]} metin="SHAKER" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tMost} bitis={Z} metin="MOST SODIUM" x={1860} y={190} boyut={80} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tPack} bitis={Z} metin="PACKAGED &" x={1860} y={280} boyut={80} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tRest} bitis={Z} metin="RESTAURANT" x={1860} y={370} boyut={80} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t71} vurgu="71%" not="ADDED OUTSIDE THE HOME" x={1680} y={130} genislik={380} boyut={96} />
      <VurguRozet t={t} bas={t5} vurgu="5%" not="FROM THE TABLE" x={1680} y={380} genislik={380} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S61;
