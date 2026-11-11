// Sahne 44 — belirsizlikler: yaş verisi yok, büyük çalışma yok
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "no large");
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <Etiket t={t} bas={K(0, "abstracts")} bitis={tB - 0.3} capa={[650, 610]} konum={[650, 420]} metin="ABSTRACTS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "ages,")} bitis={tB - 0.3} satirlar={["AGES NOT", "REPORTED"]} x={80} y={150} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(0, "sixties")} bitis={tB - 0.3} vurgu="60s–70s" not="HOW CLOSE A MATCH?" x={1620} y={130} genislik={380} boyut={90} />
      <BaslikBlok t={t} bas={tB} satirlar={["NO LARGE", "TRIAL"]} x={80} y={150} boyut={100} renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "steady")} metin="STEADY GREENS vs NO GREENS" x={80} y={380} boyut={38} agirlik={800} />
      <Not t={t} bas={K(1, "clots")} metin="CLOTS OR BLEEDING" x={80} y={440} boyut={38} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S44;
