// Sahne 50 — yüksek emilimli formüller ve çok takviye uyarısı
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuksek = K(1, "high-absorption"), tCok = K(1, "several new supplements");
  const tKaraciger = K(2, "liver damage"), tGuclu = K(3, "stronger-sounding");
  const [sc, al] = pop(t, tKaraciger, 0.55);
  const aKart = al * sol(t, tGuclu - 0.2);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [50, 60, 1800])} />
      {/* üst şerit: kâğıt geçiş, başlık/etiketler için */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 190,
        background: `linear-gradient(to bottom, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
      <Etiket t={t} bas={tYuksek} bitis={tCok - 0.15} capa={[960, 520]} konum={[900, 100]} metin="HIGH-ABSORPTION FORMULA" renk={RENK.altin} />
      <Etiket t={t} bas={tCok} bitis={tKaraciger - 0.2} capa={[420, 330]} konum={[640, 100]} metin="NOT SEVERAL AT ONCE" renk={RENK.mercan} />
      {aKart > 0.01 && (
        <div style={{ position: "absolute", left: 60, top: 780, width: 640, opacity: aKart, transform: `scale(${sc})`, transformOrigin: "0 50%",
          background: RENK.kagitAcik, border: `4px solid ${RENK.mercan}`, borderRadius: 22, padding: "16px 24px",
          display: "flex", alignItems: "center", gap: 18, boxShadow: "0 10px 26px rgba(48,40,34,0.2)" }}>
          <IkonYol ad="uyari" boyut={60} renk={RENK.mercan} />
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, lineHeight: 1.2, color: RENK.lacivert }}>
            LIVER DAMAGE NOTED WITH HIGHLY BIOAVAILABLE PRODUCTS
            <div style={{ fontWeight: 500, fontSize: 24, color: RENK.gri }}>NIH · NCCIH</div>
          </div>
        </div>
      )}
      <Baslik t={t} bas={tGuclu} metin="STRONGER LABEL, NOT BETTER" x={960} y={96} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S50;
