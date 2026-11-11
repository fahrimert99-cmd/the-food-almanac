// Sahne 19 — Telefon ve masa: yaklaşık %39 emin ama yanlış; anketi yapanlar.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, VurguRozet } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t39 = K(0, "39 percent"), tHarris = K(1, "Harris Poll"), tJohns = K(1, "Johns Hopkins"), tSurvey = K(1, "survey");
  const bitisRozet = K(1, "The Harris") - 0.3;
  const pill = (bas: number, y: number, m: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return al <= 0 ? null : (
      <div style={{ position: "absolute", left: 120, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
        <Hap metin={m} renk={renk} boyut={30} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [20, 0, 1880], [90, 40, 1740])}>
        <Etiket t={t} bas={tSurvey} capa={[640, 520]} konum={[960, 560]} metin="SURVEY" renk={RENK.altin} />
      </Kamera>
      <div style={{ opacity: sol(t, bitisRozet) }}>
        <VurguRozet t={t} bas={t39} vurgu="≈ 39%" not="CONFIDENT AND WRONG" x={620} y={60} genislik={560} boyut={96} renk={RENK.mercan} />
      </div>
      {pill(tHarris, 80, "THE HARRIS POLL", RENK.altin)}
      {pill(tJohns, 170, "JOHNS HOPKINS BLOOMBERG SCHOOL OF PUBLIC HEALTH", RENK.lacivert)}
    </>
  );
};

export default S19;
