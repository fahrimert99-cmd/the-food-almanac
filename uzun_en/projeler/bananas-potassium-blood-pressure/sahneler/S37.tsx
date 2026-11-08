// Sahne 37 — dengeli tabak: daha çok potasyum, daha az sodyum
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPat = K(0, "pattern");
  const tMore = K(1, "More");
  const tFoods = K(1, "potassium-rich");
  const tLess = K(1, "less sodium");
  const tHelp = K(1, "may help");
  const tEsp = K(1, "especially");
  const cik = K(1, "may help") - 0.2;
  const [s1, a1] = pop(t, tPat, 0.55);
  const [s2, a2] = pop(t, tHelp, 0.55);
  const [s3, a3] = pop(t, tEsp, 0.55);
  const pill = (sc: number, al: number, y: number, metin: string, renk: string) => (
    <div style={{ position: "absolute", left: 80, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={36} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 100, 1780])}>
        <Etiket t={t} bas={tFoods} bitis={cik} capa={[390, 500]} konum={[400, 330]} metin="BANANAS" renk={RENK.altin} />
        <Etiket t={t} bas={tFoods + 0.25} bitis={cik} capa={[690, 790]} konum={[780, 430]} metin="BEANS" renk={RENK.mercan} />
        <Etiket t={t} bas={tFoods + 0.5} bitis={cik} capa={[1170, 790]} konum={[1170, 580]} metin="POTATO" renk={RENK.altin} />
        <Etiket t={t} bas={tFoods + 0.75} bitis={cik} capa={[1520, 700]} konum={[1560, 590]} metin="YOGURT" renk={RENK.lacivert} />
      </Kamera>
      {pill(s1, a1, 150, "EVIDENCE: A PATTERN", RENK.lacivert)}
      <Baslik t={t} bas={tMore} metin="MORE" x={1860} y={140} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tMore + 0.2} metin="POTASSIUM," x={1860} y={243} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tLess} metin="LESS SODIUM" x={1860} y={346} boyut={92} hiza="sag" renk={RENK.mercan} />
      {pill(s2, a2, 240, "MAY HELP LOWER BLOOD PRESSURE", RENK.koyuYesil)}
      {pill(s3, a3, 320, "ESPECIALLY IF ALREADY HIGH", RENK.altin)}
    </>
  );
};

export default S37;
