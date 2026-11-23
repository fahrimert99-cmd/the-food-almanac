// Sahne 25 — uyku kalitesi iyileşti, insomnia şiddeti değişmedi; "aynı şey değil mi?"
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tImp = K(0, "improved"), tIns = K(1, "insomnia"), tOnly = K(1, "only"), tNo = K(1, "no"), tSame = K(2, "same");
  const pen = kameraYolu(t, s.sure, [0, 20, 1920], [20, 50, 1800]);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={pen}>
        <Etiket t={t} bas={K(0, "quality")} bitis={tIns - 0.2} capa={[570, 540]} konum={[560, 780]} metin="SLEEP QUALITY" renk={RENK.yesil} />
        <Etiket t={t} bas={tIns} bitis={tSame} capa={[890, 560]} konum={[890, 800]} metin="INSOMNIA SEVERITY" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tImp} satirlar={["SLEEP QUALITY:", "BETTER"]} x={1500} y={220} boyut={92} hiza="orta" />
      <Ikon t={t} bas={tImp + 0.6} ad="onay" x={1790} y={330} boyut={78} />
      <Baslik t={t} bas={tIns} metin="INSOMNIA SEVERITY:" x={1500} y={520} boyut={50} renk={RENK.altin} hiza="orta" />
      <Baslik t={t} bas={tNo} metin="NO CLEAR CHANGE" x={1500} y={590} boyut={58} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 1500, top: 660, transform: "translateX(-50%)" }}>
        {t >= tOnly && <Hap metin="ONLY ONE TRIAL" renk={RENK.altin} boyut={30} style={{ opacity: eout(ilerle(t, tOnly, 0.4)) }} />}
      </div>
      <Baslik t={t} bas={tSame} metin="THE SAME THING?" x={1500} y={820} boyut={76} renk={RENK.mercan} hiza="orta" />
    </>
  );
};
export default S25;
