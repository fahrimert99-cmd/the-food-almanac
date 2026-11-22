// Sahne 21 — Adil olmak gerekirse: laboratuvar deneyi, çorba değil; sıcak çalışan buzdolabı güvenli süreyi kısaltır.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const bit0 = c[1].bas - 0.2, bit1 = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 10, 1900], [110, 60, 1720])}>
        <Etiket t={t} bas={K(2, "fridge")} capa={[533, 275]} konum={[1230, 210]} metin="FRIDGE RUNS WARM" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "pot")} bitis={bit0} capa={[610, 740]} konum={[1250, 790]} metin="NOT A POT OF SOUP" renk={RENK.altin} />
      </Kamera>
      <Liste t={t} isaret="onay" x={1240} y={300} aralik={100} boyut={30} genislik={620}
        ogeler={[{ bas: K(0, "lab"), metin: "LAB EXPERIMENT", renk: RENK.yesil, bitis: bit0 },
          { bas: K(0, "cheese"), metin: "CHEESE + DELI MEAT", renk: RENK.yesil, bitis: bit0 }]} />
      <Liste t={t} isaret="onay" x={1240} y={300} aralik={100} boyut={30} genislik={620}
        ogeler={[{ bas: K(1, "fast"), metin: "HOW FAST LISTERIA GROWS", renk: RENK.yesil, bitis: bit1 }]} />
      <Liste t={t} isaret="carpi" x={1240} y={400} aralik={100} boyut={30} genislik={620}
        ogeler={[{ bas: K(1, "not how risky"), metin: "YOUR OWN DINNER'S RISK", renk: RENK.mercan, bitis: bit1 }]} />
      <BaslikBlok t={t} bas={K(2, "warm")} satirlar={["WARMER FRIDGE,", "FASTER GROWTH"]} x={1860} y={600} boyut={84} hiza="sag" />
    </>
  );
};

export default S21;
