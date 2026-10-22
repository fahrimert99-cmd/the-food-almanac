// Sahne 11 — FDA 1997 sağlık beyanı: günde en az 3 g oat beta-glucan.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(1, "1997");
  const tOnay = K(1, "approved");
  const tG = K(1, "three");
  const tRisk = K(1, "lower risk");
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [30, 80, 1680])}>
        <Etiket t={t} bas={tOnay} capa={[410, 330]} konum={[330, 110]} metin="HEALTH CLAIM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "decades")} bitis={tYil - 0.2} metin="DECADES AGO" x={1860} y={200} boyut={100} renk={RENK.gri} hiza="sag" />
      <Baslik t={t} bas={tYil} metin="FDA · 1997" x={1860} y={200} boyut={116} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={tG} vurgu="3 g" not={s.meta.baslik!.not} x={1540} y={330} genislik={440} />
      <Not t={t} bas={tRisk} metin="LOWER RISK OF HEART DISEASE" x={1860} y={720} boyut={36} hiza="sag" agirlik={800} genislik={520} />
    </>
  );
};

export default S11;
