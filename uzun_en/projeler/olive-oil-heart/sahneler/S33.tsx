// Sahne 33 — "Qualified" ne demek: kanıt güvenilir ama FDA'nın en üst standardı değil; iddia yalnızca yerine koyunca geçerli.
import React from "react";
import { BaslikBlok, Ikon, Kamera, Liste, Hap, RENK, SP, kameraYolu, kelimeZamani, sol, eout, ilerle, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQ = K(0, "qualified"), tCred = K(1, "credible"), tNot = K(1, "not strong"), tOnly = K(2, "only applies");
  const tRep = K(2, "replaces"), tCal = K(2, "add calories");
  const cik = tOnly - 0.25;
  const [s1, a1] = pop(t, tCred, 0.5), [s2, a2] = pop(t, tNot, 0.5);
  const pil = (sc: number, a: number, y: number, ik: "onay" | "uyari", zemin: string, m: string) => (
    <div style={{ position: "absolute", left: 1000, top: y, opacity: a * sol(t, cik), transform: `scale(${sc})`, transformOrigin: "0% 50%",
      display: "flex", alignItems: "center", gap: 18 }}>
      <Ikon t={t} bas={0} ad={ik} x={46} y={46} boyut={80} zemin={zemin} />
      <div style={{ marginLeft: 96 }}><Hap metin={m} renk={zemin} boyut={32} /></div>
    </div>
  );
  return (
    <>
      {/* damganın üzerindeki sahte yazı kadraj dışında kalır */}
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [690, 150, 1230], [740, 190, 1150])} />
      <BaslikBlok t={t} bas={tQ} satirlar={["QUALIFIED", "CLAIM"]} x={1000} y={250} boyut={120}
        renkler={[RENK.lacivert, RENK.altin]} />
      {pil(s1, a1, 520, "onay", RENK.yesil, "CREDIBLE EVIDENCE")}
      {pil(s2, a2, 640, "uyari", RENK.altin, "BELOW THE TOP STANDARD")}
      <Liste t={t} x={1000} y={540} isaret="onay" boyut={34} aralik={96} genislik={860} ogeler={[
        { bas: tRep, metin: "REPLACES SATURATED FAT" },
        { bas: tCal, metin: "NO EXTRA CALORIES" },
      ]} />
    </>
  );
};

export default S33;
