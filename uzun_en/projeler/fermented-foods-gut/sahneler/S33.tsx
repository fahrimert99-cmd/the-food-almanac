// Sahne 33 — kefir ve süt bardağı: Actinobacteria artışı, sonra "anlamlı fark yok".
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tAct = K(0, "Actinobacteria");
  const bit0 = c[1].bas - 0.1;
  const pBant = eout(ilerle(t, tAct - 0.3, 0.5)) * (1 - eout(ilerle(t, bit0, 0.4)));
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [160, 100, 1600])}>
        <Etiket t={t} bas={K(0, "Kefir")} capa={[760, 520]} konum={[250, 560]} metin="KEFIR" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "milk group")} capa={[1280, 560]} konum={[1560, 660]} metin="MILK GROUP" renk={RENK.altin} />
      </Kamera>
      {/* üst bant: Actinobacteria başlığı */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 170, opacity: pBant,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.9)} 70%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={tAct - 0.2} bitis={bit0} metin="ACTINOBACTERIA" x={960} y={96} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "significant")} vurgu="NO" not="significant difference" x={1700} y={170} genislik={380} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "none in")} vurgu="DIVERSITY" not="no difference either" x={1700} y={730} genislik={400} boyut={64} renk={RENK.lacivert} />
    </>
  );
};

export default S33;
