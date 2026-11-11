// Sahne 29 — ölçümler ve tamamlama: bloklar + kalem; sağda 12 testi, sonra %93 rozeti.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tCik = c[1].bas - 0.1;
  const [sc, al] = pop(t, K(0, "brain"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(0, "battery")} capa={[600, 420]} konum={[500, 220]} metin="TEST BATTERY" renk={RENK.altin} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "twelve")} bitis={tCik} vurgu="12" not="MEMORY AND THINKING TESTS" x={1560} y={160} genislik={500} />
      <div style={{ position: "absolute", left: 1330, top: 520, opacity: al * sol(t, 1e9), transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="SOME HAD BRAIN SCANS" renk={RENK.koyuYesil} boyut={28} />
      </div>
      <VurguRozet t={t} bas={K(1, "Ninety-three")} vurgu="93%" not="FINISHED ALL THREE YEARS" x={1560} y={160} genislik={500} boyut={150} renk={RENK.yesil} />
    </>
  );
};
export default S29;
