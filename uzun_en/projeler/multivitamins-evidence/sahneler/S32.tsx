// Sahne 32 — öneri sağlıklı yetişkinler içindir; bilinen eksiklikte doktor tedavisi gerekir.
import React from "react";
import { ANTON, Baslik, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAd = K(0, "generally"), tHealthy = K(0, "healthy"), tAdults = K(0, "adults.");
  const tDef = K(1, "known"), tNut = K(1, "nutritional"), tSpec = K(1, "specific"), tDoc = K(1, "doctor.");
  const w = kameraYolu(t, s.sure, [0, 30, 1920], [70, 70, 1780]);
  const [sc, al] = pop(t, 0.05, 0.6);
  const [sc2, al2] = pop(t, tDef - 0.1, 0.6);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={w}>
        {/* kitaptaki anlamsız yazıyı örten kâğıt kart (masanın üzerinde durur) */}
        <div style={{ position: "absolute", left: 330, top: 440, width: 800, height: 360, opacity: al, transform: `rotate(-3deg) scale(${sc})`,
          background: RENK.kagitAcik, borderRadius: 18, boxShadow: "0 18px 36px rgba(48,40,34,0.32)", border: `3px solid ${RENK.murekkep}` }} />
        <Ikon t={t} bas={tAdults + 0.1} ad="onay" x={430} y={620} boyut={110} zemin={RENK.yesil} />
        <Baslik t={t} bas={tAd} metin="GENERALLY" x={540} y={540} boyut={92} renk={RENK.lacivert} />
        <Baslik t={t} bas={tHealthy} metin="HEALTHY ADULTS" x={500} y={650} boyut={92} renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tDoc - 0.2} capa={[1390, 660]} konum={[1500, 860]} metin="YOUR DOCTOR" renk={RENK.altin} boyut={26} />
      </Kamera>
      {/* sağ üst: bilinen eksiklik kartı */}
      <div style={{ position: "absolute", left: 1130, top: 120, width: 700, height: 310, opacity: al2, transform: `scale(${sc2})`, transformOrigin: "50% 50%",
        background: RENK.kagitAcik, borderRadius: 18, boxShadow: "0 18px 36px rgba(48,40,34,0.28)", border: `3px solid ${RENK.murekkep}` }} />
      <Baslik t={t} bas={tDef} metin="KNOWN" x={1170} y={190} boyut={80} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNut} metin="DEFICIENCY" x={1170} y={285} boyut={80} renk={RENK.mercan} />
      <Not t={t} bas={tSpec} metin="NEEDS SPECIFIC TREATMENT" x={1170} y={355} boyut={32} genislik={620} />
    </>
  );
};

export default S32;
