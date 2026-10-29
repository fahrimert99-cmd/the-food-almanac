// Sahne 7 — ALA alım miktarı: sol masa görseli, sağ kâğıt panelde başlık ve iki rozet
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, K(2, "covers"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1850])}>
        <Etiket t={t} bas={K(0, "food.")} bitis={K(2, "walnuts") - 0.2} capa={[380, 430]} konum={[330, 190]} metin="FROM FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "walnuts")} capa={[250, 440]} konum={[330, 190]} metin="WALNUTS" renk={RENK.altin} />
      </Kamera>
      {/* sağ kâğıt panel: görselin sağ kenarını da örter */}
      <div style={{ position: "absolute", left: 1110, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 7%, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={K(0, "ALA,")} satirlar={b.satirlar} x={1200} y={190} boyut={96} adim={0.7} />
      <Not t={t} bas={K(1, "National")} metin="NIH ADEQUATE INTAKE, PER DAY" x={1200} y={410} boyut={28} agirlik={800} renk={RENK.gri} />
      <VurguRozet t={t} bas={K(1, "1.6")} vurgu="1.6 G" not="MEN" x={1370} y={470} genislik={330} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "1.1")} vurgu="1.1 G" not="WOMEN" x={1720} y={470} genislik={330} boyut={92} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(2, "covers")} ad="onay" x={1300} y={800} />
      <div style={{ position: "absolute", left: 1380, top: 800, transform: `translate(0, -50%) scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin="1 OUNCE COVERS IT" renk={RENK.yesil} boyut={32} />
      </div>
    </>
  );
};

export default S07;
