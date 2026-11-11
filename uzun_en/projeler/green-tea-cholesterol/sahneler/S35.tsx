// Sahne 35 — Minnesota denemesi: ALT yükselmesi %6.7 (ekstre) vs %0.7 (plasebo)
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEkstre = K(0, "extract"), tKaraciger = K(0, "liver enzyme"), tBaslik = K(0, "raised"), t67 = K(0, "6.7"), t07 = K(1, "0.7");
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740])}>
        <Etiket t={t} bas={tEkstre} bitis={tKaraciger - 0.2} capa={[967, 800]} konum={[1230, 880]} metin="EXTRACT CAPSULES" renk={RENK.mercan} />
        <Etiket t={t} bas={tKaraciger} capa={[760, 470]} konum={[1130, 440]} metin="LIVER" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, t67 - 0.3, 0.6))} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={tBaslik} satirlar={["RAISED", "LIVER ENZYME"]} x={1860} y={210} boyut={92} hiza="sag" />
      <VurguRozet t={t} bas={t67} vurgu="6.7%" not="WITH EXTRACT" x={1330} y={560} genislik={340} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t07} vurgu="0.7%" not="WITH PLACEBO" x={1710} y={560} genislik={340} renk={RENK.yesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S35;
