// Sahne 37 — çalışmalar yalnız gargarayı test etti; mantık tükürük deneyiyle uyumlu ama kanıt değil.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Kamera, Liste, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGarg = K(1, "mouthwash"), tSuyu = K(1, "beet"), tMantik = K(2, "logic");
  const tBakt = K(2, "bacteria"), tAz = K(2, "less");
  const tGec = K(2, "But") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 30, 1860], [90, 120, 1700])}>
        {/* sağ alttaki imza kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1700, top: 980, width: 220, height: 100,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tGarg} bitis={tGec} capa={[400, 560]} konum={[400, 120]} metin="MOUTHWASH" renk={RENK.mercan} />
        <Etiket t={t} bas={tSuyu} bitis={tGec} capa={[740, 690]} konum={[760, 440]} metin="BEET JUICE" renk={RENK.altin} />
      </Kamera>
      {/* cümle 1: neyin test edildiği */}
      <Liste t={t} x={1020} y={330} boyut={38} aralik={96} genislik={820} isaret="onay" ogeler={[
        { bas: tGarg, metin: "MOUTHWASH ALONE TESTED", renk: RENK.yesil, bitis: tGec },
      ]} />
      <Liste t={t} x={1020} y={426} boyut={38} aralik={96} genislik={820} isaret="carpi" ogeler={[
        { bas: tSuyu, metin: "JUICE + MOUTHWASH: NOT TESTED", renk: RENK.mercan, bitis: tGec },
      ]} />
      {/* cümle 2: ipucu, kanıt değil */}
      <BaslikBlok t={t} bas={tMantik} satirlar={["A CLUE,", "NOT PROOF"]} x={1860} y={180} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <AdimAkisi t={t} x={1000} y={470} boyut={34} numarali={false} adimlar={[
        { bas: tBakt, metin: "QUIETER BACTERIA", renk: RENK.altin },
        { bas: tAz, metin: "LESS NITRITE", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S37;
