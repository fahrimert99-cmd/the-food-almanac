// Sahne 47 — masa ve iki sandalye: 5 yıl tedavi; osteopeni için ortak karar. Sağ alttaki imza kâğıt yamayla örtülü.
import React from "react";
import { AdimAkisi, Baslik, Hap, Ikon, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBes = K(0, "five"), tPeni = K(1, "osteopenia"), tKadin = K(1, "women"), tRisk = K(1, "high");
  const tKarar = K(1, "decide"), tDok = K(1, "doctor"), tFay = K(1, "benefits"), tZar = K(1, "harms"), tMal = K(1, "cost");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* sağ alttaki imza kalıntısı */}
        <div style={{ position: "absolute", left: 1350, top: 940, width: 200, height: 110,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Not t={t} bas={tBes - 0.4} bitis={tPeni - 0.15} metin="TREAT FOR" x={80} y={50} boyut={36} agirlik={800} />
      <Baslik t={t} bas={tBes} bitis={tPeni - 0.15} metin="5 YEARS" x={80} y={165} boyut={110} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tBes} bitis={tPeni - 0.15} ad="saat" x={125} y={310} boyut={92} zemin={RENK.lacivert} />
      <div style={{ position: "absolute", left: 960, top: 120, transform: "translate(-50%, -50%)" }}>
        <AdimAkisi t={t} x={0} y={0} boyut={30} numarali={false} adimlar={[
          { bas: tPeni, metin: "OSTEOPENIA", renk: RENK.altin },
          { bas: tKadin, metin: "WOMEN 65+", renk: RENK.lacivert },
          { bas: tRisk, metin: "HIGH FRACTURE RISK", renk: RENK.mercan },
        ]} />
      </div>
      <Baslik t={t} bas={tKarar} metin="DECIDE" x={1860} y={280} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tKarar + 0.15} metin="TOGETHER" x={1860} y={370} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tDok} metin="with your doctor" x={1860} y={440} hiza="sag" boyut={30} agirlik={700} />
      <Pil t={t} bas={tFay} metin="BENEFITS" x={1730} y={560} renk={RENK.yesil} />
      <Pil t={t} bas={tZar} metin="HARMS" x={1730} y={640} renk={RENK.mercan} />
      <Pil t={t} bas={tMal} metin="COST" x={1730} y={720} renk={RENK.altin} />
    </>
  );
};

export default S47;
