// Sahne 33 — oksalat çalışması: en çok oksalat = ~%20 yüksek risk; genç kadınlarda bağ yok.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820]);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pen}>
        <Etiket t={t} bas={K(0, "oxalate")} capa={[400, 690]} konum={[250, 430]} metin="SPINACH" renk={RENK.yesil} />
      </Kamera>
      {/* sağ sütun: başlık, rozet, gruplar */}
      <Baslik t={t} bas={K(0, "most")} metin="MOST OXALATE" x={1540} y={200} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={K(0, "20")} vurgu="+22%" not="stone risk in men, highest vs lowest fifth"
        x={1540} y={290} genislik={520} renk={RENK.mercan} />
      <Liste t={t} x={1260} y={640} aralik={86} boyut={34} isaret="carpi" genislik={620}
        ogeler={[
          { bas: K(0, "men"), metin: "MEN", renk: RENK.mercan },
          { bas: K(0, "older"), metin: "OLDER WOMEN", renk: RENK.mercan },
        ]} />
      <Liste t={t} x={1260} y={812} boyut={34} isaret="onay" genislik={620}
        ogeler={[{ bas: K(1, "younger"), metin: "YOUNGER WOMEN: NO LINK", renk: RENK.yesil }]} />
    </>
  );
};

export default S33;
