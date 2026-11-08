// Sahne 18 — BMJ 2013 derlemesi: 22 deney, 1.606 yetişkin, 11 kohort, ~127.000 yetişkin.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBmj = K(0, "BMJ"), t22 = K(0, "22"), t1606 = K(0, "1,606"), t11 = K(0, "11"), t127 = K(0, "127,000");
  return (
    <>
      {/* kamera sol alttaki imzayı (x<300) dışarıda tutar */}
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [300, 50, 1560], [350, 90, 1440])}>
        <Etiket t={t} bas={t22} bitis={t11 - 0.3} capa={[640, 560]} konum={[1080, 330]} metin="22 TRIALS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={t1606} bitis={t11 - 0.3} capa={[720, 700]} konum={[1080, 440]} metin="1,606 ADULTS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={t11} capa={[1400, 560]} konum={[1090, 330]} metin="11 COHORT STUDIES" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={t127} capa={[1330, 790]} konum={[1090, 440]} metin="127,000 ADULTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tBmj} />
    </>
  );
};

export default S18;
