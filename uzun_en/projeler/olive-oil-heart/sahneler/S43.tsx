// Sahne 43 — pişmiş ve çiğ yağ: ana yağ dayanır, bazı bileşikler azalır; kalp çalışması yok.
import React from "react";
import { Etiket, Kamera, Hap, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHold = K(0, "holds up"), tFade = K(0, "fade"), tLab = K(1, "lab"), tNo = K(2, "No study");
  const [sc, al] = pop(t, tLab, 0.5);
  const tPan = K(2, "cooked"), tRaw = K(2, "raw");
  const [sn, an] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 80, 1740])} />
      <Etiket t={t} bas={tHold} bitis={tLab - 0.2} capa={[560, 470]} konum={[330, 130]} metin="MAIN FAT HOLDS UP" renk={RENK.yesil} />
      <Etiket t={t} bas={tFade} bitis={tLab - 0.2} capa={[850, 400]} konum={[1500, 250]} metin="SOME COMPOUNDS FADE" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1450, top: 150, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * (t < tNo - 0.2 ? 1 : 0) }}>
        <Hap metin="LAB CHEMISTRY TESTS" renk={RENK.altin} boyut={30} />
      </div>
      <Etiket t={t} bas={tPan} capa={[600, 450]} konum={[380, 130]} metin="COOKED" renk={RENK.mercan} />
      <Etiket t={t} bas={tRaw} capa={[1373, 600]} konum={[1620, 330]} metin="RAW" renk={RENK.yesil} />
      <div style={{ position: "absolute", left: 1480, top: 150, transform: `translate(-50%, -50%) scale(${sn})`, opacity: an }}>
        <Hap metin="NO STUDY ON HEART ATTACKS" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S43;
