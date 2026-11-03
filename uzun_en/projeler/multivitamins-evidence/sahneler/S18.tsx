// Sahne 18 — ilk denemenin özeti; ardından yeni deneme
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = K(1, "then came") - 0.15;
  const tHeart = K(0, "no heart") - 0.05, tCancer = K(0, "small cancer") - 0.05, tEye = K(0, "small eye") - 0.05, tMem = K(0, "no memory") - 0.05;
  const tTrial = K(1, "trial"), tOlder = K(1, "older adults");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])} />
      {/* sol üst boş kâğıtta dört bulgu */}
      <Liste t={t} x={70} y={90} aralik={84} boyut={30} isaret="nokta" genislik={640} ogeler={[
        { bas: tHeart, metin: "NO HEART BENEFIT", renk: RENK.gri, bitis: bit },
        { bas: tCancer, metin: "SMALL CANCER SIGNAL", renk: RENK.altin, bitis: bit },
        { bas: tEye, metin: "SMALL EYE SIGNAL", renk: RENK.altin, bitis: bit },
        { bas: tMem, metin: "NO MEMORY BENEFIT", renk: RENK.gri, bitis: bit },
      ]} />
      {/* 2. cümle: tabela ve şişe */}
      <Etiket t={t} bas={tTrial} capa={[1240, 238]} konum={[1580, 130]} metin="NEXT TRIAL" renk={RENK.yesil} boyut={28} />
      <Etiket t={t} bas={tOlder} capa={[1090, 700]} konum={[1540, 320]} metin="OLDER ADULTS · BOTH SEXES" renk={RENK.altin} boyut={26} />
    </>
  );
};

export default S18;
