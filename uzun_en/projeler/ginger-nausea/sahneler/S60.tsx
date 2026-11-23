// Sahne 60 — özet: zencefil + fincan solda, sağda karne satırları.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; ad: string; sonuc: string; renk: string; ikon: "onay" | "carpi" | "soru"; y: number }> = ({ t, bas, ad, sonuc, renk, ikon, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1090, top: y, width: 770, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%",
      display: "flex", alignItems: "center", gap: 20, background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 24,
      padding: "14px 24px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <div style={{ width: 62, height: 62, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
        <IkonYol ad={ikon} boyut={38} renk="#fff" />
      </div>
      <div style={{ fontFamily: INTER }}>
        <div style={{ fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</div>
        <div style={{ fontWeight: 800, fontSize: 24, letterSpacing: 1, color: renk }}>{sonuc}</div>
      </div>
    </div>
  );
};

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [0, 20, 1700], [30, 60, 1560])}>
        <Etiket t={t} bas={K(0, "Ginger")} bitis={K(0, "especially") } capa={[300, 560]} konum={[300, 200]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.3} metin="MAY EASE" x={1090} y={190} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.5} metin="NAUSEA" x={1090} y={300} boyut={104} renk={RENK.koyuYesil} />
      <Satir t={t} bas={K(0, "especially after")} ad="AFTER SURGERY" sonuc="MAY EASE NAUSEA" renk={RENK.yesil} ikon="onay" y={430} />
      <Satir t={t} bas={K(0, "reliably stop")} ad="STOPPING VOMITING" sonuc="NOT SHOWN RELIABLY" renk={RENK.mercan} ikon="carpi" y={565} />
      <Satir t={t} bas={K(1, "chemotherapy")} ad="CHEMOTHERAPY" sonuc="MIXED RESULTS" renk={RENK.altin} ikon="soru" y={700} />
      <Satir t={t} bas={K(1, "motion sickness")} ad="MOTION SICKNESS" sonuc="MOST STUDIES: NO BENEFIT" renk={RENK.mercan} ikon="carpi" y={835} />
    </>
  );
};

export default S60;
