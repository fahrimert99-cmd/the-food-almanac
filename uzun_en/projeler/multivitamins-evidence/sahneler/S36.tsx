// Sahne 36 — B12 hayvansal gıdalarda; 50 yaş sonrası güçlendirilmiş gıda/takviye (NIH ODS).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Chip: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tB12 = K(0, "B12"), tAnimal = K(0, "animal");
  const t50 = K(1, "after"), tNih = K(1, "NIH"), tFort = K(1, "fortified"), tSup = K(1, "supplements,");
  const tAbs = K(1, "absorbed"), tBound = K(1, "bound");
  const w = kameraYolu(t, s.sure, [20, 20, 1880], [90, 70, 1740]);
  const bit0 = t50 - 0.1;
  return (
    <>
      <Kamera gorsel="tam/36" pencere={w} />
      <Baslik t={t} bas={0.1} bitis={bit0} metin="VITAMIN B12" x={110} y={170} boyut={84} renk={RENK.lacivert} />
      <Etiket t={t} bas={tAnimal} bitis={bit0} capa={[1330, 430]} konum={[1640, 190]} metin="ANIMAL FOODS" renk={RENK.altin} boyut={26} />
      <Baslik t={t} bas={t50} bitis={tAbs - 0.1} metin="AFTER 50" x={110} y={190} boyut={84} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} bas={tNih} bitis={tAbs - 0.1} metin="NIH OFFICE OF DIETARY SUPPLEMENTS" />
      <Etiket t={t} bas={tFort} bitis={tAbs - 0.1} capa={[880, 400]} konum={[1130, 120]} metin="FORTIFIED FOODS" renk={RENK.yesil} boyut={26} />
      <Chip t={t} bas={tSup} bitis={tAbs - 0.1} metin="OR SUPPLEMENTS" renk={RENK.yesil} x={110} y={880} />
      <Baslik t={t} bas={tAbs} metin="ABSORBED" x={110} y={150} boyut={64} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAbs + 0.15} metin="MORE EASILY" x={110} y={225} boyut={64} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tBound} capa={[440, 640]} konum={[260, 860]} metin="B12 BOUND IN FOOD" renk={RENK.mercan} boyut={26} />
    </>
  );
};

export default S36;
