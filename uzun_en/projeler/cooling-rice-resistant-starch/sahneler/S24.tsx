// Sahne 24 — soğutma tek etken: kaseler solda, sağda başlıklar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [10, 70, 1800])}>
        {/* sağ kasedeki sahte yazı: x>1225 kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1215, top: 0, width: 800, height: 548,
          background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(1)} 45px, ${kagit(1)} 100%)`,
          WebkitMaskImage: "linear-gradient(to bottom, #000 0, #000 505px, transparent 100%)" }} />
        <Etiket t={t} bas={K(1, "cooling is")} capa={[460, 440]} konum={[330, 170]} metin="COOLING" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "cooling")} bitis={K(1, "how many") - 0.1} satirlar={["COOLING:", "NOT USELESS"]} x={1830} y={190} boyut={92} hiza="sag" />
      <BaslikBlok t={t} bas={K(1, "how many")} satirlar={["MANY THINGS", "SHAPE IT"]} x={1830} y={190} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "only one")} vurgu="ONE OF MANY" not="factors for blood sugar" x={1540} y={390} genislik={560} boyut={80} />
    </>
  );
};

export default S24;
