// Sahne 52 — terazi: baklagilin ek faydası küçük; kanıtın kesinliği düşük.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFiber = K(0, "high fiber"), tOnce = K(0, "extra benefit"), tIki = K(0, "two tenths");
  const tPool = K(1, "Pooled"), tLow = K(1, "certainty");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])}>
        <Etiket t={t} bas={tOnce} bitis={tPool - 0.2} capa={[587, 640]} konum={[230, 810]} metin="LEGUMES" renk={RENK.mercan} />
        <Etiket t={t} bas={tFiber} bitis={tPool - 0.2} capa={[1360, 630]} konum={[1590, 810]} metin="HIGH FIBER DIET" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.4} />
      <VurguRozet t={t} bas={tIki} bitis={tPool - 0.2} vurgu="≈ 0.2" not="OF AN A1C POINT" x={240} y={250} genislik={330} boyut={84} renk={RENK.altin} />
      <Not t={t} bas={tPool} metin="POOLED TRIALS POINT THE SAME WAY" x={70} y={70} boyut={32} agirlik={800} />
      <Baslik t={t} bas={tLow} metin="LOW CERTAINTY" x={70} y={160} boyut={72} renk={RENK.koyuYesil} />
    </>
  );
};

export default S52;
