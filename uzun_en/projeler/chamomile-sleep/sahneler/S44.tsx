// S44 — varfarin vaka bildirimi (2006)
import React from "react";
import { BaslikBlok, Hap, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gec = K(1, "Her") - 0.1;
  const [sc, al] = pop(t, K(1, "serious"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "2006")} />}
      <BaslikBlok t={t} bas={K(0, "2006")} satirlar={["WARFARIN", "CASE REPORT"]} x={1860} y={170} boyut={100} hiza="sag" />
      <Not t={t} bas={K(0, "report")+0.4} metin="ONE PATIENT, 2006" x={1860} y={340} hiza="sag" boyut={34} agirlik={800} />
      <Liste t={t} x={1230} y={470} aralik={80} boyut={28} isaret="nokta" genislik={640} ogeler={[
        { bas: K(0, "70-year-old"), metin: "70-YEAR-OLD WOMAN", renk: RENK.lacivert, bitis: gec },
        { bas: K(0, "warfarin"), metin: "ON WARFARIN", renk: RENK.mercan, bitis: gec },
        { bas: K(0, "tea"), metin: "TEA, SEVERAL TIMES A DAY", renk: RENK.altin, bitis: gec },
        { bas: K(0, "lotion"), metin: "PLUS CHAMOMILE LOTION", renk: RENK.altin, bitis: gec },
      ]} />
      <Not t={t} bas={K(1, "blood-thinning")} metin="BLOOD-THINNING MEASURE" x={1560} y={440} hiza="orta" boyut={30} agirlik={800} genislik={560} />
      <VurguRozet t={t} bas={K(1, "7.9")} vurgu="INR 7.9" not="reported value" x={1560} y={500} boyut={110} genislik={420} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1560, top: 800, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="SERIOUS INTERNAL BLEEDING" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};
export default S44;
