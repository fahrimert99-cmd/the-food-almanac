// Sahne 62 — beş büyük kaynak, ardından etiket okuma: %5 düşük, %20 yüksek
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, Ortu, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S62: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBr = 0.05, tPz = K(0, "pizza"), tSw = K(0, "sandwiches"), tDe = K(0, "deli meat"), tSo = K(0, "soup"), tCdc = K(0, "CDC");
  const tLab = K(1, "On a label"), t5 = K(1, "five percent"), tDv = K(1, "daily value"), tLow = K(1, "low,"), t20 = K(1, "twenty"), tHi = K(1, "high");
  const E = tLab - 0.1;
  const pOrtu = eout(ilerle(t, tLab - 0.1, 0.5)) * 0.95;
  return (
    <>
      <Kamera gorsel="tam/62" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tBr} bitis={E} capa={[500, 380]} konum={[330, 160]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={tPz} bitis={E} capa={[330, 700]} konum={[230, 905]} metin="PIZZA" renk={RENK.mercan} />
        <Etiket t={t} bas={tSw} bitis={E} capa={[973, 580]} konum={[1010, 470]} metin="SANDWICHES" renk={RENK.yesil} />
        <Etiket t={t} bas={tDe} bitis={E} capa={[933, 830]} konum={[700, 915]} metin="DELI MEAT" renk={RENK.mercan} />
        <Etiket t={t} bas={tSo} bitis={E} capa={[1507, 700]} konum={[1560, 455]} metin="SOUP" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={tCdc} bitis={E} x={1450} y={170} metin="TOP OF THE CDC LIST" renk={RENK.altin} boyut={28} />
      <Ortu a={pOrtu} />
      <Baslik t={t} bas={tLab} metin="ON A LABEL" x={960} y={170} boyut={100} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={tDv} metin="% DAILY VALUE" x={960} y={250} hiza="orta" boyut={40} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={t5} vurgu="≤ 5%" x={560} y={400} genislik={520} boyut={150} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t20} vurgu="≥ 20%" x={1360} y={400} genislik={520} boyut={150} renk={RENK.mercan} />
      <Pil t={t} bas={tLow} x={560} y={680} metin="LOW" renk={RENK.yesil} boyut={52} />
      <Pil t={t} bas={tHi} x={1360} y={680} metin="HIGH" renk={RENK.mercan} boyut={52} />
    </>
  );
};

export default S62;
