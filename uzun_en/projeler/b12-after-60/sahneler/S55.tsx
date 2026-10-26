// Sahne 55 — belirtiler veya ilaçlar varsa doktora basit kan testini sor.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aP = eout(ilerle(t, 0.15, 0.7));
  const aC = eout(ilerle(t, K(0, "ask") - 0.1, 0.5));
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [40, 22, 1840], [110, 58, 1700])}>
        <Etiket t={t} bas={K(0, "blood")} capa={[1330, 500]} konum={[1560, 330]} metin="SIMPLE BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
      <Panel a={aP} taraf="sol" genislik={820} />
      <Liste t={t} x={70} y={190} aralik={110} boyut={42} isaret="nokta" genislik={640} ogeler={[
        { bas: K(0, "medicines"), metin: "THESE MEDICINES", renk: RENK.altin },
        { bas: K(0, "tingling"), metin: "TINGLING", renk: RENK.altin },
        { bas: K(0, "balance"), metin: "BALANCE TROUBLE", renk: RENK.altin },
        { bas: K(0, "memory"), metin: "MEMORY SLIPS", renk: RENK.altin },
      ]} />
      <Not t={t} bas={K(0, "won't")} metin="THAT WON'T GO AWAY" x={70} y={660} boyut={40} agirlik={800} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 1190, top: 120, width: 680, height: 130, opacity: aC, background: "rgba(251,248,241,0.94)",
        borderRadius: 24, boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }} />
      <Baslik t={t} bas={K(0, "ask")} metin="ASK YOUR DOCTOR" x={1840} y={185} boyut={92} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S55;
