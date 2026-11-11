// Sahne 18 — iki tabak: düşük K (–80%) ve yüksek K (+500%) diyeti
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 50, 1790]);
  const t80 = K(0, "80 percent"), t500 = K(1, "500 percent");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={pen}>
        <Etiket t={t} bas={K(0, "less vitamin K")} capa={[330, 690]} konum={[300, 345]} metin="LOW-K DIET" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "more")} capa={[1330, 660]} konum={[1450, 350]} metin="HIGH-K DIET" renk={RENK.yesil} />
      </Kamera>
      <Not t={t} bas={K(0, "vitamin")} metin="vitamin K compared with usual intake" x={960} y={46} hiza="orta" boyut={30} agirlik={700} />
      <VurguRozet t={t} bas={t80} vurgu="–80%" not="vitamin K" x={480} y={130} renk={RENK.mercan} genislik={330} boyut={96} />
      <Baslik t={t} bas={c[1].bas} metin="VS" x={960} y={215} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t500} vurgu="+500%" not="vitamin K" x={1440} y={130} renk={RENK.yesil} genislik={330} boyut={96} />
    </>
  );
};

export default S18;
