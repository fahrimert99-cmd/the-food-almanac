// Sahne 55 — pratik özet: üç alışkanlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pLevha = eout(ilerle(t, 0, 0.12));
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 60, 1700], [20, 70, 1640])} />
      {/* sağ panel ve sol levha: görseldeki sahte yazılı kâğıtları örter */}
      <Panel a={eout(ilerle(t, 0, 0.3))} taraf="sag" genislik={760} opak={1} />
      <div style={{ position: "absolute", left: 50, top: 120, width: 960, height: 310, opacity: pLevha, background: RENK.kagit,
        borderRadius: 28, boxShadow: "0 12px 30px rgba(48,40,34,0.25)" }} />
      <Liste t={t} x={90} y={150} aralik={96} boyut={36} isaret="sayi" genislik={880} ogeler={[
        { bas: K(0, "Check"), metin: "CHECK YOUR NUMBERS" },
        { bas: K(0, "ask"), metin: "ASK ABOUT BLOOD THINNERS", renk: RENK.mercan },
        { bas: K(0, "let"), metin: "LET CRUSHED GARLIC REST", renk: RENK.altin },
      ]} />
      <BaslikBlok t={t} bas={K(1, "Small")} satirlar={["SMALL HABITS,", "KEPT HONEST"]} x={1860} y={260} boyut={84} hiza="sag" />
      <Etiket t={t} bas={K(0, "crushed")} bitis={K(1, "Small") - 0.1} capa={[780, 640]} konum={[560, 800]} metin="CRUSHED GARLIC" renk={RENK.yesil} />
    </>
  );
};

export default S55;
