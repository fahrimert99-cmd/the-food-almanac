// Sahne 13 — neden 3 gram? Health Canada: erken çalışmalarda işe yarayan en düşük miktar.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, bitis = 1e9, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-100%, -50%) scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHc = K(1, "Health Canada");
  const tEn = K(1, "lowest");
  const tKil = K(2, "practical");
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* kadran üzerindeki sahte yazı kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 585, top: 640, width: 130, height: 80,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #EFECE3 0%, #EFECE3 60%, rgba(239,236,227,0) 100%)" }} />
        <Etiket t={t} bas={tEn} bitis={tKil - 0.2} capa={[600, 300]} konum={[330, 110]} metin="DAILY AMOUNT" renk={RENK.altin} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={780} opak={0.97} />
      <BaslikBlok t={t} bas={0.05} satirlar={s.meta.baslik!.satirlar} x={1860} y={170} boyut={104} hiza="sag" />
      <Pill t={t} bas={tHc} bitis={tKil - 0.2} metin="HEALTH CANADA REVIEW" x={1860} y={470} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={tEn} bitis={tKil - 0.2} vurgu="3 g" not="LOWEST AMOUNT SEEN TO WORK" x={1560} y={540} genislik={460} boyut={96} />
      <Pill t={t} bas={K(1, "early trials")} bitis={tKil - 0.2} metin="EARLY TRIALS" x={1860} y={800} renk={RENK.altin} />
      <Pill t={t} bas={tKil} metin="PRACTICAL BENCHMARK" x={1860} y={500} renk={RENK.yesil} />
      <Ikon t={t} bas={K(2, "not a")} ad="carpi" x={1385} y={640} boyut={84} zemin={RENK.mercan} />
      <Pill t={t} bas={K(2, "not a")} metin="NOT A MAGIC LINE" x={1860} y={640} renk={RENK.mercan} />
    </>
  );
};

export default S13;
