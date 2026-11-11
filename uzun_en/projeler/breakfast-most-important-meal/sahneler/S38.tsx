// Sahne 38 — yumurta tabağı: kahvaltı-kas denemesi yok; yeterli protein şart.
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol, INTER } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tNo = K(0, "no trial"), tAs = K(0, "assigned"), tThen = K(0, "then"), tCant = K(1, "can't"), tSk = K(1, "skipping"), tGet = K(2, "getting"), tEn = K(2, "enough"), tBr = K(2, "breakfast"), tEasy = K(2, "easy");
  const bit1 = K(1, "so") - 0.1, bit2 = tGet - 0.1;
  const m = s.meta.baslik?.satirlar ?? ["ENOUGH", "PROTEIN"];
  return (
    <>
      <Kamera gorsel="tam/38" pencere={p}>
        <Etiket t={t} bas={tBr} capa={[1130, 540]} konum={[1620, 700]} metin="BREAKFAST" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tNo - 0.1} bitis={bit1} metin="NO TRIAL" x={80} y={160} boyut={120} renk={RENK.lacivert} />
      <Not t={t} bas={tAs} bitis={bit1} metin="assigned people over 60 to eat or skip breakfast" x={80} y={240} genislik={680} boyut={34} />
      <Not t={t} bas={tThen} bitis={bit1} metin="then measured their muscles" x={80} y={345} genislik={680} boyut={34} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tCant - 0.1} bitis={bit2} metin="CAN'T SAY" x={80} y={160} boyut={120} renk={RENK.mercan} />
      <Not t={t} bas={tSk} bitis={bit2} metin="skipping breakfast itself shrinks muscle" x={80} y={240} genislik={680} boyut={34} />
      <BaslikBlok t={t} bas={tEn - 0.1} satirlar={m} x={1420} y={170} boyut={104} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tEasy - 0.4} metin="breakfast is one easy place to add some" x={1420} y={400} genislik={440} boyut={32} />
    </>
  );
};

export default S38;
