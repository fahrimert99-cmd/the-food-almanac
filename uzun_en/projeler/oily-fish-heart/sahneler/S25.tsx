// Sahne 25 — REDUCE-IT: katılımcılar (bekleme odası görseli)
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = c[1].bas - 0.3;
  const aArka = eout(ilerle(t, K(0, "8,179") - 0.3, 0.5)) * (1 - eout(ilerle(t, tSon, 0.4)) * 0);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={K(0, "REDUCE-IT")} metin="REDUCE-IT" x={90} y={190} boyut={118} renk={RENK.koyuYesil} />
      {/* sol üst: boş duvar; liste için hafif zemin */}
      <div style={{ position: "absolute", left: 540, top: 120, width: 560, height: 250, opacity: aArka,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.92)} 0%, ${kagit(0.9)} 60%, ${kagit(0)} 100%)` }} />
      <VurguRozet t={t} bas={K(0, "8,179")} vurgu="8,179" not="ADULTS ENROLLED" x={330} y={290} bitis={tSon} genislik={400} />
      <Liste t={t} isaret="onay" x={620} y={190} boyut={34} aralik={72} genislik={480}
        ogeler={[
          { bas: K(0, "statins"), metin: "ALREADY ON STATINS", renk: RENK.yesil, bitis: tSon },
          { bas: K(0, "triglycerides"), metin: "HIGH TRIGLYCERIDES", renk: RENK.yesil, bitis: tSon },
        ]} />
      <VurguRozet t={t} bas={K(1, "71")} vurgu="71%" not="ALREADY HAD HEART DISEASE" x={420} y={290} renk={RENK.mercan} genislik={500} />
    </>
  );
};

export default S25;
