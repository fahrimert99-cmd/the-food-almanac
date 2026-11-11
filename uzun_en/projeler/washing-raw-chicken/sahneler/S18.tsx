// Sahne 18 — 2003 boyalı su deneyi: damlalar lavabodan dışarı yayılır.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Parcaciklar, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [160, 90, 1600], [240, 130, 1440]);
  const tBoya = K(0, "colored water"), tDam = K(0, "droplets"), tGerm = K(1, "germs"), tLeave = K(1, "leave");
  const tYil = K(0, "2003,");
  const bitis0 = K(1, "It") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/18" pencere={w}>
        <Etiket t={t} bas={tBoya} capa={[620, 735]} konum={[500, 440]} metin="COLORED WATER" renk={RENK.mercan} />
        <Etiket t={t} bas={tDam} capa={[1300, 400]} konum={[1500, 470]} metin="DROPLETS" renk={RENK.altin} />
      </Kamera>
      {/* üst bant: başlıklar için kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 350,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.96)} 80%, ${kagit(0)} 100%)` }} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <Baslik t={t} bas={tYil} bitis={bitis0} metin="2003 DYE TEST" x={960} y={200} boyut={100} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tGerm} metin="NO GERMS TESTED" x={960} y={170} boyut={84} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tLeave} metin="DROPLETS LEAVE THE SINK" x={960} y={262} boyut={64} renk={RENK.koyuYesil} hiza="orta" />
      <Parcaciklar t={t} bas={tLeave} kaynak={[800, 560]} hedef={[260, 420]} adet={10} aralik={0.14} renk={RENK.mercan} tohum="l18" />
      <Parcaciklar t={t} bas={tLeave} kaynak={[1100, 560]} hedef={[1650, 440]} adet={10} aralik={0.14} renk={RENK.mercan} tohum="r18" />
    </>
  );
};
export default S18;
