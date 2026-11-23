// Sahne 23 — %20 daha düşük diyabet riski; lif düzeltmesiyle %13. Sağ panel (görsel kusurunu da örter).
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), b = s.meta.baslik!;
  const t13 = K(1, "13 percent");
  const pPan = eout(ilerle(t, 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [0, 90, 1640])}>
        <Etiket t={t} bas={K(0, "most gluten")} bitis={K(1, "After")} capa={[300, 330]} konum={[330, 130]} metin="MOST GLUTEN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "cereal fiber")} capa={[900, 700]} konum={[780, 860]} metin="CEREAL FIBER" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={860} opak={1} />
      <BaslikBlok t={t} bas={K(0, "The group")} satirlar={b.satirlar} x={1860} y={230} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "20 percent")} bitis={t13 - 0.15} vurgu={b.vurgu!} not={b.not} x={1580} y={490} genislik={440} />
      <VurguRozet t={t} bas={t13} vurgu="–13%" not="after adjusting for cereal fiber" x={1580} y={490} genislik={440} renk={RENK.koyuYesil} />
      <Not t={t} bas={t13 + 0.3} metin="THE GAP SHRANK" x={1580} y={780} hiza="orta" boyut={34} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S23;
