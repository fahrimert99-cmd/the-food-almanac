// Sahne 41 — düşük yağlı yoğurtların %55'i 100 g'da 10–20 g şeker; veri İngiltere 2016.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, Hap, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit0 = K(1, "This is") - 0.1;
  const tH = K(0, "10 to 20");
  const [sc, al] = pop(t, tH, 0.5);
  const gec = K(1, "the lesson") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "sugar per")} bitis={bit0} capa={[850, 770]} konum={[850, 890]} metin="SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "your own")} bitis={gec} capa={[1370, 520]} konum={[1560, 230]} metin="YOUR OWN STORE" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "55")} bitis={bit0} vurgu="55%" not="of low fat yogurts" x={560} y={90} genislik={420} />
      {al > 0 && t < bit0 && (
        <div style={{ position: "absolute", left: 1180, top: 140, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
          <Hap metin="10–20 G SUGAR PER 100 G" renk={RENK.mercan} boyut={36} />
        </div>
      )}
      <Baslik t={t} bas={K(1, "UK data")} bitis={gec} metin="UK DATA · 2016" x={960} y={140} boyut={96} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "the lesson")} metin="THE LESSON TRAVELS" x={960} y={140} boyut={96} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S41;
