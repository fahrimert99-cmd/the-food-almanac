// Sahne 51 — İpucu 3: oruç ve müshil yok; düzenli öğünler, karaciğer ve böbrekler temizlemeye devam eder.
import React from "react";
import { ANTON, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Rozet: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 60, top: 50, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", fontFamily: ANTON, fontSize: 72, display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOruc = K(1, "fasting"), tMus = K(1, "laxatives"), tSon = K(2, "liver");
  const bit1 = K(2, "regular") - 0.2;
  const [s1, a1] = pop(t, tOruc, 0.5), [s2, a2] = pop(t, tMus, 0.5);
  const [s3, a3] = pop(t, tSon, 0.55);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(2, "vegetables,")} capa={[760, 520]} konum={[560, 270]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "whole")} capa={[1470, 480]} konum={[1640, 340]} metin="WHOLE GRAINS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "calories")} capa={[900, 700]} konum={[1020, 900]} metin="STEADY CALORIES" renk={RENK.yesil} />
      </Kamera>
      <Rozet t={t} n="3" />
      {/* 1. vuruş: oruç + müshil = çarpı */}
      {[{ m: "FASTING", y: 70, sc: s1, al: a1 }, { m: "LAXATIVES", y: 170, sc: s2, al: a2 }].map((o) => (
        <div key={o.m} style={{ position: "absolute", left: 220, top: o.y, transform: `scale(${o.sc})`, transformOrigin: "0% 50%",
          opacity: o.al * (t < bit1 ? 1 : 0), display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 54, height: 54, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={34} renk="#fff" />
          </div>
          <Hap metin={o.m} renk={RENK.mercan} boyut={34} />
        </div>
      ))}
      <div style={{ position: "absolute", left: 960, top: 800, transform: `translateX(-50%) scale(${s3})`, opacity: a3 }}>
        <Hap metin="LIVER + KIDNEYS KEEP CLEANING" renk={RENK.yesil} boyut={30} />
      </div>
    </>
  );
};
export default S51;
