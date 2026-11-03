// Sahne 21 — 2016 derlemesi: 11 çalışma, 694 yetişkin; havuzlanmadı. Sağda kâğıt panel, solda gerçek kavanozlar.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tModest = K(1, "very");
  const tPool = K(1, "pool");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1740])} />
      <Panel a={1} taraf="sag" genislik={620} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <VurguRozet t={t} bas={K(0, "eleven")} bitis={tModest - 0.1} vurgu="11" not="TRIALS" x={1640} y={230} renk={RENK.koyuYesil} genislik={340} />
      <VurguRozet t={t} bas={K(0, "694")} bitis={tModest - 0.1} vurgu="694" not="ADULTS" x={1640} y={520} renk={RENK.altin} genislik={340} />
      <Baslik t={t} bas={K(1, "modest")} metin="VERY MODEST" x={1490} y={290} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "A1C")} metin="A1C DECREASES" x={1490} y={365} boyut={66} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPool} metin="NOT POOLED" x={1490} y={540} boyut={80} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "different")} metin="Trials too different from one another" x={1490} y={610} boyut={30} genislik={380} />
      <Etiket t={t} bas={K(1, "different")} capa={[1433, 400]} konum={[1215, 560]} metin="TOO DIFFERENT" renk={RENK.mercan} />
    </>
  );
};

export default S21;
