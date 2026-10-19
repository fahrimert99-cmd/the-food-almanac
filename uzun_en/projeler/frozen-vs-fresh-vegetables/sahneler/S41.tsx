// Sahne 41 — Karotenoidler farklı davranır: haşlama/buhar en iyi korur, pişirme antioksidan ölçümünü artırdı (Miglio 2008).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCar = K(0, "carotenoids"), tCarrot = K(1, "carrots"), tZuc = K(1, "zucchini"), tBroc = K(1, "broccoli"),
    tBoil = K(1, "boiling"), tSteam = K(1, "steaming"), tKept = K(1, "kept"), tAnti = K(1, "antioxidant"),
    tSoft = K(1, "softening"), tEasy = K(1, "easier");
  const pB = pop(t, tBoil, 0.5), pS = pop(t, tSteam, 0.5), pA = pop(t, tAnti + 0.6, 0.5), pSo = pop(t, tSoft, 0.5), pE = pop(t, tEasy, 0.5);
  const hap = (p: number[], m: string, renk: string, x: number, y: number, b = 28) => p[1] > 0 && (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${p[0]})`, transformOrigin: "0 50%", opacity: p[1] }}>
      <Hap metin={m} renk={renk} boyut={b} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1740])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={tCar} capa={[360, 650]} konum={[300, 440]} metin="CAROTENOIDS" renk={RENK.mercan} />
      <Etiket t={t} bas={tCarrot} bitis={tCarrot + 1.6} capa={[260, 700]} konum={[300, 560]} metin="CARROTS" renk={RENK.mercan} />
      <Etiket t={t} bas={tZuc} bitis={tZuc + 1.4} capa={[720, 800]} konum={[1060, 440]} metin="ZUCCHINI" renk={RENK.yesil} />
      <Etiket t={t} bas={tBroc} bitis={tBroc + 1.4} capa={[880, 640]} konum={[780, 360]} metin="BROCCOLI" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tAnti} metin="COOKING CAN" x={1860} y={190} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tAnti + 0.2} metin="HELP TOO" x={1860} y={300} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      {hap(pB, "BOILING", RENK.lacivert, 1230, 400)}
      {hap(pS, "STEAMING", RENK.yesil, 1430, 400)}
      <Not t={t} bas={tKept} metin="kept carotenoids best" x={1230} y={456} boyut={28} agirlik={800} />
      {hap(pA, "ANTIOXIDANT ACTIVITY ROSE", RENK.altin, 1230, 540)}
      {hap(pSo, "SOFTENING", RENK.mercan, 1330, 625)}
      {hap(pE, "EASIER TO EXTRACT", RENK.yesil, 1330, 705)}
    </>
  );
};

export default S41;
