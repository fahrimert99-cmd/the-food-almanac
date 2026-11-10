// Sahne 26 — Yüksek risk grupları: sağda panel, dört madde.
import React from "react";
import { BaslikBlok, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHigh = K(0, "higher risk"), tPreg = K(0, "pregnant"), tNew = K(0, "newborns"), tAdl = K(0, "adults 65"), tImm = K(0, "weakened");
  const tOther = K(1, "Other people");
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])} />
      <Panel a={pPanel} taraf="sag" genislik={940} opak={0.97} />
      <KaynakEtiketi t={t} metin="CDC · Listeria risk factors" />
      <BaslikBlok t={t} bas={tHigh} satirlar={["HIGHER", "RISK"]} x={1200} y={230} boyut={96} bitis={tOther - 0.2} />
      <Liste t={t} isaret="nokta" x={1200} y={470} aralik={96} boyut={34} genislik={660}
        ogeler={[
          { bas: tPreg, metin: "PREGNANT WOMEN", renk: RENK.mercan, bitis: tOther - 0.2 },
          { bas: tNew, metin: "NEWBORNS", renk: RENK.mercan, bitis: tOther - 0.2 },
          { bas: tAdl, metin: "ADULTS 65 AND OLDER", renk: RENK.mercan, bitis: tOther - 0.2 },
          { bas: tImm, metin: "WEAKENED IMMUNE SYSTEMS", renk: RENK.mercan, bitis: tOther - 0.2 },
        ]} />
      <BaslikBlok t={t} bas={tOther} satirlar={["OTHERS:", "USUALLY NOT", "SERIOUSLY ILL"]} x={1200} y={300} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "usually")} metin="They can still get infected." x={1200} y={680} boyut={32} genislik={640} />
    </>
  );
};
export default S26;
