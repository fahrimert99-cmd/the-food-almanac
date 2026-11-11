import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, MARKA, Not, Panel, RENK, SP, VurguRozet, eout,
  ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

// Sahne 5 — kan damarı tüpü; sağda başlık ve açıklamalar
const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEt = K(1, "doesn't") - 0.1;
  const bitisOrta = K(2, "makes") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1830])}>
        <Etiket t={t} bas={K(0, "blood")} bitis={bitisEt} capa={[507, 649]} konum={[1100, 700]} metin="BLOOD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "clots")} bitis={bitisEt} capa={[440, 573]} konum={[1100, 560]} metin="CLOTS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin={s.meta.baslik?.satirlar[0] ?? "WARFARIN"} x={1000} y={230} boyut={170} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "doesn't")} bitis={bitisOrta} metin="DOESN'T REALLY THIN" x={1000} y={430} boyut={80} renk={RENK.mercan} />
      <Baslik t={t} bas={K(2, "makes")} metin="HARDER TO FORM CLOTS" x={1000} y={430} boyut={80} renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "harder")} metin={s.meta.baslik?.not ?? ""} x={1000} y={520} boyut={44} renk={RENK.altin} agirlik={800} genislik={850} />
    </>
  );
};

export default S05;
