// Sahne 43 — "Bir sınır daha": koltuk, gazete, kadeh ve baston; sağ boş alanda başlık ve not.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLimit = K(0, "One more limit"), tSixty = K(1, "sixty"), tAha = K(2, "AHA's"), tOlder = K(2, "older adults");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        {/* baston: ileri yaşı temsil eder */}
        <Etiket t={t} bas={tSixty} capa={[1252, 500]} konum={[1600, 480]} metin="AFTER SIXTY" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tLimit} metin="ONE MORE" x={1860} y={190} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tLimit + 0.2} metin="LIMIT" x={1860} y={302} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tAha} metin="AHA: OLDER ADULTS MAY" x={1860} y={640} hiza="sag" boyut={40} agirlik={800} />
      <Not t={t} bas={tOlder} metin="RESPOND DIFFERENTLY" x={1860} y={694} hiza="sag" boyut={40} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S43;
