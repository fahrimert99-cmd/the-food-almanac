// Sahne 29 — kalite ≠ uykusuzluk: düzgün yorgan / dağınık yorgan karşılaştırması
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQual = K(1, "smooth"), tRest = K(1, "rested"), tIns = K(2, "Insomnia"), tPers = K(2, "persistent"), tNudge = K(3, "nudged");
  const tFirst = K(3, "first"), tSecond = K(3, "not");
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={pen}>
        {/* yorganın kesik sağ kenarını yumuşakça kâğıda karıştır */}
        <div style={{ position: "absolute", left: 1215, top: 330, width: 300, height: 620,
          background: `linear-gradient(to right, rgba(248,248,240,0) 0%, rgba(248,248,240,1) 40%)` }} />
        <Etiket t={t} bas={tQual} bitis={tIns - 0.1} capa={[330, 560]} konum={[420, 330]} metin="SMOOTH NIGHT" renk={RENK.yesil} />
        <Etiket t={t} bas={tIns} bitis={tNudge} capa={[1180, 620]} konum={[1060, 860]} metin="INSOMNIA" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={tRest} bitis={tIns - 0.1} metin="FEELING RESTED" x={1840} y={430} boyut={34} hiza="sag" agirlik={800} renk={RENK.koyuYesil} />
      <Not t={t} bas={tPers} bitis={tNudge} metin="PERSISTENT SLEEP DISORDER" x={1840} y={430} boyut={34} hiza="sag" agirlik={800} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={tNudge} satirlar={["QUALITY", "NOT INSOMNIA"]} x={1840} y={200} boyut={84} hiza="sag" />
      <Ikon t={t} bas={tFirst} ad="onay" x={330} y={430} boyut={76} />
      <Ikon t={t} bas={tSecond} ad="soru" x={1180} y={540} boyut={76} zemin={RENK.altin} />
    </>
  );
};
export default S29;
