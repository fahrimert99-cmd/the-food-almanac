// Sahne 54 — sınırlar: küçük kazanım, sınırlı katılımcı, yetersiz kanıt.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";


const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.2;
  const pSol = eout(ilerle(t, 0.1, 0.6)) * (1 - eout(ilerle(t, bit, 0.4)));
  const pSag = eout(ilerle(t, c[1].bas - 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* alttaki sahte imza kalıntıları örtülür */}
        <div style={{ position: "absolute", left: 0, top: 985, width: 1920, height: 95, background: kagit(1) }} />
      </Kamera>
      <Panel a={pSol} taraf="sol" genislik={860} opak={0.97} />
      <Panel a={pSag} taraf="sag" genislik={900} opak={0.97} />
      <Liste t={t} x={70} y={290} aralik={170} boyut={34} isaret="nokta" genislik={700} ogeler={[
        { bas: K(0, "small"), metin: "SMALL MEMORY GAINS", renk: RENK.altin, bitis: bit },
        { bas: K(0, "mostly"), metin: "MOSTLY NON-HISPANIC WHITE ADULTS", renk: RENK.altin, bitis: bit },
        { bas: K(0, "older men's"), metin: "OLDER MEN'S TRIAL: NONE FOUND", renk: RENK.mercan, bitis: bit },
      ]} />
      <Not t={t} bas={K(1, "Experts")} metin="EXPERTS SAY" x={1850} y={330} boyut={34} hiza="sag" agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "evidence")} satirlar={["EVIDENCE", "STILL", "INSUFFICIENT"]} x={1850} y={440} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S54;
