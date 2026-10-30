// Sahne 32 — küçük, düzenli K vitamini; düzenli alım düşük alımdan önemli olabilir.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 60, 1790]);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={w}>
        <Etiket t={t} bas={K(1, "steadier")} capa={[1330, 720]} konum={[1160, 850]} metin="STEADY INTAKE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "small")} bitis={K(1, "steadier") - 0.1} satirlar={["SMALL AND", "STEADY HELPED"]} x={150} y={200} boyut={92} />
      <Not t={t} bas={K(0, "helped.")} bitis={K(1, "steadier") - 0.1} metin="vitamin K, in these patients" x={152} y={400} boyut={32} />
      <Not t={t} bas={K(1, "mattered")} metin="steadier intake may have mattered more than low intake" x={960} y={800} hiza="orta" boyut={40} agirlik={800} genislik={1300} />
    </>
  );
};

export default S32;
