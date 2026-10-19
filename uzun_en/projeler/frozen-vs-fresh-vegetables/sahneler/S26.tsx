// Sahne 26 — süzgeçte haşlanmış brokoli → dondurucu çekmecesi: kayıp çoğunlukla haşlama adımında.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDays = K(0, "60"), tSim = K(0, "similar"), tBlanch = K(1, "blanching"), tNot = K(1, "not in");
  const bit0 = K(1, "most") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [30, 70, 1860])} />
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tDays} bitis={bit0} metin="60 DAYS AT –18 °C" x={960} y={190} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <VurguRozet t={t} bas={tSim} bitis={bit0} vurgu="≈ SIMILAR" not="vitamin C losses" x={1000} y={330} genislik={380} boyut={72} />
      <Etiket t={t} bas={tBlanch} capa={[330, 620]} konum={[330, 250]} metin="BLANCHING STEP" renk={RENK.mercan} />
      <Etiket t={t} bas={tNot} capa={[1480, 540]} konum={[1480, 190]} metin="NOT IN THE FREEZER" renk={RENK.yesil} />
    </>
  );
};

export default S26;
