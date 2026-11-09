// Sahne 56 — sıfırdan pişir: taze malzeme, kontrol, tuzluk %5
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCook = K(1, "Cook"), tScr = K(1, "scratch");
  const tFresh = K(2, "fresh ingredients"), tCtl = K(2, "control");
  const tShaker = K(3, "shaker"), tFive = K(3, "five percent"), tBonus = K(3, "bonus");
  const Z = tShaker - 0.2;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [20, 30, 1880], [90, 90, 1730])}>
        <Etiket t={t} bas={tFresh} bitis={tCtl + 1.2} capa={[420, 640]} konum={[330, 850]} metin="FRESH INGREDIENTS" renk={RENK.yesil} />
        <Etiket t={t} bas={tCtl} bitis={Z} capa={[1100, 470]} konum={[820, 250]} metin="YOU CONTROL IT" renk={RENK.altin} />
        <Etiket t={t} bas={tShaker} capa={[1540, 590]} konum={[1640, 470]} metin="HOME SHAKER" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={tCook} bitis={Z} metin="COOK FROM" x={1860} y={170} boyut={90} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tScr} bitis={Z} metin="SCRATCH" x={1860} y={272} boyut={90} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tFive} vurgu="≈ 5%" not="OF SODIUM" x={1660} y={140} genislik={340} boyut={92} />
      <Pil t={t} bas={tBonus} x={1450} y={880} metin="A BONUS, NOT THE MAIN EVENT" renk={RENK.yesil} boyut={28} />
    </>
  );
};

export default S56;
