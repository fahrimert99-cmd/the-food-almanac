// Sahne 43 — Cochrane: 3 germe çalışması, 201 kişi; şiddeti azaltabilir.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tUc = K(0, "three");
  const t201 = K(0, "201");
  const tDaily = K(1, "Daily");
  const tAlti = K(1, "six weeks");
  const tMay = K(1, "may");
  const tSik = K(1, "how often");
  const pPanel = eout(ilerle(t, tMay - 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 30, 1800])}>
        <Etiket t={t} bas={tUc} bitis={tDaily - 0.1} capa={[420, 330]} konum={[760, 170]} metin="3 STRETCHING TRIALS" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={t201} bitis={tDaily - 0.15} vurgu="201" not="people aged 50 and over" x={1650} y={150} genislik={420} boyut={96} />
      <VurguRozet t={t} bas={tAlti} vurgu="6 WEEKS" not="daily calf + hamstring stretching" x={1000} y={100} genislik={560} boyut={80} bitis={tMay + 4} />
      <Panel a={pPanel} taraf="sag" genislik={500} />
      <BaslikBlok t={t} bas={tMay} satirlar={["MAY EASE", "SEVERITY"]} x={1480} y={300} boyut={84} />
      <Not t={t} bas={tSik} metin="how often they happen is uncertain" x={1480} y={500} boyut={34} genislik={380} />
      <KaynakEtiketi t={t} bas={0.2} metin="Hawke et al. · Cochrane · 2021" />
    </>
  );
};

export default S43;
