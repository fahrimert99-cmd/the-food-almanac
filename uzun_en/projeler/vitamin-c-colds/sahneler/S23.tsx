// Sahne 23 — geç başlamak: süre ve şiddette tutarlı etki yok.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1800]);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={pen} />
      {/* sağdaki boş kâğıt alanında başlık */}
      <Baslik t={t} bas={K(0, "result")} metin="STARTING LATE" x={1130} y={250} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "no")} metin="NO CLEAR GAIN" x={1130} y={380} boyut={120} renk={RENK.mercan} />
      <Liste t={t} x={1130} y={540} aralik={110} boyut={40} isaret="nokta" genislik={820} ogeler={[
        { bas: K(0, "how long"), metin: "HOW LONG COLDS LASTED", renk: RENK.altin },
        { bas: K(0, "severe"), metin: "HOW SEVERE THEY FELT", renk: RENK.altin },
      ]} />
      <Not t={t} bas={K(0, "consistent") + 0.4} metin="No consistent effect on either" x={1130} y={780} boyut={34} renk={RENK.gri} />
    </>
  );
};

export default S23;
