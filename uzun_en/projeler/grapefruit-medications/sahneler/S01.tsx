// Sahne 1 — greyfurt + hap: açılış, 284% rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tBas = K(0, "pill,") + 0.2;
  const pPanel = eout(ilerle(t, 0.1, 0.8)) * sol(t, 1e9);
  const bit1 = K(1, "In") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [70, 80, 1740])}>
        <Etiket t={t} bas={K(0, "daily")} bitis={bit1} capa={[960, 820]} konum={[560, 880]} metin="DAILY PILL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "grapefruit")} bitis={bit1} capa={[1560, 640]} konum={[1690, 400]} metin="GRAPEFRUIT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "juice")} capa={[1290, 520]} konum={[930, 380]} metin="GRAPEFRUIT JUICE" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={760} opak={0.92} />
      <BaslikBlok t={t} bas={tBas} satirlar={b.satirlar} x={70} y={250} boyut={104} />
      <VurguRozet t={t} bas={K(1, "nearly")} vurgu={b.vurgu!} not={b.not} x={330} y={470} genislik={500} boyut={124} />
      <KaynakEtiketi t={t} bas={3.6} metin={s.meta.etiket!} />
    </>
  );
};

export default S01;
