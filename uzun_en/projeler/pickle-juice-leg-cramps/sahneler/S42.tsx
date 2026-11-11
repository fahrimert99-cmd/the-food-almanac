// Sahne 42 — germe çalışması sonucu: daha az ve daha hafif kramp.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBaslik = K(0, "fewer");
  const tGrup = K(0, "stretching");
  const tYok = K(0, "did nothing");
  const tDergi = K(1, "Journal");
  void ilerle;
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1720])}>
        <Etiket t={t} bas={tGrup} bitis={tYok - 0.2} capa={[430, 850]} konum={[330, 640]} metin="STRETCHING GROUP" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tBaslik} satirlar={["FEWER AND", "MILDER CRAMPS"]} x={80} y={190} boyut={92} />
      <Not t={t} bas={tYok} metin="vs. the group that did nothing" x={84} y={380} boyut={34} genislik={640} />
      <KaynakEtiketi t={t} bas={tDergi} metin="Hallegraeff et al. · J Physiother · 2012" />
    </>
  );
};

export default S42;
