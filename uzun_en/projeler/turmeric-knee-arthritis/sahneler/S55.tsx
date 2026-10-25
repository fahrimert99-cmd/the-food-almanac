// Sahne 55 — Önce doktora/eczacıya danış; karaciğer belirtilerinde dur ve ara
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDur = K(0, "stop");
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "doctor")} capa={[360, 640]} konum={[400, 880]} metin="DOCTOR OR PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Check")} bitis={tDur - 0.3} metin="CHECK FIRST" x={90} y={130} boyut={90} renk={RENK.lacivert} />
      <Liste t={t} x={900} y={100} aralik={84} boyut={34} isaret="nokta" genislik={760} ogeler={[
        { bas: K(0, "blood thinners"), metin: "BLOOD THINNERS", renk: RENK.altin, bitis: tDur - 0.3 },
        { bas: K(0, "gallbladder"), metin: "GALLBLADDER PROBLEMS", renk: RENK.altin, bitis: tDur - 0.3 },
        { bas: K(0, "liver problems"), metin: "LIVER PROBLEMS", renk: RENK.altin, bitis: tDur - 0.3 },
      ]} />
      <Baslik t={t} bas={tDur} metin="STOP AND CALL" x={90} y={130} boyut={90} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "signs")} metin="if you notice signs of liver trouble" x={90} y={200} boyut={32} genislik={440} agirlik={800} />
    </>
  );
};

export default S55;
