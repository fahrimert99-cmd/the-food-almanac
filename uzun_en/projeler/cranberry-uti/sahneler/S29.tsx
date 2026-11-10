// Sahne 29 — suyu mu kapsül mü: 19 ve 29 deneme rozetleri, ardından "belirsiz".
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1820])}>
        {/* görseldeki kesikli çizgi kusurunu kâğıt yamayla kapat */}
        <div style={{ position: "absolute", left: 880, top: 490, width: 380, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(249,247,235,1) 0%, rgba(249,247,235,1) 70%, rgba(249,247,235,0) 100%)` }} />
        <Etiket t={t} bas={K(1, "Juice")} capa={[340, 330]} konum={[760, 190]} metin="JUICE OR CONCENTRATE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "capsules")} capa={[760, 640]} konum={[1010, 430]} metin="CAPSULES" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Cochrane")} />
      <VurguRozet t={t} bas={K(1, "19")} vurgu="19" not="TRIALS · JUICE OR CONCENTRATE" x={1350} y={190} genislik={380} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "29")} vurgu="29" not="TRIALS · TABLETS, CAPSULES, POWDER" x={1710} y={190} genislik={380} renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "unclear")} metin="WHICH WORKS BETTER?" x={1530} y={640} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "unclear") + 0.2} metin="UNCLEAR" x={1530} y={740} boyut={96} hiza="orta" renk={RENK.mercan} />
      <Not t={t} bas={K(2, "certainty")} metin="certainty of evidence: very low" x={1530} y={800} hiza="orta" boyut={34} agirlik={800} genislik={700} />
    </>
  );
};

export default S29;
