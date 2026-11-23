// Sahne 47 — AGA uzman görüşü: testten önce glüteni kesmek sonuçları bozabilir.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAga = K(0, "American"), tCut = K(0, "cutting out"), tAcc = K(0, "less accurate");
  const tDoc = K(1, "doctors"), tEat = K(1, "eat gluten again");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tCut} bitis={tDoc - 0.1} capa={[820, 390]} konum={[900, 150]} metin="CUTTING OUT GLUTEN" renk={RENK.mercan} />
        <Etiket t={t} bas={tEat} capa={[820, 390]} konum={[960, 150]} metin="EAT GLUTEN AGAIN" renk={RENK.yesil} />
        <Etiket t={t} bas={tEat + 0.9} capa={[840, 533]} konum={[1020, 800]} metin="FOR A WHILE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Not t={t} bas={tAga} bitis={tAcc} metin="AGA EXPERT REVIEW" x={1550} y={190} hiza="orta" genislik={560} boyut={38} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={tCut} bitis={tAcc} metin="DON'T CUT" x={1550} y={400} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tCut + 0.18} bitis={tAcc} metin="BEFORE TESTING" x={1550} y={520} boyut={80} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tAcc} metin="TESTS CAN BE LESS ACCURATE" x={1550} y={400} hiza="orta" genislik={560} boyut={44} agirlik={800} />
      <Not t={t} bas={tDoc} metin="DOCTORS MAY ASK YOU TO EAT GLUTEN AGAIN BEFORE TESTING" x={1550} y={620} hiza="orta" genislik={560} boyut={34} agirlik={700} />
    </>
  );
};

export default S47;
