// Sahne 45 — DIABEGG denemesi: 128 yetişkin, yüksek yumurta (12+/hafta) ve düşük yumurta (<2/hafta) diyeti.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDeney = K(0, "trial"), tCal = K(1, "DIABEGG"), tSayi = K(1, "128"), tPre = K(1, "prediabetes");
  const tYuksek = K(1, "high-egg"), tDoz = K(1, "12"), tDusuk = K(1, "low-egg");
  const [sc, al] = pop(t, tCal, 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1760])}>
        <Etiket t={t} bas={tYuksek} capa={[310, 830]} konum={[1010, 800]} metin="HIGH-EGG: 12+ A WEEK" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tDusuk} capa={[310, 255]} konum={[1010, 440]} metin="LOW-EGG: UNDER 2" renk={RENK.yesil} boyut={32} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tDeney} metin="A TRIAL" x={1860} y={230} boyut={96} renk={RENK.lacivert} hiza="sag" bitis={tCal} />
      <div style={{ position: "absolute", left: 1150, top: 100, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="DIABEGG STUDY" renk={RENK.koyuYesil} boyut={30} />
      </div>
      <VurguRozet t={t} bas={tSayi} vurgu="128" not="ADULTS" x={1500} y={150} genislik={340} />
      <Not t={t} bas={tPre} metin="PREDIABETES OR TYPE 2 DIABETES" x={1860} y={360} boyut={28} hiza="sag" agirlik={800} />
      <Baslik t={t} bas={tDoz} metin="12 EGGS" x={1860} y={500} boyut={96} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tDoz + 0.15} metin="A WEEK" x={1860} y={610} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S45;
