// Sahne 46 — birleşik sonlanım: üç bileşen (anlatımdan), başlık sağda.
import React from "react";
import { BaslikBlok, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={K(0, "Compared")} metin="SODIUM GROUP VS USUAL CARE" x={1330} y={250} boyut={30} agirlik={800} renk={RENK.gri} genislik={540} />
      <BaslikBlok t={t} bas={K(0, "about a third")} satirlar={["ABOUT A THIRD", "FEWER PROBLEMS"]} x={1860} y={420} boyut={78} hiza="sag"
        renkler={[RENK.altin, RENK.lacivert]} />
      <Not t={t} bas={K(0, "combined")} metin="COMBINED ENDPOINT:" x={1330} y={600} boyut={28} agirlik={800} renk={RENK.gri} genislik={540} />
      <Liste t={t} x={1320} y={650} aralik={100} boyut={26} isaret="nokta" genislik={560} ogeler={[
        { bas: K(0, "pressure"), metin: "PRESSURE BACK UP", renk: RENK.mercan },
        { bas: K(0, "medicine"), metin: "MEDICINE RESTARTED", renk: RENK.altin },
        { bas: K(0, "heart"), metin: "HEART OR CIRCULATION EVENT", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};
export default S46;
