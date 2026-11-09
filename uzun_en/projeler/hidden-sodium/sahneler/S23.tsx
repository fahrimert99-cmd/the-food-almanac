// Sahne 23 — ilk ondakiler: görseldeki yiyecekler söylendikçe etiketlenir.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const Y = [
  { ifade: "burritos", ad: "BURRITOS", capa: [820, 330], konum: [720, 70] },
  { ifade: "tacos", ad: "TACOS", capa: [400, 470], konum: [300, 110] },
  { ifade: "savory snacks", ad: "SAVORY SNACKS", capa: [940, 520], konum: [1090, 90] },
  { ifade: "chicken", ad: "CHICKEN", capa: [1420, 330], konum: [1440, 110] },
  { ifade: "cheese", ad: "CHEESE", capa: [800, 740], konum: [1760, 560] },
  { ifade: "omelets", ad: "OMELETS", capa: [1250, 770], konum: [1700, 880] },
] as const;

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOgun = K(1, "everyday"), tChips = K(1, "chips");
  const sonE = tOgun + 0.3;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820]);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={pen}>
        {Y.map((y) => (
          <Etiket key={y.ad} t={t} bas={K(0, y.ifade) - 0.1} bitis={sonE} capa={[...y.capa]} konum={[...y.konum]} metin={y.ad} renk={RENK.altin} boyut={26} />
        ))}
        <Etiket t={t} bas={K(1, "not just") - 0.1} capa={[940, 520]} konum={[1090, 90]} metin="NOT JUST CHIPS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tOgun} metin="EVERYDAY FOODS" x={70} y={85} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};

export default S23;
