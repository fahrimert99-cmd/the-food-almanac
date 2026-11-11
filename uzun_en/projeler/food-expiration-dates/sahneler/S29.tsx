// Sahne 29 — Genel olarak nadir: solda panel, oran rozeti; sağda köy.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [90, 40, 1780], [150, 60, 1680])}>
        <Etiket t={t} bas={K(2, "few groups")} capa={[1500, 640]} konum={[1450, 880]} metin="A FEW GROUPS" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={900} opak={0.96} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={K(0, "Overall")} satirlar={["OVERALL,", "UNCOMMON"]} x={70} y={250} boyut={100} adim={0.7} />
      <VurguRozet t={t} bas={K(1, "0.25")} vurgu="0.25–0.32" not="cases per 100,000 people a year" x={400} y={520} genislik={600} boyut={96} />
    </>
  );
};
export default S29;
