// Sahne 34 — CDC: ısıtılmamış şarküteri etlerinden kaçın; yersen 165°F ya da buharlı sıcak.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bitL = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [110, 90, 1700])}>
        <Etiket t={t} bas={K(1, "deli")} bitis={bitL} capa={[520, 650]} konum={[470, 505]} metin="DELI MEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "steaming")} capa={[1250, 330]} konum={[1640, 250]} metin="STEAMING HOT" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "heat")} capa={[1150, 480]} konum={[1640, 400]} metin="THERMOMETER" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "CDC") - 0.2} />
      <Liste t={t} isaret="carpi" x={140} y={150} aralik={78} boyut={32} genislik={800}
        ogeler={[
          { bas: K(1, "unheated"), metin: "UNHEATED DELI MEAT", renk: RENK.mercan, bitis: bitL },
          { bas: K(1, "cold"), metin: "COLD CUTS", renk: RENK.mercan, bitis: bitL },
          { bas: K(1, "hot"), metin: "HOT DOGS", renk: RENK.mercan, bitis: bitL },
          { bas: K(1, "dry"), metin: "DRY SAUSAGES", renk: RENK.mercan, bitis: bitL },
        ]} />
      <BaslikBlok t={t} bas={K(2, "heat")} satirlar={["HEAT DELI", "MEAT"]} x={140} y={190} boyut={96} />
      <VurguRozet t={t} bas={K(2, "165")} vurgu="165°F" not="or until steaming hot" x={830} y={110} genislik={380} />
    </>
  );
};

export default S34;
