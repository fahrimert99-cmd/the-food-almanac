// Sahne 17 — yıllarca izlem: sağ panelde yaş aralığı rozeti ve üç adımlı zaman çizelgesi.
import React from "react";
import { BaslikBlok, Kamera, Liste, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 40, 1700], [40, 60, 1600])} />
      {/* sağ taraf: görselin keskin kenarını ve takvim rakamlarını örten kâğıt panel */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 1020, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 9%, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={K(0, "aged")} satirlar={s.meta.baslik!.satirlar} x={1150} y={230} boyut={96} />
      <VurguRozet t={t} bas={K(0, "75,")} vurgu="20–75" not="AGE OF THE WOMEN" x={1500} y={440} genislik={380} boyut={84} />
      <Liste t={t} x={1130} y={660} aralik={92} boyut={30} genislik={740} ogeler={[
        { bas: K(0, "six months"), metin: "6 MONTHS AFTER DIAGNOSIS", renk: RENK.altin },
        { bas: K(0, "again"), metin: "AGAIN OVER 5 YEARS", renk: RENK.yesil },
        { bas: K(1, "median"), metin: "MEDIAN: ALMOST 4 YEARS", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};
export default S17;
