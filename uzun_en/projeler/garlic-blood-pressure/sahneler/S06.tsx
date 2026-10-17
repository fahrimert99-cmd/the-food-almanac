// Sahne 6 — tansiyon nedir: kalp ve damar çizimi, sistolik / diyastolik.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis } from "../kutuphane";

// Kalp atışında genişleyen halkalar (görsel koordinatında)
const Halkalar: React.FC<{ t: number; bas: number }> = ({ t, bas }) => (
  <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
    {[0, 0.35, 0.7].map((g) => {
      const u = (t - bas - g) / 1.2;
      if (u <= 0 || u >= 1) return null;
      return <circle key={g} cx={460} cy={600} r={150 + 130 * eout(u)} fill="none" stroke={RENK.mercan} strokeWidth={6} opacity={0.7 * (1 - u)} />;
    })}
  </svg>
);

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSis = K(3, "between beats") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [40, 70, 1640])}>
        <Halkalar t={t} bas={K(2, "heart beats")} />
        <Etiket t={t} bas={K(0, "blood")} bitis={K(1, "two numbers") - 0.2} capa={[545, 840]} konum={[790, 880]} metin="BLOOD" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "artery")} bitis={K(1, "two numbers") - 0.2} capa={[450, 310]} konum={[780, 520]} metin="ARTERY" renk={RENK.koyuYesil} />
      </Kamera>
      {/* kolun sağ kenarındaki dikişi ve boş yarıyı kâğıtla örter */}
      <div style={{ position: "absolute", left: 930, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 7%, ${kagit(1)} 100%)`, opacity: eout(ilerle(t, 0, 0.4)) }} />
      <Baslik t={t} bas={K(1, "two numbers")} metin="TWO NUMBERS" x={1860} y={250} boyut={40} renk={RENK.altin} font="inter" aralik={6} hiza="sag" />
      <Baslik t={t} bas={K(2, "systolic")} metin="SYSTOLIC" x={1860} y={390} boyut={120} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={K(2, "pressure when")} metin="the pressure when your heart beats" x={1860} y={470} hiza="sag" boyut={36} genislik={640} />
      <Baslik t={t} bas={K(3, "diastolic")} metin="DIASTOLIC" x={1860} y={690} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(3, "pressure between")} metin="the pressure between beats" x={1860} y={770} hiza="sag" boyut={36} genislik={640} />
    </>
  );
};

export default S06;
