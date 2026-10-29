// Sahne 15 — "Asgari miktar yaşlılar için de doğru mu?" Sağ panelde soru; yaşlı adam etiketlenir.
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, Liste, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const PopHap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, x, y, metin, renk, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(1, "older people"), tAct = K(1, "less active");
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 80, 1740])}>
        {/* yaşlı adam: gövde */}
        <Etiket t={t} bas={tOld} capa={[700, 420]} konum={[270, 150]} metin="OLDER ADULT" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={K(0, "question")} satirlar={["A QUESTION"]} x={1860} y={190} boyut={112} hiza="sag" />
      <Ikon t={t} bas={K(0, "followed")} ad="soru" x={1450} y={330} zemin={RENK.altin} boyut={84} />
      <PopHap t={t} bas={K(1, "minimum")} x={1590} y={420} metin="THE MINIMUM" renk={RENK.mercan} />
      <PopHap t={t} bas={K(1, "right amount")} x={1590} y={510} metin="THE RIGHT AMOUNT?" renk={RENK.yesil} />
      <Liste t={t} x={1340} y={620} aralik={86} boyut={34} isaret="nokta" genislik={540} ogeler={[
        { bas: tAct, metin: "MAY BE LESS ACTIVE", renk: RENK.altin },
        { bas: K(1, "living with"), metin: "OR LIVING WITH ILLNESS", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S15;
