// Sahne 17 — sınırlar: harita üstünde üç iğne (üç şehir); üst şeritte sırayla açıklama hapları, sonda büyüteçte "tuzlu seçim" etiketi.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // üst şerit: her hap kendi ifadesiyle gelir, bir sonrakinden önce söner
  const SERIT = [
    { bas: K(0, "convenience"), bitis: K(0, "more college") - 0.1, metin: "CONVENIENCE SAMPLE", renk: RENK.altin },
    { bas: K(0, "more college"), bitis: K(1, "exact") - 0.1, metin: "MORE COLLEGE GRADS THAN U.S. OVERALL", renk: RENK.altin },
    { bas: K(1, "exact"), bitis: K(2, "national") - 0.1, metin: "EXACT PERCENTAGES MAY DIFFER", renk: RENK.mercan },
    { bas: K(2, "national"), bitis: K(3, "practical") - 0.1, metin: "NATIONAL DATA: SIMILAR STORY", renk: RENK.yesil },
  ];
  const tSehir = K(0, "three cities");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        <Etiket t={t} bas={tSehir} capa={[476, 216]} konum={[300, 150]} metin="CITY 1" renk={RENK.altin} />
        <Etiket t={t} bas={tSehir + 0.3} capa={[836, 437]} konum={[920, 560]} metin="CITY 2" renk={RENK.altin} />
        <Etiket t={t} bas={tSehir + 0.6} capa={[1036, 663]} konum={[1280, 790]} metin="CITY 3" renk={RENK.altin} />
        <Etiket t={t} bas={K(3, "spotting")} capa={[1250, 300]} konum={[1450, 160]} metin="SPOT THE SALTIER CHOICE" renk={RENK.yesil} />
      </Kamera>
      {SERIT.map((b, i) => {
        const [sc, al] = pop(t, b.bas, 0.5);
        const a = al * sol(t, b.bitis);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 960, top: 62, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
            <Hap metin={b.metin} renk={b.renk} boyut={34} />
          </div>
        );
      })}
    </>
  );
};

export default S17;
