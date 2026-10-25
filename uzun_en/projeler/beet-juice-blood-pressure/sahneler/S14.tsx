// Sahne 14 — Bahadoran 2017: 22 deney birleştirildi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tThey = K(1, "they");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])} />
      <Panel a={eout(ilerle(t, 0, 0.6))} taraf="sag" genislik={900} opak={0.85} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "zahra")} />
      <BaslikBlok t={t} bas={K(0, "22")} satirlar={["22 TRIALS", "POOLED"]} x={1040} y={200} boyut={100} adim={0.4}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={K(0, "pooled")} capa={[360, 700]} konum={[400, 900]} metin="STUDY STACK" renk={RENK.altin} />
      <Not t={t} bas={K(0, "650")} bitis={tThey} metin="ABOUT 650 PEOPLE IN THE BEET JUICE GROUPS" x={1040} y={420} boyut={34} genislik={760}
        agirlik={800} />
      <VurguRozet t={t} bas={K(1, "three")} vurgu="–3.55" not="systolic points" x={1290} y={540} genislik={340} boyut={100} />
      <VurguRozet t={t} bas={K(1, "one")} vurgu="–1.3" not="diastolic points" x={1670} y={540} genislik={340} boyut={100} renk={RENK.koyuYesil} />
    </>
  );
};

export default S14;
