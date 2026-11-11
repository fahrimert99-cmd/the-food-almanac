// Sahne 11 — Mayo Clinic: bal ile şeker takasında genelde avantaj yok.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tMayo = K(0, "Mayo"), tNo = K(0, "no advantage"), tSwap = K(0, "swapping honey");
  const tBoth = K(1, "raise blood sugar"), tHoney = K(1, "honey has"), tMore = K(1, "slightly more");
  const kam = kameraYolu(t, s.sure, [0, 40, 1920], [80, 70, 1760]);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kam}>
        <Etiket t={t} bas={tBoth} capa={[500, 560]} konum={[820, 200]} metin="BOTH RAISE IT" renk={RENK.mercan} />
        <Etiket t={t} bas={tHoney} capa={[1470, 760]} konum={[1330, 270]} metin="SLIGHTLY MORE CARB" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tMayo} />
      <Baslik t={t} bas={tNo - 0.1} bitis={c[1].bas - 0.2} metin="NO ADVANTAGE" x={960} y={190} boyut={140} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tSwap} bitis={c[1].bas - 0.2} metin="SWAPPING HONEY FOR SUGAR · DIABETES PLAN" x={960} y={285} hiza="orta" boyut={34} agirlik={800} />
    </>
  );
};

export default S11;
