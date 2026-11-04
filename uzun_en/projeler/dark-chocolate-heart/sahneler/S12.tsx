// Sahne 12 — 500 mg flavanol kapsülü ve plasebo, kör düzen, ortanca 3,5 yıl.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800]);
  const tKor = K(2, "Neither");
  const [sc, al] = pop(t, tKor, 0.5);
  return (
    <>
      <Kamera gorsel="tam/12" pencere={p}>
        {/* takvim başlığındaki bozuk yazı kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 520, top: 340, width: 520, height: 130,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "cocoa extract")} bitis={tKor - 0.2} capa={[347, 640]} konum={[330, 90]} metin="COCOA EXTRACT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "look-alike")} bitis={tKor - 0.2} capa={[660, 340]} konum={[960, 120]} metin="PLACEBO" renk={RENK.lacivert} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "500")} satirlar={["500 MG", "FLAVANOLS A DAY"]} x={1200} y={170} boyut={104}
        renkler={[RENK.altin, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "500") + 0.5} metin="cocoa extract capsules versus placebo" x={1204} y={330} boyut={32} />
      <div style={{ position: "absolute", left: 1450, top: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NEITHER SIDE KNEW" renk={RENK.lacivert} boyut={32} />
      </div>
      <VurguRozet t={t} bas={K(2, "three and a half")} vurgu="≈ 3.5 YEARS" not="MEDIAN LENGTH" x={1450} y={580} genislik={470} boyut={96} />
    </>
  );
};

export default S12;
