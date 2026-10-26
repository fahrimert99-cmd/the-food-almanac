// Sahne 40 — hafıza, kafa karışıklığı, depresyon; anemi olmadan da sinir hasarı.
import React from "react";
import { BaslikBlok, Hap, INTER, Kamera, Liste, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMind = K(0, "the mind");
  const tPoor = K(1, "poor memory");
  const tConf = K(1, "confusion");
  const tDep = K(1, "depression");
  const tAnemia = K(2, "without anemia");
  const tEarly = K(2, "early treatment");
  const [sc, al] = pop(t, tEarly, 0.5);
  const pK = eout(ilerle(t, tAnemia, 0.5));
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      {/* başlık ve liste, boş duvar alanında */}
      <BaslikBlok t={t} bas={tMind} satirlar={["MEMORY", "SLIPS"]} x={700} y={210} boyut={130} />
      <Liste t={t} x={700} y={470} aralik={84} boyut={36} isaret="nokta" genislik={760} ogeler={[
        { bas: tPoor, metin: "POOR MEMORY", renk: RENK.koyuYesil, bitis: tAnemia - 0.2 },
        { bas: tConf, metin: "CONFUSION", renk: RENK.altin, bitis: tAnemia - 0.2 },
        { bas: tDep, metin: "DEPRESSION", renk: RENK.lacivert, bitis: tAnemia - 0.2 },
      ]} />
      {/* anemi olmadan da sinir hasarı */}
      <div style={{ position: "absolute", left: 700, top: 470, opacity: pK, transform: `translateY(${(1 - pK) * 14}px)` }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.gri }}>NERVE DAMAGE CAN HAPPEN</div>
        <div style={{ marginTop: 10 }}><Hap metin="EVEN WITHOUT ANEMIA" renk={RENK.mercan} boyut={38} /></div>
      </div>
      <div style={{ position: "absolute", left: 700, top: 650, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 18 }}>
        <Hap metin="NIH: EARLY TREATMENT MATTERS" renk={RENK.yesil} boyut={36} />
      </div>
    </>
  );
};

export default S40;
