// Sahne 19 — güvenlik: endişe bildirilmedi, bulantı biraz daha sık
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1860], [40, 40, 1700]);
  const tSaf = K(0, "safety,"), tNo = K(0, "no safety concerns"), tNau = K(1, "Nausea"), tSl = K(1, "slightly more"), tExt = K(1, "extract");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={w}>
        <Etiket t={t} bas={tNau} capa={[260, 220]} konum={[700, 340]} metin="NAUSEA" renk={RENK.mercan} />
        <Etiket t={t} bas={tExt} capa={[1110, 585]} konum={[1330, 410]} metin="EXTRACT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tSaf} metin="SAFETY" x={1860} y={170} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={8} />
      <Ikon t={t} bas={tNo} ad="onay" x={1310} y={275} boyut={72} zemin={RENK.yesil} />
      <Baslik t={t} bas={tNo} metin="NO CONCERNS" x={1860} y={265} boyut={92} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tNo + 0.2} metin="reported by the researchers" x={1860} y={330} boyut={32} hiza="sag" renk={RENK.gri} />
      <Not t={t} bas={tSl} metin="SLIGHTLY MORE COMMON WITH THE EXTRACT" x={80} y={640} boyut={36} agirlik={800} renk={RENK.mercan} genislik={440} />
    </>
  );
};

export default S19;
