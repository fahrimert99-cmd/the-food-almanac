// Sahne 17 — Tasmanya denemesi: 70 yetişkin, 12 hafta, günde iki kapsül.
import React from "react";
import { Baslik, Etiket, Hap, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik!;
  const listeSon = c[1].bas - 0.1;
  const tHafta = K(1, "twelve weeks");
  const tKaps = K(1, "capsules"), tEks = K(1, "turmeric extract"), tPla = K(1, "placebo");
  const [s1, a1] = pop(t, tEks, 0.5);
  const [s2, a2] = pop(t, tPla, 0.5);
  const pil = (sc: number, al: number, y: number): React.CSSProperties => ({
    position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al });
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={tKaps} capa={[720, 430]} konum={[1090, 320]} metin="TWO CAPSULES A DAY" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} y={840} />
      <Liste t={t} x={1400} y={230} aralik={96} boyut={30} genislik={470} ogeler={[
        { bas: K(0, "Australia"), metin: "TASMANIA, AUSTRALIA", renk: RENK.lacivert, bitis: listeSon },
        { bas: K(0, "70"), metin: "70 ADULTS", renk: RENK.altin, bitis: listeSon },
        { bas: K(0, "visible"), metin: "VISIBLE KNEE SWELLING", renk: RENK.yesil, bitis: listeSon },
      ]} />
      <Baslik t={t} bas={tHafta} metin={b.satirlar[0]} x={1860} y={250} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={tHafta + 0.3} metin="two capsules a day" x={1860} y={330} hiza="sag" genislik={470} boyut={30} renk={RENK.gri} />
      <div style={pil(s1, a1, 520)}><Hap metin="TURMERIC EXTRACT" renk={RENK.altin} boyut={28} /></div>
      <div style={pil(s2, a2, 620)}><Hap metin="PLACEBO" renk={RENK.gri} boyut={28} /></div>
    </>
  );
};

export default S17;
