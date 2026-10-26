// Sahne 50 — güvenlik notu: reçeteyi kendi başına bırakma, önce kontrol.
import React from "react";
import { AdimAkisi, Baslik, BaslikBlok, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const k2 = K(2, "try") - 0.2;
  const [sc, al] = pop(t, K(1, "own"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [100, 50, 1700])} />
      <Ikon t={t} bas={0.1} bitis={K(1, "Don't") - 0.2} ad="uyari" x={1020} y={200} zemin={RENK.altin} />
      <Baslik t={t} bas={0.2} bitis={K(1, "Don't") - 0.2} metin="ONE LAST SAFETY NOTE" x={1860} y={200} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Ikon t={t} bas={K(1, "Don't")} bitis={k2} ad="carpi" x={1100} y={330} zemin={RENK.mercan} />
      <BaslikBlok t={t} bas={K(1, "stop")} bitis={k2} satirlar={["DON'T STOP OR", "CHANGE A", "PRESCRIPTION"]} x={1860} y={330} boyut={96} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", right: 60, top: 700, opacity: al * sol(t, k2), transform: `scale(${sc})`, transformOrigin: "100% 50%" }}>
        <Hap metin="ON YOUR OWN" renk={RENK.mercan} boyut={36} />
      </div>
      <AdimAkisi t={t} x={1380} y={230} numarali={false} boyut={32} adimlar={[
        { bas: K(2, "symptoms"), metin: "SYMPTOMS", renk: RENK.altin },
        { bas: K(2, "pills"), metin: "B12 PILLS", renk: RENK.mercan },
      ]} />
      <BaslikBlok t={t} bas={K(2, "checked")} satirlar={["CHECK", "FIRST"]} x={1860} y={440} boyut={150} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "only")} metin="B12 IS ONLY ONE POSSIBLE CAUSE" x={1860} y={810} hiza="sag" genislik={820} boyut={42} />
    </>
  );
};
export default S50;
