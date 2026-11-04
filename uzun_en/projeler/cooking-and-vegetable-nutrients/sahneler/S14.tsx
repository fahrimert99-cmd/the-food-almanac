// Sahne 14 — yazarların sonucu: sol sütunda onaylı yöntemler, sonra çarpılı kaynatma. Buharlı sepet görselin odağı.
import React from "react";
import { Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1900], [60, 40, 1780])} />
      <Not t={t} bas={0.3} metin="AUTHORS' CONCLUSION" x={70} y={240} boyut={28} renk={RENK.altin} agirlik={800} />
      <Liste t={t} isaret="onay" x={70} y={320} aralik={82} boyut={36} genislik={520} ogeler={[
        { bas: K(0, "steaming") - 0.1, metin: "STEAMING" },
        { bas: K(0, "microwaving") - 0.1, metin: "MICROWAVING" },
        { bas: K(0, "pressure cooking") - 0.1, metin: "PRESSURE COOKING" },
      ]} />
      <Not t={t} bas={K(0, "preserve") - 0.1} metin="best at preserving quality" x={70} y={566} boyut={30} renk={RENK.koyuYesil} agirlik={800} />
      <Liste t={t} isaret="carpi" x={70} y={660} boyut={36} genislik={520} ogeler={[
        { bas: K(0, "boiling") - 0.1, metin: "BOILING", renk: RENK.mercan },
      ]} />
      <Not t={t} bas={K(0, "least suitable") - 0.2} metin="generally the least suitable" x={70} y={730} boyut={30} renk={RENK.mercan} agirlik={800} />
    </>
  );
};

export default S14;
