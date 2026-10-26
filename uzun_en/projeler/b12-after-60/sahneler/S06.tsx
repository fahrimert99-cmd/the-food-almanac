// Sahne 6 — B12 hayvansal gıdalarda; vegan/vejetaryenler.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const son = c[1].bas - 0.15;
  const e = (ifade: string, capa: [number, number], konum: [number, number], metin: string, renk: string, cum = 0) => (
    <Etiket t={t} bas={K(cum, ifade)} bitis={son} capa={capa} konum={konum} metin={metin} renk={renk} />
  );
  return (
    <>
      <Kamera gorsel="tam/06" pencere={p}>
        {/* alttaki sahte yazı örtülür */}
        <div style={{ position: "absolute", left: 780, top: 935, width: 400, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        {e("meat", [1560, 690], [1620, 890], "MEAT", RENK.mercan)}
        {e("fish", [1100, 540], [1100, 300], "FISH", RENK.altin)}
        {e("eggs", [400, 650], [260, 890], "EGGS", RENK.altin)}
        {e("dairy", [440, 340], [720, 210], "DAIRY", RENK.yesil)}
      </Kamera>
      <Baslik t={t} bas={K(0, "naturally")} bitis={son} metin="NATURALLY ONLY IN" x={1250} y={70} boyut={36} hiza="orta" font="inter" agirlik={800} aralik={5} renk={RENK.gri} />
      <Baslik t={t} bas={K(0, "animal")} bitis={son} metin="ANIMAL FOODS" x={1250} y={150} boyut={100} hiza="orta" renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "strict")} satirlar={["STRICT VEGETARIANS", "AND VEGANS"]} x={1250} y={110} boyut={76} hiza="orta"
        renkler={[RENK.lacivert, RENK.koyuYesil]} adim={K(1, "vegans") - K(1, "strict")} />
      <Not t={t} bas={K(1, "also")} metin="CAN ALSO RUN SHORT" x={1250} y={255} hiza="orta" boyut={42} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S06;
