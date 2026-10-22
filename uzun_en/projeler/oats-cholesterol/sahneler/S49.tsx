// Sahne 49 — sonraki testte LDL sayısına bak. Pano üzerindeki boş sayfaya LDL rozeti.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        <Etiket t={t} bas={K(1, "oat studies") - 0.1} capa={[1087, 280]} konum={[1330, 110]} metin="OAT STUDIES" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "next cholesterol")} metin="NEXT CHOLESTEROL TEST" x={120} y={120} boyut={76} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "LDL")} vurgu="LDL" not="the number the oat studies moved" x={720} y={470} genislik={560} boyut={150} />
    </>
  );
};

export default S49;
