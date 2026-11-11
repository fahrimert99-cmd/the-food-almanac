// Sahne 20 — kadınlar çalışması: sol 91,731 kadın, takvimde 12 yıl, sağ 864 taş; sonra besin kalsiyumu –35%.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, sayac } from "../kutuphane";

const bin = (s: string) => s.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tK = K(0, "91,731"), tY = K(0, "12"), tT = K(0, "864");
  const cik = K(1, "Again") - 0.2;
  const tFood = K(1, "from food"), tLow = K(1, "lower risk"), t35 = K(1, "35");
  return (
    <>
      <Kamera gorsel="tam/20" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Etiket t={t} bas={tFood} capa={[790, 730]} konum={[330, 560]} metin="FOOD CALCIUM" renk={RENK.yesil} />
      </Kamera>
      <AltSis a={0.8} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      {/* 1. cümle: sayılar */}
      <VurguRozet t={t} bas={tK} bitis={cik} vurgu={bin(sayac(t, tK, 91731, 1.3))} not="women studied" x={340} y={130} genislik={420} renk={RENK.lacivert} />
      <Baslik t={t} bas={tY} bitis={cik} metin={sayac(t, tY, 12, 0.8)} x={830} y={300} boyut={170} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tY + 0.15} bitis={cik} metin="YEARS" x={830} y={425} boyut={80} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={tT} bitis={cik} vurgu={sayac(t, tT, 864, 1.0)} not="developed stones" x={1600} y={112} genislik={400} renk={RENK.mercan} />
      {/* 2. cümle: sonuç */}
      <Baslik t={t} bas={tLow} metin="LOWER RISK" x={60} y={250} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t35} vurgu="–35%" not="stone risk, highest vs lowest fifth of intake" x={1600} y={112} genislik={440} renk={RENK.yesil} />
    </>
  );
};

export default S20;
