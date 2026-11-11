// Sahne 33 — takviye almak için bir neden değil; Cochrane: kanıt yetersiz.
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1810]);
  const b = s.meta.baslik;
  const tL = K(1, "pill,");
  const tSon = K(2, "two") - 0.2;
  const [sc, al] = pop(t, K(2, "insufficient"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={w} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={K(0, "reason")} satirlar={b?.satirlar ?? []} x={1040} y={230} boyut={100} />
      <Liste t={t} x={1040} y={540} boyut={34} isaret="nokta"
        ogeler={[
          { bas: tL, metin: "A PILL", bitis: tSon },
          { bas: K(1, "selected"), metin: "A SELECTED GROUP", bitis: tSon },
          { bas: K(1, "supervised"), metin: "SUPERVISED BY A CLINIC", bitis: tSon },
        ]} />
      <VurguRozet t={t} bas={K(2, "two")} vurgu="2" not="trials" x={1210} y={520} renk={RENK.altin} genislik={320} />
      <VurguRozet t={t} bas={K(2, "100")} vurgu="100" not="people in total" x={1600} y={520} renk={RENK.altin} genislik={320} />
      <div style={{ position: "absolute", left: 1405, top: 800, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="EVIDENCE INSUFFICIENT" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S33;
