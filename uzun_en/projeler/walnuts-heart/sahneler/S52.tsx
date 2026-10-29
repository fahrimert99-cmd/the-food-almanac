// Sahne 52 — güvenlik notu.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Konumlu, pop ile gelen hap
const Hp: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAl = K(1, "allergy"), tListe = K(2, "cholesterol"), tCop = K(3, "chopped");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 100, 1800], [60, 140, 1700])} />
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1330} y={220} boyut={130}
        renkler={[RENK.mercan, RENK.lacivert]} bitis={K(2, "and") - 0.1} />
      <Etiket t={t} bas={tAl} capa={[1040, 440]} konum={[1450, 480]} metin="TREE NUT ALLERGY" renk={RENK.mercan} bitis={K(2, "and") - 0.1} />
      <Liste t={t} x={1260} y={200} boyut={38} aralik={90} isaret="nokta" genislik={600} ogeler={[
        { bas: K(2, "cholesterol"), metin: "CHOLESTEROL MEDICINE", bitis: tCop - 0.3 },
        { bas: K(2, "blood"), metin: "BLOOD THINNERS", bitis: tCop - 0.3 },
        { bas: K(2, "health"), metin: "HEALTH CONDITION", bitis: tCop - 0.3 },
      ]} />
      <Ikon t={t} bas={K(2, "ask")} ad="soru" x={1320} y={560} boyut={90} zemin={RENK.altin} bitis={tCop - 0.3} />
      <BaslikBlok t={t} bas={K(2, "ask")} satirlar={["ASK YOUR DOCTOR", "OR PHARMACIST"]} x={1390} y={545} boyut={60}
        renkler={[RENK.lacivert, RENK.lacivert]} satirArasi={1.15} bitis={tCop - 0.3} />
      <Etiket t={t} bas={K(2, "doctor")} capa={[440, 440]} konum={[440, 200]} metin="DOCTOR" renk={RENK.altin} bitis={tCop - 0.3} />
      <Etiket t={t} bas={tCop} capa={[1033, 440]} konum={[1450, 330]} metin="CHOPPED WALNUTS" renk={RENK.yesil} />
      <Hp t={t} bas={K(3, "chewing")} x={1450} y={430} metin="IF CHEWING IS HARD" renk={RENK.yesil} />
    </>
  );
};

export default S52;
