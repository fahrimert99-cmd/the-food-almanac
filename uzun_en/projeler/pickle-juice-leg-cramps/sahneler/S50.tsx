// Sahne 50 — ilaç değişikliği: doktora/eczacıya danış, reçeteyi kendiliğinden bırakma.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 15, 1860]);
  const tIlac = K(0, "new medicine"), tSoyle = K(0, "tell"), tBirak = K(1, "don't"), tKontrol = K(1, "they can");
  return (
    <>
      <Kamera gorsel="tam/50" pencere={p} />
      {/* çanta üstüne yeni ilaç etiketi */}
      <Etiket t={t} bas={tIlac} bitis={tSoyle + 2.6} capa={[290, 230]} konum={[640, 120]} metin="NEW MEDICINE" renk={RENK.altin} />
      <BaslikBlok t={t} bas={tSoyle} satirlar={["ASK BEFORE", "YOU STOP"]} x={1010} y={250} boyut={120}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Liste t={t} x={1010} y={520} aralik={100} boyut={32} isaret="onay" genislik={840} ogeler={[
        { bas: tSoyle + 0.2, metin: "TELL DOCTOR / PHARMACIST" },
        { bas: tBirak, metin: "DON'T STOP ON YOUR OWN", renk: RENK.mercan },
        { bas: tKontrol, metin: "THEY CHECK THE CHANGE", renk: RENK.altin },
      ]} />
    </>
  );
};
export default S50;
