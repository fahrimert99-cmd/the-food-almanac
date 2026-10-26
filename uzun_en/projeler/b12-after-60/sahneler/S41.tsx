// Sahne 41 — kan testi: sol boşlukta başlık ve nedenler, sağda tüp etiketi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, kameraYolu, Liste, Not, RENK, SP, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = c[1].bas - 0.1;
  return (
    <>
      {/* pencere alt kenarı y<980: sağ alttaki imza dışarıda kalır */}
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [500, 100, 1420], [560, 130, 1360])}>
        <Etiket t={t} bas={K(1, "blood")} capa={[1490, 600]} konum={[1200, 640]} metin="BLOOD TEST" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <Liste t={t} x={110} y={300} aralik={96} boyut={48} isaret="nokta" genislik={760}
        ogeler={[
          { bas: K(0, "tiredness"), metin: "TIREDNESS", renk: RENK.altin, bitis: tSon },
          { bas: K(0, "tingling"), metin: "TINGLING", renk: RENK.altin, bitis: tSon },
          { bas: K(0, "memory"), metin: "MEMORY SLIPS", renk: RENK.altin, bitis: tSon },
        ]} />
      <BaslikBlok t={t} bas={K(1, "exactly")} satirlar={s.meta.baslik!.satirlar} x={110} y={220} boyut={130} />
      <Not t={t} bas={K(2, "ask")} metin="ASK IF B12 HAS EVER BEEN CHECKED" x={110} y={520} boyut={46} genislik={760} agirlik={800} />
    </>
  );
};

export default S41;
