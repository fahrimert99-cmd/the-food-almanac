// Sahne 40 — karaciğer: DILIN'in 10 vakalık serisi.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b = s.meta.baslik;
  const bit1 = c[2].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 20, 1810])}>
        <Etiket t={t} bas={K(1, "supplements")} bitis={bit1} capa={[1555, 800]} konum={[1500, 915]} metin="TURMERIC SUPPLEMENT" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={c[1].bas} />
      <Baslik t={t} bas={K(0, "liver")} bitis={K(1, "ten") - 0.1} metin={b?.satirlar[0] ?? ""} x={1860} y={190} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "ten")} bitis={bit1} vurgu={b?.vurgu ?? "10"} not={b?.not} x={1640} y={110} genislik={440} />
      <VurguRozet t={t} bas={K(2, "Five")} vurgu="5" not="HOSPITALIZED" x={1475} y={110} genislik={250} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(2, "one died")} vurgu="1" not="DIED" x={1750} y={110} genislik={250} renk={RENK.lacivert} />
    </>
  );
};

export default S40;
