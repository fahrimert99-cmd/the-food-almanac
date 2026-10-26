// Sahne 16 — gözlemsel çalışma: bağlantı, kanıt değil. Sağdaki boş kâğıt başlığa ayrıldı.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = 9.3;
  return (
    <>
      {/* pencere alt kenarı y<980: sol alttaki imza kadraja girmez */}
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [60, 10, 1720], [140, 20, 1700])} />
      <Baslik t={t} bas={K(0, "a link")} bitis={bit} metin="A LINK," x={1860} y={230} boyut={118} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "not proof")} bitis={bit} metin="NOT PROOF" x={1860} y={355} boyut={118} renk={RENK.mercan} hiza="sag" />
      <Etiket t={t} bas={K(0, "observational")} bitis={4.9} capa={[860, 905]} konum={[1260, 790]} metin="OBSERVATIONAL STUDY" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "screening")} bitis={bit} capa={[445, 610]} konum={[960, 330]} metin="SCREENING TOOL" renk={RENK.yesil} />
      <Baslik t={t} bas={K(1, "not a final")} bitis={bit} metin="NOT A FINAL DIAGNOSIS" x={1860} y={530} boyut={46} renk={RENK.lacivert} hiza="sag" font="inter" agirlik={800} />
      <Not t={t} bas={K(2, "the pattern")} metin="THE PATTERN FITS…" x={1860} y={180} boyut={40} hiza="sag" agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(2, "stomach")} satirlar={["STOMACH", "ACID"]} x={1860} y={310} boyut={118} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
    </>
  );
};

export default S16;
