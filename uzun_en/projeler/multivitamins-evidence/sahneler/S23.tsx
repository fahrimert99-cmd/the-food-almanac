// Sahne 23 — küçük ama gerçek mi? Tepedeki küçük basamak ve yürüyen kişi.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1780])}>
        {/* tepedeki küçük basamak */}
        <Etiket t={t} bas={K(0, "small")} bitis={K(1, "history") - 0.2} capa={[467, 410]} konum={[760, 250]} metin="SMALL AVERAGE GAIN" renk={RENK.altin} />
        {/* yürüyen kişi: kalp hastalığı öyküsü */}
        <Etiket t={t} bas={K(1, "history")} capa={[520, 790]} konum={[900, 930]} metin="HEART DISEASE HISTORY" renk={RENK.mercan} />
        {/* yola doğru ölçüsüz tahmin */}
        <Etiket t={t} bas={K(1, "imprecise")} capa={[930, 595]} konum={[1500, 760]} metin="IMPRECISE ESTIMATE" renk={RENK.gri} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "small")} satirlar={["SMALL BUT", "REAL?"]} x={1860} y={260} boyut={92} hiza="sag" />
      <Not t={t} bas={K(1, "larger")} metin="Larger benefit in people with a history of heart disease" x={1860} y={500}
        hiza="sag" genislik={520} boyut={32} />
    </>
  );
};

export default S23;
