// Sahne 46 — yaşlı yetişkinlerde kanıt: çalışmalar sağlıklı / 18–65 yaş; 60 üstü için kanıt zayıf.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tH = K(2, "younger or"), bH = K(2, "over 60") - 0.15;
  const [sc, al] = pop(t, tH, 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={K(1, "healthy")} bitis={K(1, "the kefir") - 0.1} capa={[430, 600]} konum={[1450, 640]} metin="HEALTHY ADULTS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "older")} satirlar={["OLDER", "ADULTS?"]} x={1860} y={230} boyut={120} hiza="sag" adim={0.4} />
      <VurguRozet t={t} bas={K(1, "18")} bitis={K(2, "Most") - 0.1} vurgu="18–65" not="kefir trial ages" x={1500} y={520} genislik={400} />
      {al > 0 && t < bH && (
        <div style={{ position: "absolute", left: 1500, top: 560, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
          <Hap metin="YOUNGER OR MIXED AGES" renk={RENK.altin} boyut={32} />
        </div>
      )}
      <VurguRozet t={t} bas={K(2, "over 60")} vurgu="60+" not="evidence is thin" x={1500} y={520} genislik={400} renk={RENK.mercan} />
    </>
  );
};

export default S46;
