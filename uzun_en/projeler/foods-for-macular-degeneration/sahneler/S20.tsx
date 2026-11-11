// Sahne 20 — tam formül: –28%
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFull = K(0, "full combination"), tRisk = K(1, "higher risk");
  const pPanel = eout(ilerle(t, 0.3, 0.7));
  const [sc, al] = pop(t, tRisk, 0.5);
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 90, 1760], [60, 140, 1600])} />
      <Panel a={pPanel} taraf="sag" genislik={600} />
      <BaslikBlok t={t} bas={tFull} satirlar={["FULL FORMULA"]} x={1860} y={250} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "28")} vurgu="–28%" not="odds of advanced disease" x={1580} y={340} genislik={460} />
      <Etiket t={t} bas={tFull + 0.2} bitis={tRisk - 0.2} capa={[1245, 800]} konum={[1560, 780]} metin="FULL COMBINATION" renk={RENK.yesil} />
      <div style={{ position: "absolute", right: 60, top: 770, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="HIGHER RISK: CLEAREST BENEFIT" renk={RENK.altin} />
      </div>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
    </>
  );
};

export default S20;
