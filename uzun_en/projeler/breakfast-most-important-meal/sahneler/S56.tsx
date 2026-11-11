// Sahne 56 — güvenlik notu: böbrek hastalığı ve insülin/sülfonilüre için önce doktora danış.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; baslik: string; alt: string; y: number }> = ({ t, bas, baslik, alt, y }) => {
  const [sc, al] = pop(t, bas, 0.55);
  return (
    <div style={{ position: "absolute", right: 60, top: y, width: 860, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      background: "#FCF8EC", border: `3px solid ${RENK.altin}`, borderRadius: 24, padding: "18px 28px 18px 120px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert }}>{baslik}</div>
      <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 30, color: RENK.lacivert, marginTop: 6 }}>{alt}</div>
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [0, 120, 1800], [50, 170, 1680])}>
        <Etiket t={t} bas={K(1, "doctor")} capa={[190, 470]} konum={[600, 330]} metin="YOUR DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1860} y={150} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Madde t={t} bas={K(1, "kidney")} baslik="KIDNEY DISEASE" alt="Check before raising your protein" y={480} />
      <Ikon t={t} bas={K(1, "kidney")} ad="uyari" x={1000} y={540} boyut={76} zemin={RENK.altin} />
      <Madde t={t} bas={K(2, "insulin")} baslik="INSULIN OR A SULFONYLUREA" alt="Check before changing when you eat" y={690} />
      <Ikon t={t} bas={K(2, "insulin")} ad="uyari" x={1000} y={750} boyut={76} zemin={RENK.altin} />
    </>
  );
};
export default S56;
