// S07 — çapraz kaşıklar: "ikisini de azalt" mantığı
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Hap: tek seferlik belirme
const Belir: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCa = K(1, "calcium"), tOx = K(1, "oxalate"), tLess = K(1, "less"), tYears = K(2, "years"), tMany = K(2, "many");
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={w}>
        <Etiket t={t} bas={tCa} capa={[560, 560]} konum={[230, 560]} metin="CALCIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tOx} capa={[1300, 600]} konum={[1740, 560]} metin="OXALATE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tLess} satirlar={["EAT LESS", "OF BOTH"]} x={70} y={200} boyut={84} adim={0.25}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Belir t={t} bas={tYears} x={1750} y={260} metin="FOR YEARS" renk={RENK.lacivert} />
      <Belir t={t} bas={tMany} x={1740} y={370} metin="MANY PATIENTS" renk={RENK.mercan} />
    </>
  );
};

export default S07;
