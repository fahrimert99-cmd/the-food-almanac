// Sahne 48 — gece tuvalet nedenleri: yatak odası, sol üstte başlık + etiketler
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [20, 12, 1880], [100, 50, 1700])}>
        <Etiket t={t} bas={K(0, "sleep apnea")} bitis={K(0, "fluid") - 0.1} capa={[1020, 400]} konum={[560, 190]} metin="SLEEP APNEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "fluid that pools")} bitis={K(1, "If") - 0.1} capa={[760, 760]} konum={[880, 150]} metin="FLUID IN THE LEGS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "other causes")} metin="OTHER CAUSES" x={110} y={300} boyut={92} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={K(1, "doctor")} ad="onay" x={1260} y={150} zemin={RENK.yesil} />
      <Not t={t} bas={K(1, "mention")} metin="MENTION IT TO YOUR DOCTOR" x={110} y={380} boyut={38} agirlik={800} />
    </>
  );
};
export default S48;
