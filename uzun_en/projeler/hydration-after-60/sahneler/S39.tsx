// Sahne 39 — Böbrek hastalığı ve CKD WIT denemesi: böbrek, bardak, kitap etiketli; sağ sütunda rozetler.
import React from "react";
import { Baslik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const X = 1690;
const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1790]);
  const t631 = K(1, "631");
  return (
    <>
      <Kamera gorsel="tam/39" pencere={pen} />
      <Etiket t={t} bas={K(0, "kidney")} capa={[540, 560]} konum={[330, 230]} metin="KIDNEYS" renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "similar")} bitis={K(1, "In") + 0.3} metin="A SIMILAR" x={X} y={220} boyut={92} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "question")} bitis={K(1, "In") + 0.3} metin="QUESTION" x={X} y={330} boyut={92} renk={RENK.koyuYesil} hiza="orta" />
      <KaynakEtiketi t={t} bas={K(1, "CKD")} metin={s.meta.etiket ?? ""} />
      <Not t={t} bas={K(1, "ontario")} bitis={t631 - 0.1} metin="ONTARIO, CANADA" x={X} y={220} hiza="orta" boyut={40} agirlik={800} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t631} vurgu="631" not="ADULTS, STAGE 3 CKD" x={X} y={150} genislik={380} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "drink more")} capa={[1250, 400]} konum={[X - 20, 470]} metin="DRINK MORE WATER" renk={RENK.yesil} boyut={24} />
      <Etiket t={t} bas={K(1, "usual")} capa={[1280, 850]} konum={[X - 20, 570]} metin="USUAL INTAKE" renk={RENK.altin} boyut={24} />
      <VurguRozet t={t} bas={K(1, "one year")} vurgu="1 YEAR" x={X} y={680} genislik={300} boyut={84} renk={RENK.lacivert} />
    </>
  );
};

export default S39;
