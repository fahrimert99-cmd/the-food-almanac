// Sahne 42 — takviyeler ≠ tofu; bakım ekibine danış.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(2, "So") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 36, 1780])}>
        <Etiket t={t} bas={K(0, "supplements,")} bitis={bit} capa={[745, 380]} konum={[640, 150]} metin="SUPPLEMENTS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "tofu.")} bitis={bit} capa={[990, 410]} konum={[1210, 230]} metin="TOFU" renk={RENK.yesil} />
      </Kamera>
      {/* ikinci vuruş: kılavuz uyarısı */}
      <Not t={t} bas={K(1, "supplements")} bitis={bit} metin="AFTER BREAST CANCER, GUIDELINES URGE CAUTION WITH SUPPLEMENTS"
        x={1860} y={600} hiza="sag" genislik={520} boyut={34} agirlik={800} renk={RENK.mercan} />
      {/* üçüncü vuruş: başlık */}
      <BaslikBlok t={t} bas={K(2, "conversation")} satirlar={["ASK YOUR", "CARE TEAM"]} x={1860} y={380} boyut={112}
        hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S42;
