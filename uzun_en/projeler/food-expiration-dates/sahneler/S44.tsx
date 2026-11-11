// Sahne 44 — iki defter (2016 ve 2025 anketleri), aralarında kurşun kalem; "≈ APPROXIMATE".
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "approximate") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* defter sayfaları boş: yazı doğrudan sayfada */}
        <Baslik t={t} bas={K(1, "2016")} metin="2016" x={590} y={400} boyut={150} renk={RENK.lacivert} hiza="orta" />
        <Not t={t} bas={K(1, "2016") + 0.2} metin="SURVEY" x={590} y={480} hiza="orta" boyut={40} agirlik={800} renk={RENK.gri} />
        <Baslik t={t} bas={K(1, "2025")} metin="2025" x={1335} y={400} boyut={150} renk={RENK.koyuYesil} hiza="orta" />
        <Not t={t} bas={K(1, "2025") + 0.2} metin="SURVEY" x={1335} y={480} hiza="orta" boyut={40} agirlik={800} renk={RENK.gri} />
        <Etiket t={t} bas={K(1, "different")} bitis={bit} capa={[1100, 660]} konum={[960, 900]} metin="DIFFERENT WORDING" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.1} metin="ONE CAUTION: THE TREND" x={960} y={52} boyut={56} renk={RENK.lacivert} hiza="orta" style={{ textShadow: "0 0 12px #F6F3EC" }} />
      <VurguRozet t={t} bas={K(1, "approximate")} vurgu="≈" not="APPROXIMATE COMPARISON" x={700} y={770} genislik={470} boyut={84} />
    </>
  );
};

export default S44;
