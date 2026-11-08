// Sahne 40 — gaz çalışması: fincan ve takvim etiketleri, üstte iki aşamalı başlık.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = K(1, "In the");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(0, "half a cup")} bitis={t2} capa={[640, 640]} konum={[360, 860]} metin="½ CUP A DAY" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "eight or")} bitis={t2} capa={[1300, 560]} konum={[1480, 860]} metin="8–12 WEEKS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "pinto")} capa={[760, 400]} konum={[860, 160]} metin="PINTO OR BAKED BEANS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "three")} bitis={t2 - 0.1} metin="3 FEEDING STUDIES" x={90} y={200} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "first week")} metin="FIRST WEEK" x={90} y={200} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "fewer")} metin="FEWER THAN HALF REPORTED MORE GAS" x={90} y={262} boyut={32} agirlik={800} />
    </>
  );
};

export default S40;
