// Sahne 36 — üç farklı şişe: her deney kendi ürününü test etti.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Şişeler: çapa şişe etiketinin üstü, hap şişenin üstündeki boşlukta
const SISELER = [
  { ifade: "Thai", metin: "THAI TRIAL", capa: [493, 175] as [number, number], konum: [470, 125] as [number, number], renk: RENK.koyuYesil },
  { ifade: "Tasmanian", metin: "TASMANIAN TRIAL", capa: [967, 165] as [number, number], konum: [930, 125] as [number, number], renk: RENK.altin },
  { ifade: "branded", metin: "BRANDED CURCUMIN", capa: [1460, 175] as [number, number], konum: [1370, 125] as [number, number], renk: RENK.mercan },
];

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  
  const tBaslik = K(0, "any bottle");
  const tFark = K(2, "Different");
  const tDoz = K(2, "doses");
  const [s1, a1] = pop(t, tFark, 0.5);
  const [s2, a2] = pop(t, tDoz, 0.5);
  const hap = (sc: number, al: number, m: string, r: string) => (
    <div style={{ transform: `scale(${sc})`, opacity: al, background: RENK.kagitAcik, border: `3px solid ${r}`, borderRadius: 999,
      padding: "10px 28px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>{m}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        {SISELER.map((b) => (
          <Etiket key={b.ifade} t={t} bas={K(1, b.ifade)} capa={b.capa} konum={b.konum} metin={b.metin} renk={b.renk} />
        ))}
      </Kamera>
      <Baslik t={t} bas={tBaslik} bitis={3.7} metin="NOT EVERY BOTTLE" x={960} y={80} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <div style={{ position: "absolute", left: 0, right: 0, top: 880, display: "flex", justifyContent: "center", gap: 40 }}>
        {hap(s1, a1, "DIFFERENT PRODUCTS", RENK.koyuYesil)}
        {hap(s2, a2, "DIFFERENT DOSES", RENK.mercan)}
      </div>
    </>
  );
};

export default S36;
