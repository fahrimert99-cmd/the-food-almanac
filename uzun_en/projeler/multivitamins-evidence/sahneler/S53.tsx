// Sahne 53 — özet: kalp, kanser/katarakt, hafıza.
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";


const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(1, "male doctors"), 0.5);
  const [s2, a2] = pop(t, K(1, "COSMOS"), 0.5);
  const pill = (txt: string, y: number, sc: number, al: number, renk: string) => (
    <div style={{ position: "absolute", left: 1690, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={txt} renk={renk} boyut={28} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* kalp-göz çizimi kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1170, top: 250, width: 380, height: 400,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={720} opak={0.97} />
      <Liste t={t} x={60} y={230} boyut={34} isaret="carpi" genislik={620} ogeler={[{ bas: K(0, "did not"), metin: "NO HEART EVENT PREVENTION", renk: RENK.mercan }]} />
      <Liste t={t} x={60} y={440} boyut={34} isaret="nokta" genislik={620} ogeler={[{ bas: K(1, "modestly"), metin: "MODEST EFFECT: CANCER, CATARACTS", renk: RENK.altin }]} />
      <Liste t={t} x={60} y={650} boyut={34} isaret="onay" genislik={620} ogeler={[{ bas: K(1, "slightly"), metin: "SLIGHTLY BETTER MEMORY SCORES", renk: RENK.yesil }]} />
      {pill("IN MALE DOCTORS", 500, s1, a1, RENK.altin)}
      {pill("IN COSMOS", 700, s2, a2, RENK.yesil)}
    </>
  );
};

export default S53;
