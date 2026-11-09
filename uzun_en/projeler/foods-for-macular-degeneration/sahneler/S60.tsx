// Sahne 60 — ıspanak/yumurta + az yağ; düzenli muayene her yemekten önemli.
import React from "react";
import { BaslikBlok, kagit, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSpin = K(0, "Spinach");
  const tEgg = K(0, "eggs");
  const tLut = K(0, "lutein");
  const tFat = K(0, "with");
  const tMuayene = K(1, "dilated");
  const tDaha = K(1, "matters");
  const pPanel = eout(ilerle(t, tLut - 0.2, 0.6));
  return (
    <>
      <Kamera gorsel="tam/60" pencere={kameraYolu(t, s.sure, [260, 190, 1520], [330, 170, 1440])}>
        <Etiket t={t} bas={tSpin} bitis={tMuayene} capa={[800, 800]} konum={[480, 730]} metin="SPINACH" renk={RENK.yesil} />
        <Etiket t={t} bas={tEgg} bitis={tMuayene} capa={[1170, 725]} konum={[1650, 790]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={tFat} bitis={tMuayene} capa={[790, 885]} konum={[480, 900]} metin="A LITTLE FAT" renk={RENK.koyuYesil} />
        {/* pencere camını soluklaştır: çatlak çizgiler belirsiz kalsın */}
        <div style={{ position: "absolute", left: 200, top: 0, width: 1360, height: 640,
          background: `linear-gradient(to bottom, ${kagit(0.88)} 0%, ${kagit(0.74)} 75%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={520} />
      <BaslikBlok t={t} bas={tLut} bitis={tMuayene - 0.15} satirlar={["LUTEIN +", "ZEAXANTHIN"]} x={1860} y={250} boyut={80} hiza="sag" />
      <BaslikBlok t={t} bas={tMuayene} satirlar={["DILATED", "EYE EXAM"]} x={1860} y={250} boyut={90} hiza="sag" />
      <Not t={t} bas={tDaha} metin="MATTERS MORE THAN ANY FOOD" x={1860} y={520} hiza="sag" genislik={420} boyut={34} agirlik={800} />
    </>
  );
};
export default S60;
