// Sahne 14 — yakalama noktası: gıdadaki kimyasal ≠ insan sağlığı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tChem = K(1, "plant chemicals"), tFood = K(1, "food,"), tNot = K(1, "not"), tNo = K(2, "no good");
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [70, 70, 1760])}>
        <Etiket t={t} bas={tChem} bitis={tNo - 0.3} capa={[840, 640]} konum={[1300, 640]} metin="PLANT CHEMICALS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tFood} metin="FOOD," x={1860} y={210} boyut={116} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tNot} metin="NOT HEALTH" x={1860} y={330} boyut={116} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={tNo} metin="NO GOOD EVIDENCE THAT EXTRA ANTIOXIDANTS CHANGE:" x={1860} y={440} hiza="sag" boyut={28} agirlik={800} genislik={640} />
      <Liste t={t} isaret="carpi" x={1210} y={540} aralik={92} boyut={40} genislik={650}
        ogeler={[
          { bas: K(2, "heart,"), metin: "HEART", renk: RENK.mercan },
          { bas: K(2, "blood"), metin: "BLOOD SUGAR", renk: RENK.mercan },
          { bas: K(2, "memory"), metin: "MEMORY", renk: RENK.mercan },
        ]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
    </>
  );
};

export default S14;
