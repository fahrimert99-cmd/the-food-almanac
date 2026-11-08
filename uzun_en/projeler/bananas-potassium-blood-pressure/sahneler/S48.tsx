// Sahne 48 — kapanış güvenlik mesajı: solda eczane, sağda yapma/sor maddeleri.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const Yama: React.FC<{ x: number; y: number; w: number; h: number }> = ({ x, y, w, h }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
);

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDont = K(0, "don't start"), tMed = K(0, "medicine"), tSup = K(0, "supplement"), tSalt = K(0, "salt substitute");
  const tKid = K(1, "kidney disease"), tBP = K(1, "blood pressure pills"), tAsk = K(1, "ask your doctor"), tPh = K(1, "pharmacist"), tLevel = K(1, "potassium level");
  const c0 = K(1, "If") - 0.15, c1 = tAsk - 0.15;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Yama x={80} y={180} w={170} h={110} />
        <Yama x={487} y={437} w={90} h={60} />
      </Kamera>
      <Baslik t={t} bas={tDont} bitis={c0} metin="DON'T START," x={940} y={200} boyut={90} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "stop")} bitis={c0} metin="STOP OR CHANGE" x={940} y={300} boyut={90} renk={RENK.mercan} />
      <Liste t={t} isaret="carpi" x={940} y={420} aralik={96} boyut={40} genislik={900}
        ogeler={[{ bas: tMed, metin: "ANY MEDICINE", renk: RENK.mercan, bitis: c0 }, { bas: tSup, metin: "SUPPLEMENT", renk: RENK.mercan, bitis: c0 },
          { bas: tSalt, metin: "SALT SUBSTITUTE", renk: RENK.mercan, bitis: c0 }]} />
      <Liste t={t} isaret="nokta" x={940} y={200} aralik={96} boyut={40} genislik={900}
        ogeler={[{ bas: tKid, metin: "KIDNEY DISEASE", renk: RENK.altin, bitis: c1 }, { bas: tBP, metin: "BLOOD PRESSURE PILLS", renk: RENK.altin, bitis: c1 }]} />
      <Baslik t={t} bas={tAsk} metin="ASK YOUR" x={940} y={300} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPh} metin="PHARMACIST" x={940} y={420} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tLevel} metin="what potassium level is right for you" x={940} y={540} boyut={38} genislik={900} />
    </>
  );
};

export default S48;
