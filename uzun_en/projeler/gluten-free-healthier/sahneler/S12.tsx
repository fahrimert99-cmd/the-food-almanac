// Sahne 12 — listede eksik olan: herkes için genel neden yok; asıl soru; paketli gıdalar.
import React from "react";
import { Baslik, Etiket, Ikon, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const UCLU = ["CELIAC", "WHEAT ALLERGY", "SENSITIVITY"];

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tNone = K(1, "none"), c2 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "gluten")} capa={[620, 450]} konum={[330, 760]} metin="GLUTEN" renk={RENK.altin} />
      </Kamera>
      {/* üst şerit: sırayla üç mesaj */}
      <Baslik t={t} bas={K(0, "missing")} bitis={K(0, "general") - 0.1} metin="WHAT'S MISSING?" x={820} y={110} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "general")} bitis={c[1].bas - 0.1} metin="A GENERAL REASON?" x={820} y={110} boyut={84} renk={RENK.mercan} hiza="orta" />
      <div style={{ position: "absolute", left: 140, top: 66, display: "flex", gap: 22, opacity: sol(t, c2) }}>
        {UCLU.map((m, i) => {
          const [sc, al] = pop(t, tNone + i * 0.2, 0.5);
          return (
            <div key={m} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, display: "flex", alignItems: "center", gap: 12,
              background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 24px 10px 14px",
              fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap",
              boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 34, height: 34, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <IkonYol ad="carpi" boyut={20} renk="#fff" />
              </span>
              {m}
            </div>
          );
        })}
      </div>
      <Ikon t={t} bas={K(1, "question")} bitis={c2} ad="soru" x={1740} y={470} boyut={130} zemin={RENK.altin} />
      <Baslik t={t} bas={K(2, "gluten-free")} metin="GLUTEN-FREE PACKAGED FOODS" x={820} y={110} boyut={70} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S12;
