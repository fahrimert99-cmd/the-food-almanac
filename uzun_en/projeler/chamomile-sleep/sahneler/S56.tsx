// Sahne 56 — havuzlanmış incelemeler: kalite için biraz yardım, uykusuzluk için az kanıt.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Sağ boş kâğıt sütununda iki satırlı kart
const Kart: React.FC<{ t: number; bas: number; bitis: number; y: number; ust: string; alt: string; renk: string }> = ({ t, bas, bitis, y, ust, alt, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1500, top: y, width: 360, transform: `scale(${sc})`, transformOrigin: "50% 0", opacity: a,
      background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 22, padding: "14px 20px", textAlign: "center",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)", fontFamily: INTER, fontWeight: 800 }}>
      <div style={{ fontSize: 24, letterSpacing: 2, color: RENK.lacivert }}>{ust}</div>
      <div style={{ fontSize: 30, letterSpacing: 1.5, color: renk, marginTop: 4 }}>{alt}</div>
    </div>
  );
};

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [160, 20, 1600], [260, 50, 1440]);
  const tGec = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={w}>
        <Etiket t={t} bas={K(1, "warm-cup routine")} capa={[1000, 560]} konum={[1500, 700]} metin="WARM-CUP ROUTINE" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.05, 0.6))} taraf="sol" genislik={640} opak={0.97} />
      {/* 1. cümle */}
      <Baslik t={t} bas={0.1} bitis={tGec} metin="POOLED" x={60} y={200} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.26} bitis={tGec} metin="REVIEWS" x={60} y={308} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "agree")} bitis={tGec} metin="agree" x={64} y={386} boyut={32} />
      <Kart t={t} bas={K(0, "some help")} bitis={tGec} y={170} ust="SLEEP QUALITY" alt="SOME HELP" renk={RENK.yesil} />
      <Kart t={t} bas={K(0, "little evidence")} bitis={tGec} y={290} ust="INSOMNIA ITSELF" alt="LITTLE EVIDENCE" renk={RENK.mercan} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "faded")} metin="FADED BY" x={60} y={200} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "faded") + 0.16} metin="4 WEEKS" x={60} y={308} boyut={100} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "faded") + 0.4} metin="benefit in new mothers" x={64} y={386} boyut={30} genislik={400} />
    </>
  );
};

export default S56;
