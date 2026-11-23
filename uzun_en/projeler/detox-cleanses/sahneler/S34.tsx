// Sahne 34 — Makkapati vd. 2018: yeşil smoothie kürü sonrası vaka.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c1 = s.cumleler[1].bas - 0.1;
  const [sn, an] = pop(t, K(0, "normal"), 0.5);
  const [sb, ab] = pop(t, K(1, "gastric"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        <Etiket t={t} bas={K(0, "green")} bitis={c1} capa={[1280, 520]} konum={[1640, 600]} metin="SMOOTHIE CLEANSE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "antibiotics,")} capa={[500, 905]} konum={[250, 780]} metin="ANTIBIOTICS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "65-year-old")} vurgu="65" not="year-old woman" x={290} y={190} genislik={380} bitis={c1} />
      <div style={{ position: "absolute", left: 290, top: 440, transform: `translate(-50%,0) scale(${sn})`, opacity: an * (t < c1 ? 1 : 0) }}>
        <Hap metin="NORMAL KIDNEYS" renk={RENK.yesil} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 290, top: 190, transform: `translate(-50%,0) scale(${sb})`, opacity: ab }}>
        <Hap metin="GASTRIC BYPASS" renk={RENK.mercan} boyut={28} />
      </div>
      <BaslikBlok t={t} bas={K(1, "end-stage")} satirlar={["END-STAGE", "KIDNEY DISEASE"]} x={1660} y={170} boyut={62} hiza="orta"
        renkler={[RENK.mercan, RENK.mercan]} />
    </>
  );
};

export default S34;
