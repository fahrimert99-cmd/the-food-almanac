// Sahne 52 — İpucu 1: 5–6 kuru erik, 50 g.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t50 = K(0, "50 grams");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* görselin sağ kenarındaki sert kesik kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 1150, top: -100, width: 900, height: 1300,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 6%)` }} />
        <Etiket t={t} bas={K(0, "five") - 0.1} capa={[560, 520]} konum={[560, 250]} metin="5–6 PRUNES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "start")} satirlar={["TIP 1", "5 TO 6 A DAY"]} x={1860} y={250} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={t50} vurgu="50 G" not="under two ounces" x={1560} y={490} genislik={420} />
      <Ikon t={t} bas={K(1, "build")} ad="saat" x={1320} y={780} boyut={80} zemin={RENK.altin} />
      <Not t={t} bas={K(1, "build") + 0.15} metin="Build up over a week or two if your gut is sensitive" x={1860} y={745} hiza="sag" genislik={540}
        boyut={34} agirlik={700} />
    </>
  );
};

export default S52;
