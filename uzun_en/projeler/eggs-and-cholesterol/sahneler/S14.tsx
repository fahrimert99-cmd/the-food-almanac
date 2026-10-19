// Sahne 14 — 2015 danışma komitesi ve kalkan 300 mg sınırı (görsel solda, yazılar sağ boşlukta).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t300 = K(2, "300");
  const pCizgi = eout(ilerle(t, t300 + 0.9, 0.5));
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [40, 110, 1700])}>
        <Etiket t={t} bas={K(0, "committee")} bitis={K(2, "nutrient")} capa={[420, 690]} konum={[860, 400]} metin="ADVISORY COMMITTEE" renk={RENK.altin} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "2015")} metin="2015" x={1860} y={200} boyut={150} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "reviewed")} metin="REVIEWED THE EVIDENCE" x={1860} y={310} hiza="sag" boyut={38} agirlik={800} genislik={760} />
      <Liste t={t} x={900} y={410} boyut={32} genislik={960} isaret="onay"
        ogeler={[{ bas: K(2, "nutrient"), metin: "CHOLESTEROL: NOT A NUTRIENT OF CONCERN", renk: RENK.yesil }]} />
      <VurguRozet t={t} bas={t300} vurgu="300 MG" not="DAILY LIMIT" x={1540} y={540} genislik={420} boyut={100} renk={RENK.mercan} />
      {/* 300 MG üzerine çizgi */}
      <div style={{ position: "absolute", left: 1540 - 190, top: 540 + 66, width: 380 * pCizgi, height: 8, background: RENK.lacivert,
        borderRadius: 4, transform: "rotate(-4deg)", transformOrigin: "0 50%" }} />
      <Baslik t={t} bas={K(2, "longer") - 0.2} metin="NO MORE LIMIT" x={1860} y={830} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S14;
