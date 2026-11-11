// Sahne 38 — Taku & Messina 2012 meta-analizi
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={K(0, "Kaoru")} metin="TAKU + MESSINA" x={60} y={170} boyut={64} renk={RENK.lacivert}
        style={{ textShadow: "0 0 14px #F6F3EC, 0 0 14px #F6F3EC" }} />
      <VurguRozet t={t} bas={K(0, "17")} vurgu="17" not="DOUBLE-BLIND TRIALS" x={1700} y={130} genislik={340} boyut={110} />
      <Etiket t={t} bas={K(0, "menopause")} capa={[400, 540]} konum={[220, 290]} metin="MENOPAUSE" renk={RENK.mercan} />
    </>
  );
};

export default S38;
