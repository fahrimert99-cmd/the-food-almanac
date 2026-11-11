// Sahne 7 — ortalama 3,400 mg ve 2,300 mg sınırı
import React from "react";
import { Baslik, BaslikBlok, CubukGrafik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  const tAvg = K(0, "3,400"), tLim = K(1, "2,300");
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(1, "teaspoon")} capa={[600, 790]} konum={[330, 900]} metin="1 LEVEL TEASPOON" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={800} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "average")} bitis={c[1].bas - 0.2} metin="THE AVERAGE AMERICAN EATS" x={1860} y={170} boyut={30} renk={RENK.altin} hiza="sag" font="inter" aralik={3} />
      <BaslikBlok t={t} bas={K(1, "limit")} satirlar={["LIMIT:", "2,300 MG"]} x={1860} y={150} boyut={96} hiza="sag" />
      <Not t={t} bas={K(1, "about one")} metin="about one teaspoon of salt a day" x={1860} y={320} hiza="sag" genislik={560} boyut={30} />
      <CubukGrafik t={t} bas={tAvg + 0.2} x={1250} y={500} w={600} h={300} maks={3900}
        cubuklar={[
          { etiket: "AVERAGE", deger: 3400, metin: "3,400", renk: RENK.mercan, bas: tAvg - 0.3 },
          { etiket: "LIMIT", deger: 2300, metin: "2,300", renk: RENK.yesil, bas: tLim - 0.3 },
        ]} />
    </>
  );
};

export default S07;
