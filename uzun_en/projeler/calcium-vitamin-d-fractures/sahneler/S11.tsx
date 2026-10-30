// Sahne 11 — VITAL: kimler alındı. Şişe masası solda; başlık ve sayı rozeti sağ üstteki boş kâğıtta.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tVital = K(0, "VITAL"), tKaynak = K(1, "Meryl"), tSayi = K(2, "25,871");
  const tErkek = K(2, "men"), tKadin = K(2, "women");
  const [sE, aE] = pop(t, tErkek, 0.5);
  const [sK, aK] = pop(t, tKadin, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [90, 60, 1740])} />
      <Baslik t={t} bas={tVital} metin="VITAL" x={110} y={215} boyut={120} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tKaynak} />
      <VurguRozet t={t} bas={tSayi} vurgu="25,871" not="adults enrolled" x={1650} y={130} genislik={380} boyut={96} />
      <div style={{ position: "absolute", left: 1450, top: 316, transform: `scale(${sE})`, transformOrigin: "0% 50%", opacity: aE }}>
        <Hap metin="MEN 50+" renk={RENK.lacivert} boyut={26} />
      </div>
      <div style={{ position: "absolute", left: 1660, top: 316, transform: `scale(${sK})`, transformOrigin: "0% 50%", opacity: aK }}>
        <Hap metin="WOMEN 55+" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S11;
