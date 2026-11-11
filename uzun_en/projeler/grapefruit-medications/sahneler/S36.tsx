// Sahne 36 — yarım greyfurt ile bir bardak suyun karşılaştırması; evrensel güvenli miktar yok.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS1 = K(1, "But");
  const kapat = tS1 - 0.1;
  const pPanel = eout(ilerle(t, tS1 - 0.1, 0.8));
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        <Etiket t={t} bas={K(0, "half")} bitis={kapat} capa={[1560, 720]} konum={[1620, 250]} metin="HALF A GRAPEFRUIT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "glass")} bitis={kapat} capa={[800, 330]} konum={[330, 200]} metin="A GLASS OF JUICE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "several")} bitis={kapat} capa={[480, 520]} konum={[230, 520]} metin="SEVERAL FRUITS" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(0, "Harvard")} bitis={kapat} metin="Harvard Health" y={110} />
      {/* 2. vuruş: evrensel güvenli miktar yok */}
      <Panel a={pPanel} taraf="sag" genislik={780} />
      <Not t={t} bas={K(1, "for any")} metin="FOR ANY ONE MEDICINE" x={1860} y={330} boyut={36} hiza="sag" agirlik={800} renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(1, "nobody")} satirlar={["NO UNIVERSAL", "SAFE AMOUNT"]} x={1860} y={440} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S36;
