// Sahne 1 — açılış: kahvaltıyı atlamak, öğle kan şekeri +%37 (Jakubowicz 2015).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 20, 1840], [50, 70, 1720])}>
        {/* tabak: kahvaltı */}
        <Etiket t={t} bas={K(0, "breakfast,")} capa={[470, 640]} konum={[300, 300]} metin="BREAKFAST" renk={RENK.altin} />
      </Kamera>
      {/* sağ boş kâğıt alanında başlık */}
      <Baslik t={t} bas={K(0, "skip")} metin={b.satirlar[0]} x={1860} y={300} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "breakfast,")} metin={b.satirlar[1]} x={1860} y={412} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "lunchtime")} metin="LUNCHTIME BLOOD SUGAR" x={1860} y={500} hiza="sag" boyut={32} agirlik={800} genislik={560} />
      <VurguRozet t={t} bas={K(0, "37")} vurgu={b.vurgu!} not="type 2 diabetes" x={1580} y={600} genislik={420} boyut={120} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={3.6} />
    </>
  );
};

export default S01;
