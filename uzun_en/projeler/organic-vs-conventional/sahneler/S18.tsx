// Sahne 18 — Stanford: tespit edilebilir kalıntı riski ~%30 düşük.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrg = K(0, "organic");
  const tDet = K(0, "detectable");
  const t30 = K(0, "30 percent");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 60, 1780])}>
        {/* sepetteki organik çilekler */}
        <Etiket t={t} bas={tOrg} bitis={tDet - 0.2} capa={[850, 440]} konum={[1380, 400]} metin="ORGANIC PRODUCE" renk={RENK.yesil} />
        {/* büyüteçteki çilek: kalıntı */}
        <Etiket t={t} bas={tDet} capa={[560, 330]} konum={[1380, 560]} metin="DETECTABLE RESIDUE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={tDet} satirlar={["DETECTABLE", "RESIDUE"]} x={1130} y={200} boyut={100} />
      <VurguRozet t={t} bas={t30 - 0.1} vurgu="–30%" not="LOWER RISK WITH ORGANIC PRODUCE" x={1480} y={710} genislik={560} boyut={120} renk={RENK.yesil} />
    </AbsoluteFill>
  );
};

export default S18;
