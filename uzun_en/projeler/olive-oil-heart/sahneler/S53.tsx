// Sahne 53 — üç: yumuşak pişir, en iyi şişeyi çiselemek için sakla
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tUc = K(0, "three"), tBasl = K(1, "cook");
  const tSote = K(2, "sauté"), tRoast = K(2, "roast"), tBake = K(2, "bake"), tOrta = K(2, "moderate");
  const tTaze = K(2, "fresh"), tAyni = K(2, "same oil");
  const tSise = K(3, "best bottle"), tSoup = K(3, "soup"), tBean = K(3, "beans"), tFish = K(3, "fish"), tSalad = K(3, "salad");
  const bitA = tTaze - 0.15, bitB = c[3].bas - 0.1;
  const [sc, al] = pop(t, tUc, 0.5);
  const [s2, a2] = pop(t, tOrta, 0.5);
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 60, 1750])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={700} />
      <div style={{ position: "absolute", left: 1250, top: 130, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 66, transform: `scale(${sc})`, opacity: al }}>3</div>
      <BaslikBlok t={t} bas={tBasl} satirlar={["COOK", "GENTLY"]} x={1860} y={180} boyut={120} hiza="sag" />
      <Liste t={t} x={1300} y={460} aralik={88} boyut={38} isaret="nokta" genislik={560} ogeler={[
        { bas: tSote, metin: "SAUTÉ", renk: RENK.altin, bitis: bitA },
        { bas: tRoast, metin: "ROAST", renk: RENK.altin, bitis: bitA },
        { bas: tBake, metin: "BAKE", renk: RENK.altin, bitis: bitA },
      ]} />
      {a2 > 0 && (
        <div style={{ position: "absolute", left: 1300, top: 740, transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 * sol(t, bitA) }}>
          <Hap metin="MODERATE HEAT" renk={RENK.yesil} boyut={34} />
        </div>
      )}
      <Liste t={t} x={1300} y={460} aralik={100} boyut={36} isaret="onay" genislik={560} ogeler={[
        { bas: tTaze, metin: "FRESH OIL", renk: RENK.yesil, bitis: bitB },
      ]} />
      <Liste t={t} x={1300} y={560} aralik={100} boyut={36} isaret="carpi" genislik={560} ogeler={[
        { bas: tAyni, metin: "SAME OIL AGAIN", renk: RENK.mercan, bitis: bitB },
      ]} />
      <Etiket t={t} bas={tSise} capa={[1033, 480]} konum={[1110, 640]} metin="YOUR BEST BOTTLE" renk={RENK.altin} />
      <Liste t={t} x={1300} y={490} aralik={86} boyut={36} isaret="nokta" genislik={560} ogeler={[
        { bas: tSoup, metin: "SOUP", renk: RENK.koyuYesil },
        { bas: tBean, metin: "BEANS", renk: RENK.koyuYesil },
        { bas: tFish, metin: "FISH", renk: RENK.koyuYesil },
        { bas: tSalad, metin: "SALAD", renk: RENK.koyuYesil },
      ]} />
      <Baslik t={t} bas={tSise} metin="DRIZZLE OVER" x={1300} y={420} boyut={40} renk={RENK.altin} font="inter" agirlik={800} aralik={4} />
    </>
  );
};

export default S53;
