// Sahne 29 — güvenlik önce: eczacı önlüğü ve ilaç şişesi solda; sağda başlık ve doktora/eczacıya söylenecek üç adım.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "not"), tGerek = K(1, "need"), tTell = K(2, "tell"), tEcz = K(2, "pharmacist"), tSure = K(2, "long"), tSor = K(2, "ask");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tGerek} bitis={tTell - 0.15} capa={[703, 800]} konum={[1130, 700]} metin="MANY TRULY NEED THEM" renk={RENK.yesil} />
        <Etiket t={t} bas={tEcz} capa={[330, 520]} konum={[760, 560]} metin="PHARMACIST" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={200} boyut={128} hiza="sag" />
      <Liste t={t} x={950} y={500} boyut={42} aralik={106} genislik={900} isaret="sayi" ogeler={[
        { bas: tTell, metin: "TELL YOUR DOCTOR", renk: RENK.koyuYesil },
        { bas: tSure, metin: "HOW LONG YOU'VE TAKEN THEM", renk: RENK.koyuYesil },
        { bas: tSor, metin: "ASK ABOUT A B12 CHECK", renk: RENK.koyuYesil },
      ]} />
    </>
  );
};

export default S29;
