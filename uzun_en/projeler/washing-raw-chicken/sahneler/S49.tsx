// Sahne 49 — CDC rehberi: düz yasak değil; yıkarsan nazikçe, sonra lavabo temizliği.
import React from "react";
import { BaslikBlok, Etiket, KaynakEtiketi, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSoft = K(0, "softer"), tNeed = K(1, "doesn't need washing"), tGently = K(1, "gently");
  const tClean = K(1, "clean"), tSan = K(1, "sanitize"), tSink = K(1, "the sink");
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tNeed} bitis={tGently - 0.2} capa={[700, 700]} konum={[420, 470]} metin="NO WASHING NEEDED" renk={RENK.mercan} />
        <Etiket t={t} bas={tGently} capa={[945, 320]} konum={[1130, 90]} metin="RUN WATER GENTLY" renk={RENK.lacivert} />
        <Etiket t={t} bas={tClean} capa={[1300, 830]} konum={[1700, 880]} metin="CLEAN" renk={RENK.yesil} />
        <Etiket t={t} bas={tSan} capa={[1450, 620]} konum={[1730, 520]} metin="SANITIZE" renk={RENK.yesil} />
        <Etiket t={t} bas={tSink} capa={[1000, 700]} konum={[1020, 900]} metin="THE SINK" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin="CDC GUIDANCE" bas={K(0, "CDC's")} />
      <BaslikBlok t={t} bas={tSoft} bitis={c[1].bas - 0.1} satirlar={["SOFTER THAN", "A FLAT BAN"]} x={60} y={210} boyut={80}
        renkler={[RENK.lacivert, RENK.altin]} />
    </>
  );
};

export default S49;
