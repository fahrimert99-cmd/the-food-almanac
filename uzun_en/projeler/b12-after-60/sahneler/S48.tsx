// Sahne 48 — NIH önerisi: 50 yaş üstü zenginleştirilmiş gıda / takviye.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitisEski = K(1, "Ask") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        {/* şişe etiketindeki bozuk yazı boş etiketle örtülür */}
        <div style={{ position: "absolute", left: 1118, top: 742, width: 148, height: 92, background: "#ECE6D6",
          border: "3px solid #8A7E6C", borderRadius: 8, transform: "rotate(-1deg)" }} />
        <Etiket t={t} bas={K(0, "fortified foods")} bitis={bitisEski} capa={[640, 720]} konum={[880, 430]} metin="FORTIFIED FOODS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "supplements")} bitis={bitisEski} capa={[1010, 925]} konum={[1450, 660]} metin="SUPPLEMENTS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[1190, 800]} konum={[1500, 560]} metin="DOCTOR OR PHARMACIST" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "form")} capa={[1010, 925]} konum={[1450, 720]} metin="FORM + AMOUNT" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "over 50")} satirlar={["OVER 50:", "FORTIFIED"]} x={1860} y={160} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "National")} metin="NATIONAL INSTITUTES OF HEALTH ADVICE" x={1860} y={350} hiza="sag" genislik={760}
        boyut={32} agirlik={800} renk={RENK.altin} />
    </>
  );
};

export default S48;
