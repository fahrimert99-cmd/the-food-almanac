// Sahne 34 — Mamerow 2014: solda çalışma künyesi paneli, sağda iki "diyet" kapağı.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [80, 90, 1760])}>
        <Etiket t={t} bas={K(0, "two versions")} capa={[960, 610]} konum={[960, 880]} metin="VERSION 1" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "two versions") + 0.35} capa={[1470, 650]} konum={[1500, 880]} metin="VERSION 2" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.7} yukseklik={130} />
      <Panel a={pPanel} taraf="sol" genislik={760} opak={0.96} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "2014")} metin="2014 CROSSOVER" x={70} y={190} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "university")} metin="University of Texas Medical Branch" x={74} y={262} boyut={30} agirlik={700} genislik={620} />
      <VurguRozet t={t} bas={K(0, "eight")} vurgu="8" not="HEALTHY ADULTS" x={220} y={350} genislik={300} boyut={96} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "37,")} vurgu="37" not="AVERAGE AGE" x={560} y={350} genislik={300} boyut={96} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "90")} vurgu="≈ 90 G" not="PROTEIN A DAY, BOTH DIETS" x={390} y={600} genislik={560} boyut={96} renk={RENK.mercan} />
    </>
  );
};

export default S34;
