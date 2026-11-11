// Sahne 59 — tuz ikamesi: önce sor; sağda başlık ve uyarı listesi
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, Hap, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSub = K(0, "substitutes"), tPot = K(1, "potassium");
  const tKid = K(2, "kidney"), tBp = K(2, "blood pressure"), tAsk = K(2, "ask your doctor"), tPh = K(2, "pharmacist");
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tSub} bitis={tPot - 0.15} capa={[647, 540]} konum={[640, 215]} metin="SALT SUBSTITUTE" renk={RENK.altin} />
        <Etiket t={t} bas={tPot} capa={[647, 540]} konum={[660, 215]} metin="MADE WITH POTASSIUM" renk={RENK.mercan} />
        <Etiket t={t} bas={tPh} capa={[813, 560]} konum={[870, 840]} metin="PHARMACIST" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.4} metin="ASK FIRST" x={1860} y={250} boyut={140} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={0.9} metin="about salt substitutes" x={1860} y={340} hiza="sag" boyut={36} genislik={600} />
      <Liste t={t} isaret="nokta" x={1210} y={510} aralik={80} boyut={30} genislik={650}
        ogeler={[
          { bas: tKid, metin: "KIDNEY DISEASE", renk: RENK.mercan },
          { bas: tBp, metin: "BLOOD PRESSURE MEDICINES", renk: RENK.mercan },
        ]} />
      <Pil t={t} bas={tAsk} x={1540} y={780} metin="ASK YOUR DOCTOR" renk={RENK.yesil} boyut={32} />
    </>
  );
};

export default S59;
