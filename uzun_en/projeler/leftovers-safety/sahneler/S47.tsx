// Sahne 47 — perspektif: yılda 48 milyon, altıda bir, 128.000 hastane.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMar = K(3, "margin");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "FDA")} />
      <VurguRozet t={t} bas={K(1, "48")} vurgu="48 MILLION" not="Americans of all ages" x={1400} y={130} genislik={520} boyut={92} />
      <VurguRozet t={t} bas={K(1, "one")} vurgu="1 IN 6" not="get a foodborne illness each year" x={1400} y={350} genislik={520} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "128,000")} vurgu="128,000" not="are hospitalized" x={1400} y={570} genislik={520} boyut={92} renk={RENK.mercan} />
      <Not t={t} bas={K(2, "Most")} bitis={tMar - 0.1} metin="Most people are not." x={1400} y={780} hiza="orta" boyut={44} agirlik={800} />
      <Baslik t={t} bas={tMar} metin="THE MARGIN FOR ERROR" x={1400} y={790} boyut={56} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={tMar + 0.4} metin="GETS SMALLER" x={1400} y={855} boyut={56} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};
export default S47;
