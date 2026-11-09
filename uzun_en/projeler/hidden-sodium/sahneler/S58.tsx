// Sahne 58 — aroma kurma: limon, sarımsak, ot, karabiber
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB = K(1, "Build"), tLem = K(2, "lemon"), tGar = K(2, "garlic"), tHerb = K(2, "herbs"), tPep = K(2, "pepper"), tSalt = K(2, "before");
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [40, 30, 1840], [100, 70, 1720])}>
        <Etiket t={t} bas={tLem} capa={[470, 300]} konum={[600, 120]} metin="LEMON" renk={RENK.altin} />
        <Etiket t={t} bas={tGar} capa={[990, 790]} konum={[1060, 900]} metin="GARLIC" renk={RENK.altin} />
        <Etiket t={t} bas={tHerb} capa={[470, 720]} konum={[240, 520]} metin="HERBS" renk={RENK.yesil} />
        <Etiket t={t} bas={tPep} capa={[1470, 520]} konum={[1720, 430]} metin="PEPPER" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={tB} metin="BUILD FLAVOR" x={80} y={100} boyut={70} renk={RENK.koyuYesil} />
      <Pil t={t} bas={tSalt} x={1730} y={780} metin="BEFORE SALT" renk={RENK.mercan} boyut={28} />
    </>
  );
};

export default S58;
