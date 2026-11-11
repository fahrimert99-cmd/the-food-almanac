// Sahne 13 — 100.000+ yetişkin: görsel solda, sağ boş kâğıtta sayılar.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";
import { ANTON, INTER } from "../kutuphane";

const vir = (x: string) => x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tKad = K(0, "63,443"), tErk = K(0, "38,603");
  const [s1, a1] = pop(t, tKad, 0.5);
  const [s2, a2] = pop(t, tErk, 0.5);
  const kutu = (sc: number, al: number, y: number, renk: string, say: string, ad: string) => (
    <div style={{ position: "absolute", right: 80, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%",
      display: "flex", alignItems: "center", gap: 20, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 26,
      padding: "8px 28px", boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <span style={{ fontFamily: ANTON, fontSize: 76, color: renk, lineHeight: 1.1 }}>{say}</span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{ad}</span>
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [40, 60, 1620])}>
        <Etiket t={t} bas={K(1, "questionnaires")} capa={[420, 600]} konum={[1150, 700]} metin="FOOD QUESTIONNAIRES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "what they ate")} capa={[900, 400]} konum={[1150, 380]} metin="WHAT THEY ATE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.3} satirlar={b.satirlar} x={1860} y={170} boyut={92} hiza="sag" bitis={K(1, "Every") - 0.2} />
      <Not t={t} bas={0.9} metin={b.not ?? ""} x={1860} y={382} hiza="sag" boyut={34} bitis={K(1, "Every") - 0.2} />
      {kutu(s1, a1, 480, RENK.mercan, vir(sayac(t, tKad, 63443, 1.0)), "WOMEN")}
      {kutu(s2, a2, 600, RENK.koyuYesil, vir(sayac(t, tErk, 38603, 1.0)), "MEN")}
      <Not t={t} bas={K(0, "all over 50")} metin="ALL OVER 50" x={1860} y={730} hiza="sag" boyut={32} bitis={K(1, "Every") - 0.2} />
      <Not t={t} bas={K(0, "free of")} metin="FREE OF MACULAR DEGENERATION" x={1860} y={775} hiza="sag" boyut={30} bitis={K(1, "Every") - 0.2} />
    </>
  );
};

export default S13;
