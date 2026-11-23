// Sahne 1 — 3 günlük meyve suyu çalışması + böbrek uyarısı
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(1, "Yet") - 0.15; // 1. grup çıkışı
  const tKid = K(1, "kidney"), tDia = K(1, "dialysis");
  const pw = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={pw}>
        <Etiket t={t} bas={K(0, "juice")} bitis={cik} capa={[480, 420]} konum={[900, 250]} metin="GREEN JUICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "weight")} bitis={cik} capa={[800, 640]} konum={[1000, 470]} metin="WEIGHT" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin="Henning et al. · Sci Rep · 2017" bas={K(0, "2017")} bitis={cik} />
      <BaslikBlok t={t} bas={K(0, "drank")} bitis={cik} satirlar={["3 DAYS", "OF JUICE"]} x={1440} y={250} boyut={118} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "20")} bitis={cik} vurgu="20" not="healthy adults in one small study" x={1440} y={560} genislik={460} />
      <Baslik t={t} bas={tKid} metin="KIDNEY DOCTORS" x={1440} y={330} boyut={84} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "reported")} metin="REPORTED" x={1440} y={430} boyut={44} hiza="orta" renk={RENK.gri} font="inter" agirlik={700} aralik={6} />
      <Baslik t={t} bas={tDia} metin="DIALYSIS" x={1440} y={580} boyut={140} hiza="orta" renk={RENK.mercan} />
      <Ikon t={t} bas={tDia + 0.2} ad="uyari" x={1440} y={780} boyut={100} zemin={RENK.mercan} />
    </>
  );
};
export default S01;
