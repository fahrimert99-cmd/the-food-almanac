// Sahne 54 — Güvenlik notu: başlık sağda, hedef INR ve doz etiketleri, değiştirme listesi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "safety"), tInr = K(1, "target INR"), tDoz = K(1, "your dose");
  const tIlac = K(2, "change your medicine"), tDiyet = K(2, "big change"), tSor = K(2, "asking");
  const [sk, ak] = pop(t, tSor, 0.55);
  const bas = s.meta.baslik?.satirlar ?? ["SAFETY", "FIRST"];
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [40, 170, 1640])}>
        <Etiket t={t} bas={tInr} bitis={tIlac - 0.1} capa={[1000, 520]} konum={[1560, 520]} metin="TARGET INR" renk={RENK.altin} boyut={30} />
        <Etiket t={t} bas={tDoz} bitis={tIlac - 0.1} capa={[730, 660]} konum={[1300, 790]} metin="YOUR DOSE" renk={RENK.altin} boyut={30} />
      </Kamera>
      <BaslikBlok t={t} bas={tBas} satirlar={bas} x={1290} y={190} boyut={124} />
      <Liste t={t} isaret="carpi" x={1380} y={620} aralik={100} boyut={34} genislik={500} ogeler={[
        { bas: tIlac, metin: "CHANGE MEDICINE", renk: RENK.mercan },
        { bas: tDiyet, metin: "BIG DIET CHANGE", renk: RENK.mercan },
      ]} />
      <div style={{ position: "absolute", left: 1560, top: 860, transform: `translate(-50%, -50%) scale(${sk})`, opacity: ak }}>
        <Hap metin="ASK CARE TEAM FIRST" renk={RENK.yesil} boyut={36} />
      </div>
    </>
  );
};

export default S54;
