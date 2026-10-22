// Sahne 21 — Queenan 2007 (Minnesota): 75 yetişkin, 6 g/gün beta-glukan ya da dekstroz plasebo, 6 hafta.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMn = K(0, "Minnesota"), t75 = K(1, "Seventy-five"), tSix = K(1, "six"), tPla = K(1, "placebo"), tWk = K(1, "weeks");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        <Etiket t={t} bas={tSix} capa={[740, 640]} konum={[300, 520]} metin="6 G · OAT BETA-GLUCAN" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tPla} capa={[1190, 640]} konum={[1650, 520]} metin="PLACEBO · DEXTROSE" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tMn} metin="UNIVERSITY OF MINNESOTA" x={960} y={165} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={t75} vurgu="75" not="ADULTS WITH HIGH CHOLESTEROL" x={270} y={230} genislik={340} />
      <VurguRozet t={t} bas={tWk} vurgu="6 WEEKS" x={1650} y={250} genislik={340} boyut={72} />
    </>
  );
};

export default S21;
