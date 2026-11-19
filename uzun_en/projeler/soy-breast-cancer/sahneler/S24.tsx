// Sahne 24 — hiç meme kanseri geçirmemiş kadınlar: soru sahnesi. Sol panelde başlık, görselde tofu ve soya sütü.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWomen = K(0, "women"), tNever = K(0, "never had");
  const tSoy = K(1, "soy"), tChance = K(1, "chance");
  const pencere = kameraYolu(t, s.sure, [200, 80, 1560], [330, 130, 1440]);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={pencere}>
        <Etiket t={t} bas={tSoy + 0.1} capa={[870, 600]} konum={[860, 770]} metin="TOFU" renk={RENK.altin} />
        <Etiket t={t} bas={tSoy + 0.4} capa={[1280, 420]} konum={[1130, 200]} metin="SOY MILK" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.8} />
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sol" genislik={760} opak={0.96} />
      <BaslikBlok t={t} bas={tNever - 0.4} satirlar={["WOMEN WHO", "NEVER HAD", "BREAST CANCER?"]} x={70} y={250} boyut={84}
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} bitis={tSoy - 0.1} />
      <Baslik t={t} bas={tSoy} metin="DOES SOY" x={70} y={300} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tChance} metin="CHANGE THE CHANCE?" x={70} y={420} boyut={64} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "developing")} metin="of developing it in the first place" x={74} y={520} boyut={32} genislik={620} />
    </>
  );
};

export default S24;
