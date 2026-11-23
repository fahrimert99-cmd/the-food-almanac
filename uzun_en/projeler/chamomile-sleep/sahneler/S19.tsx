// Sahne 19 — anketler: uyku, ruh hali, yorgunluk; iki ölçüm anı saat ve fincanla işaretlenir.
import React from "react";
import { Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUyku = K(0, "sleep"), tRuh = K(0, "mood"), tYor = K(0, "fatigue");
  const tIki = K(0, "two weeks"), tTakip = K(0, "four-week");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1750])}>
        {/* kağıdın üstüne el yazısı gibi liste */}
        <Liste t={t} x={470} y={400} boyut={46} aralik={92} isaret="onay" genislik={420}
          ogeler={[
            { bas: tUyku, metin: "SLEEP" },
            { bas: tRuh, metin: "MOOD" },
            { bas: tYor, metin: "FATIGUE" },
          ]} />
        <Etiket t={t} bas={tIki} capa={[1290, 690]} konum={[1560, 800]} metin="AFTER 2 WEEKS OF TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={tTakip} capa={[1430, 270]} konum={[1150, 130]} metin="4-WEEK FOLLOW-UP" renk={RENK.altin} />
      </Kamera>
    </>
  );
};

export default S19;
