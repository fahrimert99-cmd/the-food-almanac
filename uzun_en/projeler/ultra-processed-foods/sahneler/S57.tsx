// Sahne 57 — "ultra-işlenmiş" geniş bir etiket: sağ panelde karşılaştırma listesi.
import React from "react";
import { Baslik, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRead = K(2, "Reading");
  const bit = tRead - 0.15;
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [-60, 40, 1700], [0, 30, 1560])}>
        <div style={{ position: "absolute", left: 850, top: 700, width: 150, height: 40,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #86898a 0%, #86898a 60%, rgba(134,137,138,0) 100%)" }} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={760} />
      <Baslik t={t} bas={K(0, "label")} bitis={bit} metin="THE LABEL" x={1840} y={150} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "broad")} bitis={bit} metin="IS BROAD" x={1840} y={240} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <Liste t={t} x={1400} y={340} aralik={78} boyut={32} genislik={480} isaret="carpi"
        ogeler={[
          { bas: K(1, "Sweet"), metin: "SWEET DRINKS", renk: RENK.mercan, bitis: bit },
          { bas: K(1, "packaged"), metin: "PACKAGED MIXED MEALS", renk: RENK.mercan, bitis: bit },
        ]} />
      <Liste t={t} x={1400} y={520} aralik={78} boyut={32} genislik={480} isaret="onay"
        ogeler={[
          { bas: K(1, "whole"), metin: "WHOLE GRAIN BREAD", renk: RENK.yesil, bitis: bit },
          { bas: K(1, "yogurt"), metin: "YOGURT", renk: RENK.yesil, bitis: bit },
        ]} />
      <Not t={t} bas={K(1, "one")} bitis={bit} metin="IN ONE STUDY" x={1400} y={700} boyut={26} agirlik={800} renk={RENK.gri} genislik={480} />
      <Baslik t={t} bas={tRead} metin="READ THE" x={1840} y={190} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tRead + 0.18} metin="PACKAGE" x={1840} y={280} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(2, "tell")} metin="TELL THEM APART" x={1840} y={360} boyut={36} agirlik={800} hiza="sag" genislik={560} />
    </>
  );
};

export default S57;
