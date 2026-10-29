// Sahne 12 — Guasch-Ferré 2018 meta-analizi: 26 çalışma, 1.059 kişi, ceviz vs karşılaştırma diyeti.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={K(0, "walnuts")} capa={[493, 690]} konum={[470, 500]} metin="WALNUT DIETS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "2018")} metin="2018" x={80} y={230} boyut={130} renk={RENK.lacivert} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(0, "Guasch-Ferré")} />}
      <VurguRozet t={t} bas={K(0, "26")} vurgu="26" not="controlled trials" x={1720} y={200} genislik={300} />
      <VurguRozet t={t} bas={K(0, "1,059")} vurgu="1,059" not="people in total" x={1720} y={470} genislik={300} />
    </>
  );
};

export default S12;
