// Sahne 54 — Adım 3: zamanlamaya güvenme; listedeki meyvelerden uzak dur (doktor/eczacı onaylamadıkça).
import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760]);
  const tSkip = K(2, "Skip");
  const tUnless = K(2, "unless");
  const aKart = eout(ilerle(t, tUnless, 0.5));
  const ogeler = [
    { bas: K(2, "grapefruit"), metin: "GRAPEFRUIT", renk: RENK.mercan },
    { bas: K(2, "juice"), metin: "ITS JUICE", renk: RENK.mercan },
    { bas: K(2, "pomelos"), metin: "POMELOS", renk: RENK.mercan },
    { bas: K(2, "Seville"), metin: "SEVILLE ORANGES", renk: RENK.mercan },
    { bas: K(2, "tangelos"), metin: "TANGELOS", renk: RENK.mercan },
  ];
  return (
    <>
      <Kamera gorsel="tam/54" pencere={pencere}>
        <Etiket t={t} bas={K(2, "grapefruit") + 0.1} capa={[1540, 640]} konum={[1540, 400]} metin="GRAPEFRUIT" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={0.0} bitis={tSkip - 0.1} metin="STEP 3" x={140} y={90} boyut={32} renk={RENK.altin} font="inter" aralik={8} />
      <Baslik t={t} bas={K(1, "don't")} bitis={tSkip - 0.1} metin="DON'T RELY" x={140} y={190} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "don't") + 0.18} bitis={tSkip - 0.1} metin="ON TIMING" x={140} y={305} boyut={110} renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "timing")} bitis={tSkip - 0.1} ad="saat" zemin={RENK.lacivert} x={880} y={250} boyut={96} />
      <Ikon t={t} bas={K(1, "timing") + 0.4} bitis={tSkip - 0.1} ad="carpi" zemin={RENK.mercan} x={1000} y={250} boyut={96} />
      <Baslik t={t} bas={tSkip} metin="SKIP" x={140} y={90} boyut={32} renk={RENK.mercan} font="inter" aralik={8} />
      <Liste t={t} ogeler={ogeler} x={140} y={140} aralik={86} boyut={38} isaret="carpi" genislik={700} />
      {aKart > 0 && (
        <div style={{ position: "absolute", left: 960, top: 150, width: 860, opacity: aKart, transform: `translateY(${(1 - aKart) * 14}px)`,
          background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 24, padding: "18px 28px 18px 120px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.18)", fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: 1.3, color: RENK.lacivert }}>
          UNLESS YOUR DOCTOR OR PHARMACIST SAYS A SMALL AMOUNT IS FINE FOR YOU
        </div>
      )}
      <Ikon t={t} bas={K(2, "small")} ad="onay" x={1030} y={225} boyut={76} />
    </>
  );
};

export default S54;
