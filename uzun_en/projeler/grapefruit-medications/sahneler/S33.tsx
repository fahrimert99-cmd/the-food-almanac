// Sahne 33 — enzimin geri gelmesi zaman alır: 4 saatte başlar, 24 saate kadar sürer.
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Liste, RENK, SP, INTER, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "reduction");
  const tUp = K(1, "up to");
  const [sc, al] = pop(t, K(1, "within"), 0.5);
  const a = al * sol(t, tUp - 0.2);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <Liste t={t} x={760} y={290} isaret="nokta" boyut={42} aralik={86} genislik={760} ogeler={[
        { bas: K(0, "lining"), metin: "LINING CELLS", renk: RENK.altin, bitis: tBas - 0.2 },
        { bas: K(0, "new enzyme"), metin: "MAKE NEW ENZYME", renk: RENK.altin, bitis: tBas - 0.2 },
        { bas: K(0, "takes"), metin: "THAT TAKES TIME", renk: RENK.mercan, bitis: tBas - 0.2 },
      ]} />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1030, top: 330, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
          whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "12px 34px",
          fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1.5, color: RENK.lacivert,
          boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>BEGINS WITHIN ABOUT 4 HOURS</div>
      )}
      <BaslikBlok t={t} bas={tUp} satirlar={["UP TO", "24 HOURS"]} x={1030} y={480} boyut={130} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} adim={0.4} />
      <KaynakEtiketi t={t} metin="Maskalyk · CMAJ · 2002" bas={K(1, "according")} />
    </>
  );
};

export default S33;
