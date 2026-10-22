// Sahne 40 — FDA: günde 400 mg, yaklaşık 2–3 fincan demleme kahve.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFiliz = K(0, "400");
  const tFincan = K(0, "two to three");
  const tNot = K(1, "not generally");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1800])}>
        <Etiket t={t} bas={K(0, "12-ounce")} bitis={c[1].bas} capa={[905, 560]} konum={[1290, 530]} metin="12-OUNCE BREWED CUPS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={tFiliz - 0.1} satirlar={["400 MG", "A DAY"]} x={1040} y={210} boyut={160} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tFincan} bitis={c[1].bas} vurgu="≈ 2–3 CUPS" not="12-ounce brewed coffee" x={1450} y={650} genislik={520} boyut={96} />
      <Ikon t={t} bas={tNot} ad="onay" x={1085} y={850} boyut={80} />
      <Not t={t} bas={tNot + 0.1} metin="NOT GENERALLY ASSOCIATED WITH NEGATIVE EFFECTS" x={1150} y={806} genislik={700} boyut={36} agirlik={800} />
    </>
  );
};

export default S40;
