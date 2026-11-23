// Sahne 55 — adım 2: taze zencefil çayı ölçüsüz.
import React from "react";
import { BaslikBlok, Panel, eout, ilerle, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFresh = K(0, "fresh"), tTea = K(0, "tea"), tGent = K(0, "gentle"), tStr = K(0, "strength"), tTrial = K(0, "don't");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 50, 1800], [50, 100, 1650])}>
        <Etiket t={t} bas={tFresh} capa={[360, 560]} konum={[330, 250]} metin="FRESH GINGER" renk={RENK.yesil} />
        <Etiket t={t} bas={tGent} bitis={3.4} capa={[1000, 480]} konum={[1500, 760]} metin="GENTLE CHOICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, tTea, 0.5))} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={tTea} satirlar={s.meta.baslik!.satirlar} x={1860} y={290} boyut={84} hiza="sag" />
      <Not t={t} bas={tStr} metin="STRENGTH VARIES FROM CUP TO CUP" x={1860} y={520} hiza="sag" boyut={34} agirlik={800} genislik={430} />
      <Ikon t={t} bas={tTrial} ad="carpi" x={1430} y={700} boyut={70} zemin={RENK.mercan} />
      <Not t={t} bas={tTrial + 0.15} metin="DON'T EXPECT TRIAL-SIZED RESULTS" x={1860} y={660} hiza="sag" boyut={34} renk={RENK.mercan} agirlik={800} genislik={380} />
    </>
  );
};

export default S55;
