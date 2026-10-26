// Sahne 23 — örüntü: küçük/orta kazanım, umut verici ama tedavi değil, üç güvenlik kontrolü.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bitis1 = K(2, "That") - 0.2, bitis2 = K(3, "three") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800])}>
        <Etiket t={t} bas={K(2, "promising")} bitis={bitis2} capa={[560, 540]} konum={[860, 400]} metin="TURMERIC" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pattern")} bitis={K(1, "Small") - 0.1} metin="NOTICE THE PATTERN" x={110} y={170} boyut={92} renk={RENK.koyuYesil} />
      <Liste t={t} x={110} y={110} aralik={96} boyut={38} isaret="nokta" genislik={1000} ogeler={[
        { bas: K(1, "Small"), bitis: bitis1, metin: "SMALL TO MODERATE GAINS", renk: RENK.altin },
        { bas: K(1, "short"), bitis: bitis1, metin: "SHORT TRIALS", renk: RENK.altin },
        { bas: K(1, "physical"), bitis: bitis1, metin: "SOME TESTS UNCHANGED", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(2, "promising")} bitis={bitis2} satirlar={["PROMISING SIGNAL,", "NOT A CURE"]} x={110} y={140} boyut={100}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Ikon t={t} bas={K(3, "three")} ad="uyari" x={160} y={160} zemin={RENK.altin} />
      <Baslik t={t} bas={K(3, "three")} metin="3 SAFETY CHECKS" x={240} y={160} boyut={92} renk={RENK.lacivert} />
      <Not t={t} bas={K(3, "safety")} metin="worth knowing" x={244} y={235} boyut={34} />
    </>
  );
};

export default S23;
