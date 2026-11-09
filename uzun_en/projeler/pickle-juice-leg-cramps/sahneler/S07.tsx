// Sahne 7 — 50–60 % yetişkin (Allen & Kirby 2012)
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "more"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(1, "American")} />}
      <Not t={t} bas={K(0, "very")} bitis={K(1, "50") - 0.1} metin="VERY COMMON" x={1860} y={330} hiza="sag" boyut={64} agirlik={800} renk={RENK.altin} genislik={560} />
      <Baslik t={t} bas={K(1, "50")} metin="50 TO 60%" x={1860} y={330} boyut={128} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "adults")} metin="OF ADULTS" x={1860} y={455} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "have")} metin={s.meta.baslik?.not ?? ""} x={1860} y={545} hiza="sag" boyut={34} agirlik={800} renk={RENK.lacivert} genislik={560} />
      <div style={{ position: "absolute", right: 60, top: 700, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="MORE FREQUENT WITH AGE" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S07;
