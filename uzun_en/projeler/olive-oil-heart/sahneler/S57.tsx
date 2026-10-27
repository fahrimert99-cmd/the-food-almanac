// Sahne 57 — özet: PREDIMED sonucu, sürahi ve zeytinler ortada; yazılar iki yanda.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, ANTON, INTER, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(1, "2018");
  const [sc, al] = pop(t, K(1, "corrected"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(0, "extra")} bitis={12.3} capa={[900, 520]} konum={[1610, 560]} metin="EXTRA VIRGIN OLIVE OIL" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "PREDIMED")} metin="PREDIMED" x={70} y={170} boyut={104} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "older")} metin="OLDER SPANISH ADULTS" x={74} y={252} boyut={30} agirlik={800} genislik={480} />
      <Not t={t} bas={K(0, "Mediterranean")} metin="MEDITERRANEAN DIET" x={74} y={304} boyut={30} agirlik={800} genislik={480} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "31")} vurgu="–31%" not="HEART ATTACK, STROKE OR HEART DEATH" x={1650} y={110} genislik={400} />
      <div style={{ position: "absolute", left: 1450, top: 700, width: 400, transform: `scale(${sc})`, transformOrigin: "50% 0", opacity: al,
        textAlign: "center", background: "#FCF8EC", border: `4px solid ${RENK.lacivert}`, borderRadius: 26, padding: "10px 16px 14px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>CORRECTED + REPUBLISHED</div>
        {t >= tYil && <div style={{ fontFamily: ANTON, fontSize: 84, lineHeight: 1.1, color: RENK.altin }}>2018</div>}
      </div>
    </>
  );
};

export default S57;
