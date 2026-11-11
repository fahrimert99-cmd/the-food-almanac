// Sahne 32 — ıspanak: Taylor & Curhan 2007 kohort büyüklüğü
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const sayi = (bas: number, hedef: number) => Math.round(hedef * eout(ilerle(t, bas, 1.2))).toLocaleString("en-US");
  const bE = K(1, "46,000"), bK = K(1, "195,000"), bT = K(1, "4,605");
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={K(0, "spinach")} metin="SPINACH" x={1000} y={125} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "analyzed")} metin="oxalate intake and stones" x={1004} y={192} boyut={32} renk={RENK.lacivert} agirlik={800} />
      <VurguRozet t={t} bas={bE} vurgu={sayi(bE, 46000)} not="men (nearly)" x={520} y={800} genislik={340} boyut={64} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={bK} vurgu={sayi(bK, 195000)} not="women (about)" x={960} y={800} genislik={340} boyut={64} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={bT} vurgu={sayi(bT, 4605)} not="stones counted" x={1400} y={800} genislik={340} boyut={64} renk={RENK.mercan} />
    </>
  );
};
export default S32;
