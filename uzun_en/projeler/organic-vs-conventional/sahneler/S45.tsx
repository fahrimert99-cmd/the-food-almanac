// Sahne 45 — eski veri; prim tek sayı değil: ıspanak %57 (2004) → %7 (2010).
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(0, "old"), tVary = K(0, "prices vary"), tReg = K(0, "region"), tNot = K(0, "not today's");
  const tOne = K(1, "isn't"), tSp = K(2, "Spinach's"), t57 = K(2, "57"), t7 = K(2, "7 percent");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        {/* terazi kadranındaki bozuk yazıyı örten etiket */}
        <div style={{ position: "absolute", left: 420, top: 760, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="OLD DATA" renk={RENK.altin} boyut={40} />
        </div>
        <Etiket t={t} bas={tSp} capa={[470, 420]} konum={[470, 150]} metin="SPINACH" renk={RENK.yesil} />
      </Kamera>
      <Liste t={t} x={1250} y={290} aralik={110} boyut={40} isaret="nokta" genislik={640}
        ogeler={[
          { bas: tVary, metin: "PRICES VARY BY STORE", renk: RENK.altin, bitis: 5.9 },
          { bas: tReg - 0.3, metin: "AND BY REGION", renk: RENK.altin, bitis: 5.9 },
          { bas: tNot, metin: "NOT TODAY'S PRICES", renk: RENK.mercan, bitis: 5.9 },
        ]} />
      <Baslik t={t} bas={tOne} bitis={8.9} metin="NOT ONE" x={1250} y={380} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tOne + 0.2} bitis={8.9} metin="NUMBER" x={1250} y={500} boyut={110} renk={RENK.mercan} />
      <Baslik t={t} bas={tSp} metin="SPINACH" x={1250} y={170} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={t57 - 0.2} metin="57% → 7%" x={1250} y={290} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={t57} metin="ORGANIC PREMIUM" x={1254} y={356} boyut={26} agirlik={800} renk={RENK.gri} />
      <CubukGrafik t={t} bas={t57 - 0.2} x={1250} y={470} w={560} h={340} maks={62}
        cubuklar={[
          { etiket: "2004", deger: 57, metin: "57%", renk: RENK.mercan, bas: t57 - 0.2 },
          { etiket: "2010", deger: 7, metin: "7%", renk: RENK.yesil, bas: t7 - 0.2 },
        ]} />
    </>
  );
};

export default S45;
