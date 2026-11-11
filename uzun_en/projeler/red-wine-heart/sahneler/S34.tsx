// Sahne 34 — AHA 2025 bilimsel bildirisi.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(1, "if you");
  const kapat = tBas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "scientific")} bitis={kapat} capa={[780, 740]} konum={[1300, 430]} metin="SCIENTIFIC STATEMENT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "heart disease")} bitis={kapat} capa={[680, 690]} konum={[1300, 560]} metin="HEART DISEASE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(0, "2025")} bitis={kapat} vurgu="2025" not="AHA STATEMENT" x={1460} y={130} genislik={400} />
      <BaslikBlok t={t} bas={tBas - 0.05} satirlar={s.meta.baslik!.satirlar} x={1860} y={220} boyut={110} hiza="sag" adim={0.8}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(2, "does")} metin="THE AHA DOES NOT RECOMMEND:" x={1100} y={450} boyut={30} agirlik={800} renk={RENK.gri} />
      <Liste t={t} x={1100} y={510} aralik={84} boyut={38} isaret="carpi" genislik={700}
        ogeler={[{ bas: K(2, "wine"), metin: "WINE", renk: RENK.mercan }, { bas: K(2, "any"), metin: "ANY ALCOHOL", renk: RENK.mercan }]} />
      <Not t={t} bas={K(2, "health")} metin="FOR HEALTH BENEFITS" x={1100} y={700} boyut={36} agirlik={800} />
    </>
  );
};

export default S34;
