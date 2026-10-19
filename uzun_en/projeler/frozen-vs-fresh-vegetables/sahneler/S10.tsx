// Sahne 10 — Rickman incelemesi: iki aşamada kayıp.
import React from "react";
import { BaslikBlok, Ikon, KaynakEtiketi, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPanel = K(0, "frozen") - 0.3;
  const pPanel = eout(ilerle(t, tPanel, 0.7));
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <Panel a={pPanel} taraf="sag" genislik={860} />
      <BaslikBlok t={t} bas={K(0, "frozen") + 0.2} satirlar={["FROZEN:", "TWO STAGES"]} x={1860} y={280} boyut={88} hiza="sag" />
      <Liste t={t} x={1130} y={500} aralik={118} boyut={34} genislik={740} ogeler={[
        { bas: K(0, "blanching"), metin: "BLANCHING: SOME LOSS", renk: RENK.altin },
        { bas: K(0, "slowly"), metin: "MONTHS FROZEN: SLOWER LOSS", renk: RENK.lacivert },
      ]} />
      <Ikon t={t} bas={K(1, "slip")} ad="saat" x={1190} y={830} boyut={84} zemin={RENK.altin} />
      <Not t={t} bas={K(1, "slip") + 0.1} metin="WHERE FROZEN SLIPS: LATER" x={1260} y={800} boyut={34} genislik={600} agirlik={800} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S10;
