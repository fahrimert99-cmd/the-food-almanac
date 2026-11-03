// Sahne 1 — 24 saat susuzluk: sağ boş kâğıt alanında başlık, rozet ve etiketler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780]);
  const tYoung = K(0, "young men");
  const [sv, av] = pop(t, tYoung, 0.5);
  const tConc = K(0, "concentrated");
  const [sk, ak] = pop(t, tConc, 0.5);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={pen}>
        <Etiket t={t} bas={K(0, "less thirsty")} bitis={tConc - 0.2} capa={[390, 520]} konum={[400, 740]} metin="LESS THIRSTY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={K(0, "24 hours")} satirlar={["24 HOURS", "NO WATER"]} x={1860} y={190} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <VurguRozet t={t} bas={K(0, "67")} vurgu="67–75" not="SEVEN HEALTHY MEN" x={1640} y={430} genislik={400} boyut={96} />
      <div style={{ position: "absolute", left: 1450, top: 640, opacity: av, transform: `scale(${sv})`, transformOrigin: "0 50%" }}>
        <Hap metin="VS 7 YOUNG MEN" renk={RENK.yesil} boyut={28} />
      </div>
      <div style={{ position: "absolute", left: 1345, top: 730, opacity: ak, transform: `scale(${sk})`, transformOrigin: "0 50%" }}>
        <Hap metin="BLOOD MORE CONCENTRATED" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S01;
