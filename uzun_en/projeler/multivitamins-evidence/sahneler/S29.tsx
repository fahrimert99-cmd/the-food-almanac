// Sahne 29 — bölüm kartı: görev gücü (USPSTF) açıklaması.
import React from "react";
import { BolumKarti, Hap, RENK, SP, kelimeZamani, pop } from "../kutuphane";

// 30: sandalyeler ve şişe; 28: iki şişe; 12: terazi (hepsi kusursuz 4:3 kırpım)
const GORSELLER: { gorsel: string; kirp: [number, number, number, number] }[] = [
  { gorsel: "tam/30", kirp: [90, 270, 1130, 1050] },
  { gorsel: "tam/28", kirp: [0, 100, 940, 805] },
  { gorsel: "tam/12", kirp: [250, 150, 1330, 960] },
];

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "heart disease"), 0.5);
  const [s2, a2] = pop(t, K(0, "cancer"), 0.5);
  return (
    <>
      <BolumKarti t={t} s={s} gorseller={GORSELLER} />
      <div style={{ position: "absolute", left: 140, top: 790, display: "flex", gap: 20 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}><Hap metin="HEART DISEASE" renk={RENK.mercan} boyut={30} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}><Hap metin="CANCER" renk={RENK.altin} boyut={30} /></div>
      </div>
    </>
  );
};

export default S29;
