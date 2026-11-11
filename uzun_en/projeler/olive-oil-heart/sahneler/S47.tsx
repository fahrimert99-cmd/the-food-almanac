// Sahne 47 — hâlâ belirsiz: üç soru + gözlemsel çalışma notu
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSoru = [K(0, "whether the oil"), K(0, "whether extra"), K(0, "what the best")];
  const tGoz = K(1, "observational");
  const bit1 = c[1].bas - 0.1;
  const [sc, al] = pop(t, tGoz, 0.55);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1740])} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={0.2} satirlar={["STILL", "UNCERTAIN"]} x={1860} y={190} boyut={110} hiza="sag" />
      <Etiket t={t} bas={tSoru[0] + 0.1} bitis={tSoru[1] - 0.2} capa={[1080, 745]} konum={[880, 560]} metin="THE OIL ALONE?" renk={RENK.altin} />
      <Liste t={t} x={1190} y={500} aralik={104} boyut={34} isaret="nokta" genislik={680} ogeler={[
        { bas: tSoru[0], metin: "OIL ALONE?", renk: RENK.altin, bitis: bit1 },
        { bas: tSoru[1], metin: "EXTRA VIRGIN VS REFINED?", renk: RENK.altin, bitis: bit1 },
        { bas: tSoru[2], metin: "BEST DAILY AMOUNT?", renk: RENK.altin, bitis: bit1 },
      ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1190, top: 520, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
          <Hap metin="OBSERVATIONAL STUDIES" renk={RENK.mercan} boyut={34} />
        </div>
      )}
      <Not t={t} bas={tGoz + 0.6} metin="Could not separate olive oil types" x={1190} y={620} boyut={36} genislik={640} />
    </>
  );
};

export default S47;
