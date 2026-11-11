// Sahne 10 — dikkat çeken sonuç, sonra 2025 "expression of concern" notu.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDikkat = K(0, "attention"), t2025 = K(1, "2025"), tCaution = K(1, "caution");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [150, 90, 1600])}>
        <Etiket t={t} bas={tDikkat - 0.2} bitis={t2025 - 0.2} capa={[760, 660]} konum={[330, 260]} metin="2003 TRIAL" renk={RENK.altin} />
        <Etiket t={t} bas={tCaution - 0.3} capa={[1010, 440]} konum={[1500, 790]} metin="TREAT WITH CAUTION" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={t2025} vurgu="2025" not="EDITORIAL EXPRESSION OF CONCERN" x={1560} y={130} genislik={440} renk={RENK.mercan} />
    </>
  );
};

export default S10;
