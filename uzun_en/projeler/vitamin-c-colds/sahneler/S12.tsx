// Sahne 12 — plasebo kontrollü denemeler, günlük doz en az 200 mg.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Sat: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1330, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={36} />
    </div>
  );
};

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const tDoz = K(0, "200 milligrams") - 0.25;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={p}>
        <Etiket t={t} bas={K(0, "vitamin C")} capa={[340, 520]} konum={[340, 110]} metin="VITAMIN C" renk={RENK.altin} />
      </Kamera>
      {/* sağ panel: görselin sağ kenarındaki dikişi de örter */}
      <div style={{ position: "absolute", left: 1200, top: 0, bottom: 0, right: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 90px, ${kagit(1)} 100%)` }} />
      <Baslik t={t} bas={K(0, "placebo-controlled")} bitis={tDoz} metin="PLACEBO-CONTROLLED" x={1330} y={230} boyut={44} renk={RENK.lacivert} />
      <Sat t={t} bas={K(0, "vitamin C")} bitis={tDoz} y={320} metin="GOT VITAMIN C" renk={RENK.yesil} />
      <Sat t={t} bas={K(0, "dummy pill")} bitis={tDoz} y={420} metin="GOT A DUMMY PILL" renk={RENK.gri} />
      <BaslikBlok t={t} bas={tDoz} satirlar={["200 MG +", "A DAY"]} x={1330} y={300} boyut={150} renkler={[RENK.koyuYesil, RENK.altin]} />
      <Not t={t} bas={K(0, "more than double")} metin="More than double the daily recommendation" x={1330} y={560} genislik={520} boyut={34} agirlik={700} />
    </>
  );
};

export default S12;
