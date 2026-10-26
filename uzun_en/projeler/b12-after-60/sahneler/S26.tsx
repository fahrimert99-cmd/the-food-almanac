// Sahne 26 — Kaiser çalışması: iki dosya yığını (vaka / kontrol), sayılar söylendikçe etiketlenir.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKaiser = K(0, "Kaiser"), tVaka = K(0, "25,956"), tKontrol = K(0, "184,199"), tGeri = K(0, "looked");
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1720])}>
        <Etiket t={t} bas={tVaka} capa={[640, 700]} konum={[640, 430]} metin="25,956 WITH B12 DEFICIENCY" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tKontrol} capa={[1250, 560]} konum={[1400, 250]} metin="184,199 WITHOUT IT" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tKaiser} bitis={tVaka - 0.8} metin="KAISER PERMANENTE" x={960} y={230} boyut={88} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "Northern")} bitis={tVaka - 0.8} metin="Northern California" x={960} y={290} hiza="orta" boyut={40} />
      <Baslik t={t} bas={tGeri} metin="LOOKED BACK AT MEDICINES" x={960} y={130} boyut={56} renk={RENK.lacivert} hiza="orta" />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S26;
