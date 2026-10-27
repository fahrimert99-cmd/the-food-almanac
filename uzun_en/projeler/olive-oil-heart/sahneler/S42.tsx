// Sahne 42 — yumuşak ısı: mikrodalga ve 36 saatlik test sonuçları (liste).
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMw = K(1, "microwave"), t3 = K(2, "third"), tOleik = K(2, "oleic"), tSter = K(2, "plant sterols"), tFen = K(2, "phenolics"), tE = K(2, "vitamin");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [50, 60, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Panel a={pPanel} taraf="sag" genislik={820} />
      <BaslikBlok t={t} bas={0.1} satirlar={s.meta.baslik!.satirlar} x={1860} y={170} boyut={96} hiza="sag" />
      <Liste t={t} isaret="onay" boyut={34} x={1190} y={470} aralik={78} genislik={680}
        ogeler={[{ bas: tMw, bitis: t3 - 0.3, metin: "10 MIN MICROWAVE:" },
          { bas: tMw + 0.9, bitis: t3 - 0.3, metin: "ONLY MINOR LOSSES" }]} />
      <Not t={t} bas={t3} metin="180°C · 36 HOURS" x={1190} y={470} boyut={34} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="onay" boyut={32} x={1190} y={530} aralik={72} genislik={680}
        ogeler={[{ bas: tOleik, metin: "OLEIC ACID KEPT" }, { bas: tSter, metin: "PLANT STEROLS KEPT" }]} />
      <Liste t={t} isaret="carpi" boyut={32} x={1190} y={700} aralik={72} genislik={680}
        ogeler={[{ bas: tFen, metin: "PHENOLICS FELL", renk: RENK.mercan }, { bas: tE, metin: "VITAMIN E FELL", renk: RENK.mercan }]} />
      <Etiket t={t} bas={K(2, "heated")} bitis={tOleik + 2} capa={[853, 470]} konum={[1000, 150]} metin="OLIVE OIL" renk={RENK.altin} />
    </>
  );
};

export default S42;
