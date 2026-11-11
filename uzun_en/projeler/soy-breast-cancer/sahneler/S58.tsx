// Sahne 58 — güvenlik: alerji, ilaç, tedaviyi değiştirme.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAler = K(0, "allergic"), tIlac = K(1, "medicine"), tNever = K(2, "Never");
  const [sa, aa] = pop(t, tAler, 0.5);
  const aAler = aa * sol(t, tNever - 0.1);
  const [sn, an] = pop(t, tNever, 0.55);
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(1, "pharmacist")} capa={[613, 600]} konum={[1130, 690]} metin="ASK YOUR PHARMACIST" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "soy")} capa={[713, 733]} konum={[1130, 800]} metin="DOES SOY MATTER?" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={["SAFETY", "FIRST"]} x={1860} y={200} boyut={100} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 470, opacity: aAler, transform: `scale(${sa})`, transformOrigin: "100% 50%" }}>
        <Hap metin="ALLERGIC? SKIP IT" renk={RENK.mercan} boyut={36} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 400, width: 640, opacity: an, transform: `scale(${sn})`, transformOrigin: "100% 0",
        display: "flex", alignItems: "center", gap: 22, background: "#FCF8EC", border: `4px solid ${RENK.mercan}`, borderRadius: 26,
        padding: "20px 26px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ flex: "none" }}><Ikon t={t} bas={tNever} ad="uyari" x={44} y={44} boyut={88} zemin={RENK.mercan} /></div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.25, color: RENK.lacivert, marginLeft: 70 }}>
          NEVER STOP OR CHANGE CANCER TREATMENT BECAUSE OF A VIDEO
        </div>
      </div>
    </>
  );
};
export default S58;
