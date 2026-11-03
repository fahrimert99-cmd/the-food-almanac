// Sahne 42 — Dürüst özet: yetersiz içme makul risk; herkes için yönergeyi aşmak/böbrek koruması kanıtlanmadı.
import React from "react";
import { Baslik, Kamera, Liste, Not, RENK, SP, ANTON, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOk = K(1, "Under-drinking");
  const tNo = K(2, "nobody");
  const baslik = (x: number, bas: number, m: string, r: string) => {
    const a = eout(ilerle(t, bas, 0.5));
    return a > 0 && (
      <div style={{ position: "absolute", left: x, top: 215, opacity: a, fontFamily: ANTON, fontSize: 64, color: r }}>{m}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 50, 1800])} />
      <Baslik t={t} bas={0.3} bitis={tNo - 0.2} metin="HONEST SUMMARY" x={90} y={130} boyut={84} renk={RENK.koyuYesil} />
      {baslik(90, tOk, "PLAUSIBLE", RENK.altin)}
      <Liste t={t} isaret="nokta" x={90} y={330} aralik={110} boyut={34} genislik={640}
        ogeler={[
          { bas: K(1, "plausible"), metin: "UNDER-DRINKING RISK AFTER 60", renk: RENK.altin },
          { bas: K(1, "worth"), metin: "WORTH GUARDING AGAINST", renk: RENK.altin },
        ]} />
      {baslik(1160, tNo, "NOT SHOWN", RENK.mercan)}
      <Liste t={t} isaret="carpi" x={1160} y={330} aralik={150} boyut={34} genislik={700}
        ogeler={[
          { bas: K(2, "push"), metin: "EVERYONE SHOULD GO PAST THE GUIDELINE", renk: RENK.mercan },
          { bas: K(2, "extra"), metin: "EXTRA WATER PROTECTS THE KIDNEYS", renk: RENK.mercan },
        ]} />
    </>
  );
};
export default S42;
