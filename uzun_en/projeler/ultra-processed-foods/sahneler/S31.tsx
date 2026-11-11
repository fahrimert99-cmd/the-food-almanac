// Sahne 31 — Lane 2024 (BMJ): 45 meta-analiz, ~9,9 milyon kişi, 32 sağlık sonucu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "Higher") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 50, 1780])}>
        <Etiket t={t} bas={K(0, "45")} bitis={tB} capa={[560, 650]} konum={[1130, 600]} metin="45 META-ANALYSES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "9.9") - 0.15} satirlar={["9.9 MILLION", "PEOPLE"]} x={1860} y={250} hiza="sag" boyut={104} />
      <VurguRozet t={t} bas={K(1, "32") - 0.1} vurgu="32" not="HEALTH OUTCOMES" x={1580} y={520} genislik={420} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "linked")} metin="LINKED WITH HIGHER INTAKE" x={1860} y={790} hiza="sag" boyut={34} agirlik={800} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S31;
