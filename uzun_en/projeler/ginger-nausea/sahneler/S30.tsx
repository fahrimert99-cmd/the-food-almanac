// Sahne 30 — NIH merkezinin görüşü: hamilelikte olumlu, ameliyat ve kemoterapide belirsiz.
import React from "react";
import { Baslik, INTER, Kamera, RENK, SP, IkonYol, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; ad: string; renk: string; y: number; sonuc: string; sonBas: number; sonRenk: string; ikon: "onay" | "soru" }> = (
  { t, bas, ad, renk, y, sonuc, sonBas, sonRenk, ikon },
) => {
  const [s1, a1] = pop(t, bas, 0.5), [s2, a2] = pop(t, sonBas, 0.5);
  const kutu: React.CSSProperties = { position: "absolute", top: y, height: 72, borderRadius: 999, display: "flex", alignItems: "center",
    fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" };
  return (
    <>
      {a1 > 0 && <div style={{ ...kutu, left: 1150, width: 330, opacity: a1, transform: `scale(${s1})`, transformOrigin: "0 50%", background: "#FCF8EC",
        border: `3px solid ${renk}`, justifyContent: "center", color: RENK.lacivert }}>{ad}</div>}
      {a2 > 0 && <div style={{ ...kutu, left: 1496, width: 364, opacity: a2, transform: `scale(${s2})`, transformOrigin: "0 50%", background: sonRenk,
        color: "#fff", justifyContent: "center", gap: 10 }}><IkonYol ad={ikon} boyut={34} renk="#fff" />{sonuc}</div>}
    </>
  );
};

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [0, 60, 1800])} />
      <Baslik t={t} bas={K(0, "federal")} metin="OFFICIAL VIEW:" x={1860} y={150} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(2, "uncertain")} metin="UNCERTAIN" x={1860} y={255} boyut={96} renk={RENK.altin} hiza="sag" />
      <Satir t={t} bas={K(0, "pregnancy")} ad="PREGNANCY" renk={RENK.yesil} y={400} sonuc="MAY BE HELPFUL" sonBas={K(1, "helpful")} sonRenk={RENK.yesil} ikon="onay" />
      <Satir t={t} bas={K(2, "surgery")} ad="SURGERY" renk={RENK.altin} y={510} sonuc="UNCERTAIN" sonBas={K(2, "uncertain")} sonRenk={RENK.altin} ikon="soru" />
      <Satir t={t} bas={K(2, "chemotherapy,")} ad="CHEMOTHERAPY" renk={RENK.altin} y={620} sonuc="UNCERTAIN" sonBas={K(2, "uncertain") + 0.2} sonRenk={RENK.altin} ikon="soru" />
    </>
  );
};

export default S30;
