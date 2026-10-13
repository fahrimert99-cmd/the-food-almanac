// Sahne 22 — tek yumurta kaidede: "bir yumurta LDL'yi birkaç mg/dL artırır; gerçek ama küçük".
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [300, 120, 1620], [380, 160, 1500])}>
        {/* alt kenardaki sahte yazı kalıntısı */}
        <div style={{ position: "absolute", left: 1400, top: 1022, width: 340, height: 58,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Etiket t={t} bas={K(0, "one extra egg")} bitis={5.6} capa={[1400, 700]} konum={[980, 560]} metin="ONE EXTRA EGG" renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "milligrams")} vurgu="A FEW MG/DL" not="LDL NUDGED UP" x={620} y={660} genislik={560} boyut={84} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "real,")} satirlar={s.meta.baslik!.satirlar} x={140} y={190} boyut={110} renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S22;
