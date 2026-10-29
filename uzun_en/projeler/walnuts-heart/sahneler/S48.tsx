// Sahne 48 — takas: kruton/cips yerine ceviz.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Konumlu, pop ile gelen hap
const Hp: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
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

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "swap");
  const tCrt = K(2, "croutons,"), tChip = K(2, "chips"), tSat = K(2, "saturated");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 90, 1760])} />
      <BaslikBlok t={t} bas={tBas} satirlar={["SWAP,", "DON'T ADD"]} x={1250} y={200} boyut={110}
        renkler={[RENK.koyuYesil, RENK.lacivert]} bitis={tCrt + 0.3} />
      <Etiket t={t} bas={K(2, "walnuts")} capa={[600, 395]} konum={[640, 120]} metin="WALNUTS" renk={RENK.altin} bitis={tSat} />
      <Etiket t={t} bas={K(2, "oatmeal")} capa={[1333, 690]} konum={[1700, 640]} metin="OATMEAL" renk={RENK.altin} bitis={tSat} />
      <Etiket t={t} bas={K(2, "salad")} capa={[420, 640]} konum={[330, 900]} metin="SALAD" renk={RENK.yesil} bitis={tSat} />
      <Hp t={t} bas={tCrt} bitis={tSat} x={1540} y={170} metin="CROUTONS → WALNUTS" renk={RENK.yesil} />
      <Hp t={t} bas={tChip} bitis={tSat} x={1540} y={270} metin="CHIPS, COOKIES → WALNUTS" renk={RENK.yesil} boyut={27} />
      <Hp t={t} bas={tSat} x={1540} y={170} metin="SATURATED FAT" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "total")} x={1540} y={270} metin="TOTAL CALORIES" renk={RENK.mercan} />
      <Hp t={t} bas={K(2, "climb.")} x={1540} y={380} metin="DON'T CLIMB" renk={RENK.yesil} />
    </>
  );
};

export default S48;
