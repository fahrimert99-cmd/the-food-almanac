// Sahne 31 — "Dürüst boşluk": incelemedeki her ürün takviyeydi, mutfak sarımsağı ölçülmedi.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const aP = eout(ilerle(t, 0.15, 0.6));
  return (
    <>
      {/* pencere sol cildi ve sayfa başındaki karalamaları dışarıda bırakır */}
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [250, 170, 1350], [290, 200, 1250])}>
        <Etiket t={t} bas={K(1, "supplement")} capa={[560, 470]} konum={[420, 290]} metin="SUPPLEMENT" renk={RENK.altin} />
      </Kamera>
      <Panel a={aP} taraf="sag" genislik={760} />
      <BaslikBlok t={t} bas={K(0, "honest")} satirlar={b.satirlar} x={1860} y={260} boyut={100} hiza="sag" />
      <Not t={t} bas={K(0, "gap") + 0.2} metin={b.not ?? ""} x={1860} y={480} hiza="sag" genislik={640} boyut={32} />
      <Liste t={t} isaret="carpi" x={1160} y={640} aralik={96} boyut={34} genislik={700}
        ogeler={[
          { bas: K(2, "Raw"), metin: "RAW GARLIC", renk: RENK.mercan },
          { bas: K(2, "cooked"), metin: "COOKED GARLIC", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={K(2, "measured") - 0.2} metin="NOT MEASURED" x={1860} y={850} hiza="sag" boyut={30} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S31;
