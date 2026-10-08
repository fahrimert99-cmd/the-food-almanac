// Sahne 32 — 2016 çalışması: yemekten hemen sonra; yaşlı yetişkin çalışması: ~30 dk sonra
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t16 = K(0, "2016"), tWin = K(0, "within"), tFin = K(0, "finishing");
  const tOld = K(1, "older adults"), tWalk = K(1, "walks began"), t30 = K(1, "thirty");
  const s1 = s.cumleler[1].bas - 0.1;
  return (
    <>
      {/* masa sol yarıda; sağ yarı boş kâğıt. Alt imza AltSis ile örtülür */}
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [30, 120, 1560], [80, 150, 1480])}>
        <Etiket t={t} bas={tFin} bitis={s1} capa={[395, 460]} konum={[690, 300]} metin="MEAL FINISHED" renk={RENK.altin} />
        <Etiket t={t} bas={tWalk} capa={[630, 860]} konum={[940, 720]} metin="WALKS BEGIN" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: 2016 çalışması, beş dakika içinde */}
      <Baslik t={t} bas={t16} bitis={s1} metin="2016 TRIAL" x={1860} y={150} boyut={60} renk={RENK.altin} hiza="sag" />
      <BaslikBlok t={t} bas={tWin} bitis={s1} satirlar={["WITHIN", "MINUTES"]} x={1860} y={300} boyut={120} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "five")} bitis={s1} vurgu="5 MIN" not="of finishing a meal" x={1560} y={560} genislik={380} />
      {/* 2. cümle: yaşlı yetişkinler, yaklaşık 30 dk */}
      <Baslik t={t} bas={tOld} metin="OLDER ADULTS STUDY" x={1860} y={170} boyut={64} renk={RENK.lacivert} hiza="sag" />
      <VurguRozet t={t} bas={t30} vurgu="≈ 30 MIN" not="after meals" x={1560} y={330} genislik={400} />
      <Not t={t} bas={t30 + 0.8} metin="Walks began about thirty minutes after meals" x={1860} y={600} hiza="sag" genislik={520} boyut={32} />
      <AltSis a={1} yukseklik={170} />
    </>
  );
};

export default S32;
