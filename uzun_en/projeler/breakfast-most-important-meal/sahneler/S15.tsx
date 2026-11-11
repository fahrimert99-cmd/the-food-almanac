// Sahne 15 — kan şekeri ve kas ayrı sorular; sabah ilaçlarının zamanlaması sloganından önemli.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, ilerle, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSugar = K(0, "blood sugar"), tMuscle = K(0, "muscle"), tQ = K(0, "different"), tAns = K(0, "answers");
  const tTiming = K(1, "timing"), tPills = K(1, "pills"), tMatters = K(1, "matters");
  const tSon = K(1, "And later") - 0.1;
  const z = ilerle(t, 0, s.sure);
  const hap = (bas: number, metin: string, renk: string, x: number, y: number, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * (t < bitis ? 1 : 0);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/15" pencere={[40 * z, 20 + 40 * z, 1900 - 100 * z]}>
        {/* ölçerin gövdesindeki anlamsız yazı kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 1150, top: 700, width: 150, height: 180, transform: "rotate(-14deg)",
          borderRadius: 40, background: "radial-gradient(ellipse 50% 50% at 50% 50%, #E6E3DA 0%, #E6E3DA 70%, rgba(230,227,218,0) 100%)" }} />
        <Etiket t={t} bas={tSugar} bitis={tSon} capa={[1450, 700]} konum={[1620, 440]} metin="BLOOD SUGAR" renk={RENK.mercan} />
        <Etiket t={t} bas={tPills} capa={[590, 750]} konum={[330, 900]} metin="MORNING PILLS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tSugar} bitis={tSon} metin="BLOOD SUGAR" x={100} y={140} boyut={84} renk={RENK.mercan} />
      <Baslik t={t} bas={tMuscle} bitis={tSon} metin="MUSCLE" x={660} y={140} boyut={84} renk={RENK.koyuYesil} />
      {hap(tQ, "DIFFERENT QUESTIONS", RENK.lacivert, 380, 225, tSon)}
      {hap(tAns, "DIFFERENT ANSWERS", RENK.altin, 940, 225, tSon)}
      <Baslik t={t} bas={tTiming} metin="A TIMING DETAIL" x={100} y={140} boyut={84} renk={RENK.koyuYesil} />
      {hap(tMatters, "MATTERS MORE THAN THE SLOGAN", RENK.mercan, 520, 225)}
    </>
  );
};

export default S15;
