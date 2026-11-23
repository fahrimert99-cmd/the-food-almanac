// Sahne 1: raf + sağda kinetik başlık ve 3× rozeti
import React from "react";
import { AbsoluteFill, ANTON, Baslik, BaslikBlok, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Liste, Not, Panel, Parcaciklar, RENK, SP,
  VurguRozet, BolumKarti, Ikon, MARKA, eout, ilerle, ikiSatir, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTrip = K(0, "tripled");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* kutulardaki sahte yazılar örtülür */}
        <div style={{ position: "absolute", left: 680, top: 178, width: 78, height: 34, background: "rgb(236,214,198)", borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 578, top: 118, width: 62, height: 26, background: "rgb(245,243,235)", borderRadius: 6 }} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "US")} metin="ONE US SURVEY" x={1860} y={250} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "gluten-free")} metin="GLUTEN-FREE" x={1860} y={370} boyut={120} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tTrip} metin="TRIPLED" x={1860} y={490} boyut={120} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={tTrip + 0.35} vurgu="3×" not="in five years, among people without celiac disease"
        x={1560} y={580} genislik={520} renk={RENK.altin} />
    </>
  );
};
export default S01;
