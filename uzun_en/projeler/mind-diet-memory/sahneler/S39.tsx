// Sahne 39 — US POINTER: parkta yürüyen yaşlı grup; sol panelde başlık, rozet ve kaynak.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pPanel = eout(ilerle(t, 0.1, 0.8));
  const cik = c[1].bas + 0.2;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [190, 110, 1620])}>
        <Etiket t={t} bas={K(1, "adults")} capa={[1070, 560]} konum={[1560, 330]} metin="OLDER ADULTS" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={880} opak={0.94} />
      {/* 1. cümle: başlık */}
      <Baslik t={t} bas={K(0, "bigger")} bitis={cik} metin="A BIGGER" x={70} y={290} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "lifestyle")} bitis={cik} metin="LIFESTYLE TRIAL" x={70} y={400} boyut={96} renk={RENK.koyuYesil} />
      {/* 2. cümle: ad, sayı rozeti, risk notu */}
      <Baslik t={t} bas={K(1, "POINTER")} metin="US POINTER" x={70} y={250} boyut={110} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "2,111")} vurgu="2,111" not="adults aged 60 to 79" x={290} y={340} genislik={420} />
      <Not t={t} bas={K(1, "at risk")} metin="at risk of cognitive decline" x={70} y={600} boyut={34} genislik={700} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "2025")} />
    </>
  );
};

export default S39;
