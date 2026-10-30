// Sahne 43 — özet: makul bir bahis; fayda olası ama kanıtlanmamış; egzotik/pahalı değil.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik0 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [130, 80, 1700])}>
        <Etiket t={t} bas={K(0, "pattern")} bitis={c[2].bas} capa={[1000, 540]} konum={[420, 830]} metin="MIND PATTERN" renk={RENK.koyuYesil} />
      </Kamera>
      {/* 1. cümle */}
      <Baslik t={t} bas={K(0, "reasonable")} bitis={cik0} metin="A REASONABLE BET" x={70} y={170} boyut={96} renk={RENK.koyuYesil} />
      {/* 2. cümle: sağ üstte olası / kanıtsız */}
      <Not t={t} bas={K(1, "brain")} metin="BRAIN BENEFIT" x={1860} y={130} hiza="sag" boyut={30} agirlik={800} renk={RENK.gri} />
      <Baslik t={t} bas={K(1, "possible")} metin="POSSIBLE," x={1860} y={235} boyut={70} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT PROVEN" x={1860} y={315} boyut={70} hiza="sag" renk={RENK.mercan} />
      {/* 3. cümle */}
      <Liste t={t} isaret="onay" x={70} y={130} aralik={90} boyut={38} genislik={700} ogeler={[
        { bas: K(2, "exotic"), metin: "NOTHING EXOTIC" },
        { bas: K(2, "expensive"), metin: "NOTHING EXPENSIVE" },
      ]} />
    </>
  );
};

export default S43;
