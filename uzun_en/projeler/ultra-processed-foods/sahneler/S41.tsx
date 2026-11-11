// Sahne 41 — Her paket tehlikeli değil: raf altta, başlık ve rozet sağ üst boşlukta.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = c[1].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1780])}>
        <Etiket t={t} bas={K(0, "packaged")} bitis={gec} capa={[233, 600]} konum={[560, 230]} metin="PACKAGED FOOD" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "not supported")} bitis={gec} satirlar={["NOT EVERY", "PACKAGE"]} x={1840} y={150} boyut={120}
        hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(0, "dangerous")} bitis={gec} metin="IS DANGEROUS" x={1840} y={400} hiza="sag" boyut={44} renk={RENK.lacivert} agirlik={800} />
      <Not t={t} bas={K(1, "Nothing")} metin="Nothing here shows a single serving does harm" x={1840} y={150} hiza="sag" genislik={760}
        boyut={44} renk={RENK.lacivert} agirlik={800} />
      <VurguRozet t={t} bas={K(1, "modest")} vurgu="MODEST" not="differences per person" x={1480} y={330} renk={RENK.yesil} genislik={420} />
    </>
  );
};
export default S41;
