// Sahne 49 — Not defteri: ilaçlar ve belirtiler listesi.
import React from "react";
import { Baslik, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      {/* pencere üst ve sağ kenardaki bozuk yazıları dışarıda bırakır */}
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [100, 124, 1660], [130, 124, 1630])}>
        <Baslik t={t} bas={K(0, "write")} metin="WRITE IT DOWN" x={1030} y={262} boyut={66} renk={RENK.koyuYesil} />
        <Liste t={t} x={1030} y={340} aralik={96} boyut={34} isaret="nokta" genislik={470} ogeler={[
          { bas: K(0, "medicines"), metin: "MEDICINES", renk: RENK.altin },
          { bas: K(0, "tingling"), metin: "TINGLING", renk: RENK.mercan },
          { bas: K(0, "balance"), metin: "BALANCE TROUBLE", renk: RENK.mercan },
          { bas: K(0, "memory"), metin: "MEMORY CHANGES", renk: RENK.mercan },
        ]} />
        <Baslik t={t} bas={K(1, "next checkup")} metin="NEXT CHECKUP" x={1030} y={770} boyut={56} renk={RENK.lacivert} />
        <Ikon t={t} bas={K(2, "whether")} ad="soru" x={1060} y={860} boyut={64} zemin={RENK.lacivert} />
        <Not t={t} bas={K(2, "whether")} metin="DOES A TEST MAKE SENSE?" x={1112} y={838} boyut={30} agirlik={800} genislik={430} />
        <Ikon t={t} bas={K(2, "short appointment")} ad="saat" x={1060} y={940} boyut={64} zemin={RENK.altin} />
        <Not t={t} bas={K(2, "short appointment")} metin="SHORT APPOINTMENT" x={1112} y={918} boyut={30} agirlik={800} genislik={430} />
      </Kamera>
    </>
  );
};

export default S49;
