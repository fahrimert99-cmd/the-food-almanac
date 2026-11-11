// Sahne 20 — termometre + lahana: az yeşillik = daha güçlü ilaç; çok yeşillik = daha zayıf
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, kagit } from "../kutuphane";

// kadran üzerindeki bozuk rakamları örten küçük kâğıt yamalar (görsel koordinatı)
const YAMALAR: [number, number][] = [[460, 171], [576, 167], [463, 357], [579, 349]];

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  const tKapat = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/20" pencere={pen}>
        {YAMALAR.map(([x, y], i) => (
          <div key={i} style={{ position: "absolute", left: x - 34, top: y - 34, width: 68, height: 68, borderRadius: "50%",
            background: `radial-gradient(circle, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)`, opacity: 0.9 }} />
        ))}
        <Etiket t={t} bas={K(0, "vitamin K")} capa={[400, 810]} konum={[1000, 830]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "bleeding")} capa={[525, 165]} konum={[980, 150]} metin="BLEEDING RISK" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "less")} satirlar={["LESS GREENS", "STRONGER DRUG"]} x={1000} y={380} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} bitis={tKapat} />
      <BaslikBlok t={t} bas={K(1, "more")} satirlar={["MORE GREENS", "WEAKER DRUG"]} x={1000} y={380} boyut={100}
        renkler={[RENK.lacivert, RENK.yesil]} />
    </>
  );
};

export default S20;
