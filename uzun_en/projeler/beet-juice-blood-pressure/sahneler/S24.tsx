// Sahne 24 — Bondonno denemesi: 27 kişi, 1 hafta nitratça zengin ve nitratı alınmış suyla.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDiger = K(0, "other side"), t27 = K(1, "27"), tTedavi = K(1, "treated"), tSuyu = K(1, "beet juice");
  const tHafta = K(1, "one week"), tRich = K(1, "nitrate-rich"), tDep = K(1, "nitrate-depleted");
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [100, 50, 1720], [140, 70, 1640])}>
        <Etiket t={t} bas={tSuyu} capa={[1545, 760]} konum={[1180, 480]} metin="BEET JUICE" renk={RENK.mercan} />
        <Etiket t={t} bas={tHafta} capa={[1280, 745]} konum={[1000, 640]} metin="1 WEEK" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(1, "bondonno")} />}
      <BaslikBlok t={t} bas={tDiger} bitis={t27 - 0.1} satirlar={["NOW THE", "OTHER SIDE"]} x={120} y={260} boyut={110} renkler={[RENK.lacivert, RENK.mercan]} />
      <BaslikBlok t={t} bas={t27} satirlar={["27 PEOPLE,", "1 WEEK"]} x={120} y={260} boyut={110} />
      <Not t={t} bas={tTedavi} metin="TREATED HIGH BLOOD PRESSURE" x={124} y={480} boyut={34} agirlik={800} />
      <Liste t={t} isaret="nokta" x={120} y={560} aralik={84} boyut={34} genislik={820} ogeler={[
        { bas: tRich, metin: "NITRATE-RICH JUICE", renk: RENK.yesil },
        { bas: tDep, metin: "NITRATE-DEPLETED JUICE", renk: RENK.altin },
      ]} />
    </>
  );
};

export default S24;
