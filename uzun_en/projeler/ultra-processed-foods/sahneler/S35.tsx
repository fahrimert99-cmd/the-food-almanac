// Sahne 35 — pano ve fincan: kusurlu ölçüm; Fransız gönüllülerin özellikleri.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(1, "French");
  const tBit = tL - 0.15;
  const pT = eout(ilerle(t, 0.1, 0.5)) * (1 - eout(ilerle(t, tBit, 0.4)));
  const pL = eout(ilerle(t, tL - 0.2, 0.5));
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        {/* panodaki el yazısı örtülür */}
        <div style={{ position: "absolute", left: 765, top: 868, width: 70, height: 56,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F4EEDD 0%, #F4EEDD 65%, rgba(244,238,221,0) 100%)` }} />
      </Kamera>
      {/* başlık zemini */}
      <div style={{ position: "absolute", left: 1000, top: 110, width: 860, height: 350, borderRadius: 26, background: RENK.kagit, opacity: 0.93 * pT }} />
      <Baslik t={t} bas={0.3} bitis={tBit} metin="IMPERFECT" x={1830} y={190} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={0.5} bitis={tBit} metin="MEASURING" x={1830} y={310} boyut={104} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "erase") - 0.1} bitis={tBit} metin="ADJUSTING IS NOT ERASING" x={1830} y={390} hiza="sag" boyut={30} agirlik={800}
        renk={RENK.altin} genislik={800} />
      <Etiket t={t} bas={K(1, "questionnaires")} bitis={tBit} capa={[410, 480]} konum={[1180, 600]} metin="FOOD QUESTIONNAIRE" renk={RENK.altin} />
      {/* Fransız gönüllüler paneli */}
      <div style={{ position: "absolute", left: 960, top: 290, width: 900, height: 390, borderRadius: 26, background: RENK.kagit, opacity: 0.94 * pL,
        boxShadow: "0 10px 26px rgba(48,40,34,0.14)" }} />
      <Not t={t} bas={tL} metin="FRENCH VOLUNTEERS WERE" x={1010} y={320} boyut={32} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="onay" x={1010} y={390} aralik={74} boyut={34} genislik={800} ogeler={[
        { bas: K(1, "younger"), metin: "YOUNGER" },
        { bas: K(1, "better"), metin: "BETTER EDUCATED" },
        { bas: K(1, "healthier"), metin: "HEALTHIER" },
      ]} />
      <Not t={t} bas={K(1, "than")} metin="THAN THE GENERAL POPULATION" x={1010} y={620} boyut={30} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};
export default S35;
