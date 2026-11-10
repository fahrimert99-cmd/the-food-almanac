// Sahne 45 — varfarin uyarısı: sağ boş kâğıtta başlık, liste ve NIH notu.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* hap kutusu kapağındaki anlamsız yazıyı uyarı rozeti örter */}
        <Ikon t={t} bas={0} ad="uyari" x={745} y={558} boyut={130} zemin={RENK.altin} />
      </Kamera>
      <Not t={t} bas={K(0, "medicine")} metin="THE MEDICINE WARNING" x={1860} y={150} hiza="sag" genislik={600} boyut={36} agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "warfarin")} satirlar={["WARFARIN?", "ASK FIRST"]} x={1860} y={290} boyut={112} hiza="sag" renkler={[RENK.mercan, RENK.koyuYesil]} />
      <Liste t={t} x={1260} y={560} aralik={90} boyut={36} isaret="onay" genislik={600} ogeler={[
        { bas: K(1, "doctor"), metin: "YOUR DOCTOR" },
        { bas: K(1, "pharmacist"), metin: "OR PHARMACIST" },
      ]} />
      <Etiket t={t} bas={K(1, "blood")} bitis={K(2, "The")} capa={[580, 600]} konum={[1000, 880]} metin="BLOOD THINNER" renk={RENK.mercan} boyut={28} />
      <Not t={t} bas={K(2, "conflicting")} metin="NIH: EVIDENCE IS CONFLICTING" x={1860} y={800} hiza="sag" genislik={600} boyut={38} agirlik={800} />
    </>
  );
};

export default S45;
