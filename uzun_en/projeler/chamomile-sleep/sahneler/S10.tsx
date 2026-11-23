// Sahne 10 — yaşlı eller ve papatya çayı solda, sağda sonuç başlığı.
import React from "react";
import { BaslikBlok, kagit, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1760]);
  const aC = eout(ilerle(t, K(0, "better") - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={w}>
        {/* sağdaki silik sahte yazıları kâğıtla örter */}
        <div style={{ position: "absolute", left: 1124, top: 0, width: 800, height: 1080, background: kagit(1) }} />
        <Etiket t={t} bas={K(0, "chamomile")} bitis={K(1, "age") - 0.2} capa={[640, 560]} konum={[800, 250]} metin="CHAMOMILE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "age")} capa={[300, 700]} konum={[300, 900]} metin="AGED 60+" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={K(0, "better")} satirlar={["BETTER", "SLEEP QUALITY"]} x={1180} y={330} boyut={104} />
      <div style={{ position: "absolute", left: 1184, top: 560, height: 6, width: 300 * aC, background: RENK.altin }} />
      <Not t={t} bas={K(0, "than")} metin="chamomile group vs placebo, 4 weeks" x={1184} y={595} boyut={34} genislik={620} />
      <Not t={t} bas={K(1, "measured")} metin="A measured improvement" x={1184} y={720} boyut={40} renk={RENK.koyuYesil} agirlik={800} genislik={620} />
    </>
  );
};

export default S10;
