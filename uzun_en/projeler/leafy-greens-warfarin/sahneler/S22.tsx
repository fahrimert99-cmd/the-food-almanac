// Sahne 22 — dikkat: 12 kişi, 4 gün; K önemli ama "ne kadar" bilinmiyor
import React from "react";
import { Baslik, IkonYol, INTER, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // alt şerit (y>960) dışarıda kalsın diye pencere yüksekliği < 960
  const pen = kameraYolu(t, s.sure, [0, 0, 1700], [80, 30, 1620]);
  const tK = c[2].bas - 0.1;
  const [sc, al] = pop(t, K(0, "caution"), 0.55);
  const aC = al * sol(t, tK);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={pen} />
      {aC > 0 && (
        <div style={{ position: "absolute", left: 100, top: 56, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: aC, display: "flex",
          alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999,
          padding: "8px 28px 8px 16px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
          <IkonYol ad="uyari" boyut={40} renk={RENK.altin} />
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.lacivert }}>A CAUTION</span>
        </div>
      )}
      <VurguRozet t={t} bas={K(1, "Twelve")} bitis={tK} vurgu="12" not="people" x={300} y={150} genislik={260} boyut={90} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "four")} bitis={tK} vurgu="4" not="days" x={620} y={150} genislik={260} boyut={90} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "very large")} bitis={tK} metin="very large changes in diet" x={160} y={335} boyut={32} />
      <Baslik t={t} bas={K(2, "vitamin K")} metin="VITAMIN K MATTERS" x={100} y={130} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "not")} metin="not exactly how much of a swing is too much" x={104} y={210} boyut={34} genislik={900} />
    </>
  );
};

export default S22;
