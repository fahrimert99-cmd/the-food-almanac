// Sahne 28 — Silk çalışması: sağda rakamlar, sonra 65+ oranı.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAge = K(1, "65"), bit = tAge - 0.3;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(0, "surveillance")} bitis={bit} capa={[900, 640]} konum={[760, 900]} metin="SURVEILLANCE STUDY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "2004")} bitis={bit} metin="2004–2009" x={1130} y={150} boyut={76} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "762")} bitis={bit} vurgu="762" not="invasive listeriosis" x={1300} y={230} genislik={340} boyut={96} />
      <VurguRozet t={t} bas={K(0, "18 percent")} bitis={bit} vurgu="18%" not="died" x={1700} y={230} genislik={300} boyut={96} renk={RENK.mercan} />
      <Baslik t={t} bas={tAge} metin="AGE 65+" x={1860} y={170} boyut={90} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "four to five")} vurgu="4–5×" not="the overall case rate, in adults 65 and older" x={1560} y={270} genislik={560} boyut={120} renk={RENK.mercan} />
    </>
  );
};
export default S28;
