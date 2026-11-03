// Sahne 6 — Ceylon ve Cassia: sağda başlık, çubuklara ve küreye etiketler.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "two");
  const tCeylon = K(1, "Ceylon"), tLanka = K(1, "Sri");
  const tCassia = K(2, "Cassia"), tNA = K(2, "North");
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  const b = s.meta.baslik?.satirlar ?? ["CEYLON", "VS CASSIA"];
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={tCeylon} bitis={tCassia - 0.1} capa={[420, 640]} konum={[250, 470]} metin="CEYLON" renk={RENK.altin} />
        <Etiket t={t} bas={tLanka} bitis={tCassia - 0.1} capa={[1055, 345]} konum={[1380, 470]} metin="SRI LANKA" renk={RENK.yesil} />
        <Etiket t={t} bas={tCassia} capa={[900, 735]} konum={[1330, 790]} metin="CASSIA" renk={RENK.mercan} />
        <Etiket t={t} bas={tNA} capa={[870, 205]} konum={[470, 150]} metin="NORTH AMERICA" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={640} opak={0.9} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={b} x={1860} y={170} boyut={88} hiza="sag"
        renkler={[RENK.altin, RENK.mercan]} />
    </>
  );
};

export default S06;
