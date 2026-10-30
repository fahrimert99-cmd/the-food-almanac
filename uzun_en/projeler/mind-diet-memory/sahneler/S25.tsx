// Sahne 25 — rastgele atama: zar + iki tabak; sağ boş kâğıtta sütun metinleri.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
};

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik1 = c[2].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={K(0, "randomized")} bitis={cik1} capa={[540, 470]} konum={[330, 130]} metin="RANDOMIZED TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "chance")} bitis={cik1} capa={[470, 620]} konum={[1330, 790]} metin="DICE = CHANCE" renk={RENK.mercan} />
      </Kamera>
      {/* 1. sütun: şans karar verir */}
      <Baslik t={t} bas={K(1, "chance")} bitis={cik1} metin="CHANCE" x={1350} y={300} boyut={130} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "decides")} bitis={cik1} metin="DECIDES" x={1350} y={430} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "who")} bitis={cik1} metin="who gets which diet" x={1354} y={520} boyut={36} agirlik={700} />
      {/* 2. sütun: farklar dağılır */}
      <Baslik t={t} bas={K(2, "spreads")} metin="SPREADS OUT" x={1350} y={230} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "differences")} metin="DIFFERENCES" x={1350} y={320} boyut={84} renk={RENK.koyuYesil} />
      <Kutu t={t} bas={K(2, "exercise")} x={1350} y={400} metin="EXERCISE HABITS" renk={RENK.yesil} />
      <Kutu t={t} bas={K(2, "results")} x={1350} y={520} metin="DIFFERENT RESULTS" renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "diet")} metin="THE DIET" x={1350} y={680} boyut={104} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "itself")} metin="ITSELF" x={1350} y={790} boyut={104} renk={RENK.koyuYesil} />
    </>
  );
};
export default S25;
