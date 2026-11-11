// Sahne 37 — "Yakalanan nokta": sol panelde sınırlılıklar listesi, sağda tabak.
import React from "react";
import { AltSis, Baslik, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [80, 60, 1840], [180, 90, 1700])} />
      <AltSis a={0.7} yukseklik={130} />
      <Panel a={pPanel} taraf="sol" genislik={940} opak={0.97} />
      <Baslik t={t} bas={K(0, "catch")} metin="THE CATCH" x={70} y={170} boyut={104} renk={RENK.mercan} />
      <Liste t={t} isaret="carpi" x={70} y={280} aralik={92} boyut={36} genislik={800}
        ogeler={[
          { bas: K(0, "only"), metin: "ONLY 8 PEOPLE", renk: RENK.mercan },
          { bas: K(0, "younger"), metin: "YOUNGER THAN OUR AUDIENCE", renk: RENK.mercan },
          { bas: K(0, "24-hour"), metin: "A 24-HOUR MEASURE", renk: RENK.mercan },
        ]} />
      <Not t={t} bas={K(0, "not")} metin="Not months of real muscle" x={74} y={575} boyut={34} agirlik={700} renk={RENK.gri} genislik={700} />
      <Baslik t={t} bas={K(1, "useful")} metin="A CLUE, NOT PROOF" x={70} y={730} boyut={88} renk={RENK.koyuYesil} />
    </>
  );
};

export default S37;
