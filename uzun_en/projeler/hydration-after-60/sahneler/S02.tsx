// Sahne 2 — "Daha çok içmek" her zaman çözüm değil: cam üzerinde soru, sağ panelde uyarı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const tSome = K(1, "some people");
  const pPanel = eout(ilerle(t, tSome - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/02" pencere={pen}>
        <Etiket t={t} bas={K(0, "drinking more")} bitis={c[1].bas} capa={[700, 520]} konum={[1020, 150]} metin="JUST DRINK MORE?" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <Baslik t={t} bas={tSome} metin="FOR SOME PEOPLE" x={1860} y={330} boyut={46} hiza="sag" renk={RENK.gri} font="inter" aralik={3} />
      <Baslik t={t} bas={K(1, "wrong")} metin="WRONG" x={1860} y={440} boyut={120} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "wrong") + 0.2} metin="ADVICE" x={1860} y={560} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Ikon t={t} bas={K(1, "advice")} ad="carpi" x={1580} y={700} boyut={96} zemin={RENK.mercan} />
    </>
  );
};

export default S02;
