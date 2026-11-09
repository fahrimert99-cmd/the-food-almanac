// Sahne 14 — elektrikle tetiklenen kramp: ayak, elektrot kablosu ve kronometre etiketleri.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "foot")} bitis={K(0, "electrical") - 0.2} capa={[700, 530]} konum={[520, 330]} metin="FOOT MUSCLE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "electrical")} capa={[440, 690]} konum={[300, 570]} boyut={25} metin="ELECTRICAL CURRENT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "timed")} capa={[924, 470]} konum={[700, 170]} metin="TIMED" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
    </>
  );
};

export default S14;
