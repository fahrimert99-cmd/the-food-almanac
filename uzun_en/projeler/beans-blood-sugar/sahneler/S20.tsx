import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// 41 çalışma birleştirildi: sağ sütunda başlık ve rozet
const S20: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const b2 = K(1, "Eaten");
  return (
    <>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Kamera gorsel="tam/20" pencere={pencere}>
        <Etiket t={t} bas={K(1, "fasting")} capa={[1030, 640]} konum={[1330, 880]} metin="FASTING GLUCOSE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "pulses")} capa={[640, 560]} konum={[330, 880]} metin="PULSES" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pooled")} bitis={b2 - 0.2} metin="41 TRIALS" x={1470} y={230} boyut={110} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "pooled") + 0.2} bitis={b2 - 0.2} metin="POOLED" x={1470} y={350} boyut={110} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "2009,")} bitis={b2 - 0.2} x={1470} y={440} hiza="orta" genislik={560} boyut={32} metin="Sievenpiper and colleagues, 2009" />
      <VurguRozet t={t} bas={K(1, "11")} vurgu="11 TRIALS" not="pulses alone lowered fasting blood glucose" x={1470} y={400} genislik={560} boyut={80} renk={RENK.koyuYesil} />
    </>
  );
};
export default S20;
