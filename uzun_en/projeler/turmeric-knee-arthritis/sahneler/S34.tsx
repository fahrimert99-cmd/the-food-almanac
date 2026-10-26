// Sahne 34 — Karabiber (piperin): kürkümin düzeyini artırmanın bir yolu.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 40, 1920], [40, 70, 1800]);
  const tBas = K(1, "piperine");
  const pPan = eout(ilerle(t, tBas - 0.3, 0.8));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={pencere}>
        <Etiket t={t} bas={K(0, "Makers")} capa={[840, 440]} konum={[900, 250]} metin="TURMERIC" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "black pepper")} capa={[740, 730]} konum={[1080, 860]} metin="PEPPERCORNS" renk={RENK.lacivert} />
      </Kamera>
      <Panel a={pPan} taraf="sag" genislik={700} />
      <BaslikBlok t={t} bas={tBas} satirlar={["ADD", "BLACK PEPPER"]} x={1120} y={180} boyut={92}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "a compound")} metin="piperine: a compound from black pepper" x={1120} y={400} boyut={30} genislik={660} />
      <KaynakEtiketi t={t} metin="NCCIH · NIH · Turmeric" bas={K(2, "National Center")} y={40} />
      <Liste t={t} x={1120} y={560} boyut={34} genislik={720} isaret="onay" ogeler={[
        { bas: K(2, "raise curcumin"), metin: "ONE WAY TO RAISE CURCUMIN", renk: RENK.yesil },
      ]} />
    </>
  );
};

export default S34;
