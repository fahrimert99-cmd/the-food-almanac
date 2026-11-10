// Sahne 30 — Yaşlı yetişkinlerde hastane bakımı, altı kişiden biri.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSix = K(0, "one in six");
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1840])}>
        <Etiket t={t} bas={K(0, "hospital")} capa={[760, 690]} konum={[560, 900]} metin="HOSPITAL CARE" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "older adults")} metin="OLDER ADULTS" x={1860} y={180} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
      <VurguRozet t={t} bas={tSix} vurgu="1 IN 6" not="die, per the CDC" x={1690} y={250} genislik={340} boyut={92} renk={RENK.mercan} />
      {Array.from({ length: 6 }, (_, i) => {
        const [sc, al] = pop(t, tSix + 0.25 + i * 0.08, 0.4);
        return <div key={i} style={{ position: "absolute", left: 1520 + i * 58, top: 480, width: 44, height: 44, borderRadius: "50%",
          background: i === 5 ? RENK.mercan : RENK.lacivert, opacity: al * (i === 5 ? 1 : 0.55), transform: `scale(${sc})` }} />;
      })}
    </>
  );
};
export default S30;
