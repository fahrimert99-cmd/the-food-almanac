// Sahne 24 — hareket hastalığı: Lien 2003, 13 gönüllü (PART 3).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [60, 90, 1560])}>
        <Etiket t={t} bas={K(1, "ginger")} capa={[420, 760]} konum={[1000, 780]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "motion")} metin="MOTION SICKNESS" x={1860} y={200} boyut={64} hiza="sag" renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "Lien") + 0.2} />
      <BaslikBlok t={t} bas={K(1, "13")} satirlar={b.satirlar} x={1860} y={400} boyut={116} hiza="sag" />
      <Not t={t} bas={K(1, "history")} metin={b.not!} x={1860} y={520} hiza="sag" genislik={560} />
    </>
  );
};

export default S24;
