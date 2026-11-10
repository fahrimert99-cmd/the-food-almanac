// Sahne 53 — FOUR: deli etini ısıt.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tS2 = K(2, "choose");
  const tPeynir = K(2, "pasteurized");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])} />
      <BaslikBlok t={t} bas={0.1} satirlar={b.satirlar} x={1860} y={200} boyut={88} hiza="sag" />
      {/* riskli gruplar */}
      <Liste t={t} isaret="nokta" x={1190} y={380} aralik={72} boyut={34} genislik={690} ogeler={[
        { bas: K(1, "65"), metin: "65 OR OLDER", renk: RENK.altin, bitis: tS2 - 0.3 },
        { bas: K(1, "pregnant"), metin: "PREGNANT", renk: RENK.altin, bitis: tS2 - 0.3 },
        { bas: K(1, "weakened"), metin: "WEAKENED IMMUNE SYSTEM", renk: RENK.altin, bitis: tS2 - 0.3 },
      ]} />
      {/* ısıtılmamış jambon / buharlı sıcak */}
      <Etiket t={t} bas={K(1, "unheated")} bitis={K(1, "heat it") - 0.1} capa={[170, 640]} konum={[260, 270]} metin="SKIP UNHEATED DELI MEAT" renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "steaming")} bitis={tS2 - 0.3} capa={[570, 290]} konum={[1000, 150]} metin="STEAMING HOT" renk={RENK.yesil} />
      {/* pastörize peynirler */}
      <Baslik t={t} bas={tPeynir} metin="CHOOSE PASTEURIZED" x={1400} y={420} boyut={34} renk={RENK.altin} font="inter" aralik={1} />
      <Liste t={t} isaret="onay" x={1400} y={470} aralik={78} boyut={30} genislik={480} ogeler={[
        { bas: K(2, "hard"), metin: "HARD CHEESES", renk: RENK.yesil },
        { bas: K(2, "cottage"), metin: "COTTAGE CHEESE", renk: RENK.yesil },
        { bas: K(2, "cream"), metin: "CREAM CHEESE", renk: RENK.yesil },
        { bas: K(2, "feta"), metin: "FETA", renk: RENK.yesil },
        { bas: K(2, "mozzarella"), metin: "MOZZARELLA", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S53;
