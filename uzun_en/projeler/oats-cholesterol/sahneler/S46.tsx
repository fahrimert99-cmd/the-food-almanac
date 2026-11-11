// Sahne 46 — Yol 3: tabağın geri kalanı. Sağda onay maddeleri, sonda çarpı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Ikon, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPlate = K(1, "plate");
  const tOats = K(2, "oats");
  const tNot = K(2, "not as a cure");
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])}>
        <Etiket t={t} bas={tPlate - 0.1} capa={[430, 440]} konum={[330, 150]} metin="REST OF THE PLATE" renk={RENK.yesil} />
        <Etiket t={t} bas={tOats - 0.1} capa={[770, 715]} konum={[1010, 640]} metin="OATS" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={800} />
      <BaslikBlok t={t} bas={0.1} satirlar={["THREE:", "WHOLE PLATE"]} x={1860} y={250} boyut={104} hiza="sag" adim={0.9} />
      <Liste t={t} x={1130} y={500} boyut={34} aralik={82} genislik={740} isaret="onay"
        ogeler={[
          { bas: K(2, "part of"), metin: "PART OF A DIET", renk: RENK.yesil },
          { bas: K(2, "saturated"), metin: "LOW IN SATURATED FAT", renk: RENK.yesil },
          { bas: K(2, "cholesterol,"), metin: "LOW IN CHOLESTEROL", renk: RENK.yesil },
        ]} />
      <Ikon t={t} bas={tNot} ad="carpi" x={1172} y={500 + 3 * 82 + 28} boyut={58} zemin={RENK.mercan} />
      <div style={{ position: "absolute", left: 1220, top: 500 + 3 * 82 + 2, opacity: eout(ilerle(t, tNot, 0.5)), fontFamily: "Inter, sans-serif",
        fontWeight: 800, fontSize: 34, color: RENK.mercan, lineHeight: 1.2, width: 640 }}>NOT A CURE FOR A RICH DIET</div>
    </>
  );
};

export default S46;
