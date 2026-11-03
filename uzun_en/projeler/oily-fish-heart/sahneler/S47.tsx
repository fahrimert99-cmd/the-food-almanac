// Sahne 47 — Bir: haftada iki porsiyon, yağlı balık seç.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, ANTON } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta.baslik!;
  const tAim = K(1, "two servings"), tOz = K(1, "three and a half"), tOily = K(2, "oily");
  const [sn, an] = pop(t, 0.0, 0.5);
  const pP = eout(ilerle(t, 0.1, 0.7));
  const ogeler = [
    { bas: K(2, "salmon,"), metin: "SALMON" }, { bas: K(2, "sardines,"), metin: "SARDINES" }, { bas: K(2, "herring,"), metin: "HERRING" },
    { bas: K(2, "trout"), metin: "TROUT" }, { bas: K(2, "Atlantic"), metin: "ATLANTIC MACKEREL" },
  ];
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        <Etiket t={t} bas={ogeler[0].bas} capa={[300, 560]} konum={[330, 160]} metin="SALMON" renk={RENK.mercan} boyut={26} bitis={1e9} />
        <Etiket t={t} bas={ogeler[1].bas} capa={[1000, 600]} konum={[1000, 860]} metin="SARDINES" renk={RENK.lacivert} boyut={26} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={640} />
      <div style={{ position: "absolute", left: 1330, top: 70, width: 520, opacity: an, transform: `scale(${sn})`, transformOrigin: "0 50%",
        fontFamily: ANTON, fontSize: 56, letterSpacing: 5, color: RENK.altin }}>ONE</div>
      <BaslikBlok t={t} bas={0.85} satirlar={m.satirlar} x={1330} y={230} boyut={100} />
      <Not t={t} bas={tOz} metin="~3½ OUNCES EACH" x={1330} y={400} boyut={32} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={tOily} metin="CHOOSE OILY FISH:" x={1330} y={500} boyut={30} agirlik={800} renk={RENK.koyuYesil} />
      <Liste t={t} ogeler={ogeler} x={1330} y={560} aralik={66} boyut={28} isaret="onay" genislik={520} />
    </>
  );
};
export default S47;
