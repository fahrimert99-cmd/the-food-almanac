import React from "react";
import { AbsoluteFill, AltSis, Baslik, BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Liste, Not, Parcaciklar, RENK, SP, VurguRozet, ANTON, INTER,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, BolumKarti, AdimAkisi } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAfter = K(1, "after 60"), tSev = K(1, "several daily"), t2013 = K(1, "2013"), tOld = K(1, "older adults");
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 45, 1760])} />
      <AltSis a={0.5} yukseklik={140} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={t2013} />
      <Baslik t={t} bas={tAfter} metin="AFTER 60" x={140} y={190} boyut={120} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tSev} bitis={tOld - 0.2} capa={[560, 800]} konum={[330, 880]} metin="SEVERAL DAILY MEDICINES" renk={RENK.altin} boyut={24} />
      <VurguRozet t={t} bas={K(1, "canadian")} vurgu="2013" not="REVIEW IN CMAJ" x={1730} y={250} genislik={300} boyut={96} />
      <div style={{ position: "absolute", left: 110, top: 800, width: 440, height: 135, borderRadius: 18, background: kagit(0.92),
        opacity: eout(ilerle(t, tOld, 0.4)) }} />
      <Baslik t={t} bas={tOld} metin="OLDER ADULTS:" x={140} y={845} boyut={50} renk={RENK.lacivert} />
      <Baslik t={t} bas={tOld + 0.4} metin="ESPECIALLY EXPOSED" x={140} y={900} boyut={50} renk={RENK.mercan} />
    </>
  );
};
export default S27;
