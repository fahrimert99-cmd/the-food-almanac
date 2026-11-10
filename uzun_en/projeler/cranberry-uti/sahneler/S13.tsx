// Sahne 13 — havuzlanmış sonuç: sağ sütunda sayılar, ölçütler ve –30% rozeti
import React from "react";
import { Baslik, BaslikBlok, KaynakEtiketi, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, INTER, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPool = K(0, "pooled");
  const tList = K(0, "symptomatic"), tOk = K(1, "authors") - 0.1;
  const [sc, al] = pop(t, K(1, "moderate"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 60, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      {/* sayılar */}
      <Baslik t={t} bas={K(0, "26")} bitis={tPool - 0.2} metin="26 TRIALS" x={1860} y={240} boyut={120} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "6,211")} bitis={tPool - 0.2} metin="6,211 PEOPLE" x={1860} y={360} boyut={120} hiza="sag" renk={RENK.koyuYesil} />
      {/* meta başlık */}
      <BaslikBlok t={t} bas={tPool - 0.4} satirlar={["ALL TRIALS", "POOLED"]} x={1860} y={240} boyut={120} hiza="sag" adim={0.4}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      {/* ölçütler */}
      <Liste t={t} isaret="onay" aralik={88} boyut={36} genislik={640} x={1180} y={500} ogeler={[
        { bas: tList, metin: "SYMPTOMATIC", renk: RENK.altin, bitis: tOk },
        { bas: K(0, "lab-confirmed"), metin: "LAB-CONFIRMED", renk: RENK.altin, bitis: tOk },
      ]} />
      <VurguRozet t={t} bas={K(0, "30")} vurgu="–30%" not={s.meta.baslik?.not ?? ""} x={1500} y={680} genislik={620} boyut={120} />
      {/* kesinlik düzeyi */}
      <div style={{ position: "absolute", left: 1180, top: 520, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 30px", fontFamily: INTER, fontWeight: 800,
        fontSize: 32, letterSpacing: 2, whiteSpace: "nowrap" }}>MODERATE CERTAINTY</div>
    </>
  );
};
export default S13;
