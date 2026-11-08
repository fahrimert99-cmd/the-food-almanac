// Sahne 53 — Güvenlik notu: durumlar + kime danışılacağı.
import React from "react";
import { Baslik, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const DURUM = [["DIABETES", "diabetes"], ["KIDNEY DISEASE", "kidney"], ["HIGH BLOOD PRESSURE", "high"], ["REGULAR MEDICINES", "regular"], ["SPECIAL DIET", "special"]];
const KISI = [["DOCTOR", "doctor,"], ["PHARMACIST", "pharmacist"], ["DIETITIAN", "dietitian"]];

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTalk = K(1, "talk");
  const [sb, ab] = pop(t, K(1, "before") - 0.05, 0.55);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1720])} />
      <Baslik t={t} bas={0.05} metin="SAFETY" x={700} y={140} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "safety")} metin="FIRST" x={700} y={250} boyut={100} renk={RENK.koyuYesil} />
      {DURUM.map(([m, f], i) => {
        const [sc, al] = pop(t, K(1, f) - 0.05, 0.5);
        return (
          <div key={m} style={{ position: "absolute", left: 700, top: 360 + i * 78, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
            <Hap metin={m} renk={RENK.altin} boyut={30} />
          </div>
        );
      })}
      <Not t={t} bas={tTalk} metin="TALK WITH YOUR" x={1280} y={360} boyut={32} renk={RENK.gri} agirlik={800} />
      {KISI.map(([m, f], i) => {
        const [sc, al] = pop(t, K(1, f) - 0.05, 0.5);
        return (
          <div key={m} style={{ position: "absolute", left: 1280, top: 430 + i * 82, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
            <Hap metin={m} renk={RENK.yesil} boyut={34} />
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1280, top: 700, transform: `scale(${sb})`, transformOrigin: "0 50%", opacity: ab }}>
        <Hap metin="BEFORE BIG CHANGES" renk={RENK.lacivert} boyut={30} />
      </div>
    </>
  );
};

export default S53;
