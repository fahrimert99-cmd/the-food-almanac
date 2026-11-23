// Sahne 15 — pilot çalışma: küçük kavanoz = az katılımcı; dışlama ve doğal iniş çıkış notu.
import React from "react";
import { AltSis, Baslik, Etiket, Hap, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPilot = K(0, "pilot study"), t17 = K(0, "17 people"), tKucuk = K(0, "too small");
  const tDisla = K(1, "excluded people"), tDoga = K(1, "natural ups and downs");
  const [sk, ak] = pop(t, tDisla, 0.5);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [120, 70, 1700])}>
        <Etiket t={t} bas={t17} bitis={tKucuk + 2.2} capa={[740, 560]} konum={[330, 440]} metin="17 PER GROUP" renk={RENK.yesil} />
        <Etiket t={t} bas={tKucuk} capa={[1200, 470]} konum={[1500, 540]} metin="TOO SMALL TO CATCH" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.8} />
      <Baslik t={t} bas={tPilot} metin="PILOT STUDY" x={150} y={150} boyut={92} renk={RENK.koyuYesil} />
      {/* ikinci cümle: dışlama + doğal iniş çıkış */}
      <div style={{ position: "absolute", left: 1420, top: 190, opacity: ak, transform: `scale(${sk})`, transformOrigin: "0 50%" }}>
        <Hap metin="MOOD OR ANXIETY EXCLUDED" renk={RENK.mercan} boyut={20} />
      </div>
      <Not t={t} bas={tDoga} metin="Improvements could reflect the natural ups and downs of insomnia" x={1420} y={260} boyut={26}
        renk={RENK.lacivert} genislik={400} />
    </>
  );
};

export default S15;
