// Sahne 47 — "Another myth": süt, yoğurt, büyüteç; %44 rozeti, ardından yalnızca bebek maması.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "In fact") - 0.1;
  const pPanel = eout(ilerle(t, tSon + 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(2, "date labels")} capa={[840, 490]} konum={[300, 520]} metin="DATE LABEL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={K(0, "myth")} bitis={tSon} satirlar={["MYTH:", "GOVERNMENT", "CHECKS LABELS"]} x={70} y={220} boyut={74}
        renkler={[RENK.mercan, RENK.lacivert, RENK.lacivert]} />
      <VurguRozet t={t} bas={K(1, "44")} bitis={tSon} vurgu="44%" not="BELIEVED THE GOVERNMENT CHECKS" x={1640} y={230} genislik={380} renk={RENK.mercan} />
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <BaslikBlok t={t} bas={K(2, "only")} satirlar={["ONLY INFANT", "FORMULA"]} x={1860} y={260} boyut={100} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "date")} metin="DATE LABELS ARE FEDERALLY REGULATED" x={1860} y={440} hiza="sag" genislik={520} boyut={36} agirlik={800} />
    </>
  );
};

export default S47;
