// Sahne 51 — Toronto denemesi: 121 yetişkin, bir fincan baklagil, A1C ve tansiyon.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, VurguRozet } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAd = K(0, "121"), tTip = K(0, "type 2"), tFin = K(0, "about a cup"), tA1c = K(0, "lowered A1C"), tBp = K(0, "blood pressure"),
    tBuyuk = K(0, "more than");
  const sonra = tA1c - 0.2;
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1760])}>
        <Etiket t={t} bas={tFin} bitis={sonra} capa={[760, 520]} konum={[300, 640]} metin="A CUP A DAY" renk={RENK.koyuYesil} />
      </Kamera>
      <AltSis a={0.5} />
      {/* sol üst: önce denek sayısı, sonra tansiyon */}
      <Baslik t={t} bas={tAd} bitis={tBp - 0.2} metin="121 ADULTS" x={70} y={150} boyut={110} renk={RENK.koyuYesil} />
      <Not t={t} bas={tTip} bitis={tBp - 0.2} metin="TYPE 2 DIABETES · 3 MONTHS" x={76} y={215} boyut={30} agirlik={800} />
      <Baslik t={t} bas={tBp} metin="BLOOD PRESSURE" x={70} y={115} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tBuyuk} metin="MORE THAN A HIGH WHEAT FIBER DIET" x={76} y={170} boyut={28} agirlik={800} />
      {/* sağ: A1C düşüşü */}
      <VurguRozet t={t} bas={K(0, "half a point")} vurgu="–½ POINT" not="A1C" x={1640} y={380} renk={RENK.altin} boyut={84} genislik={360} />
    </>
  );
};

export default S51;
