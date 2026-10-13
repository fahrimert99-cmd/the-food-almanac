// Sahne 19 — 28 çalışma, yumurta grubu LDL +5.6 mg/dL (Rouhani 2018). Sağdaki boş kâğıt alanı kullanılır.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t28 = K(0, "28"), tEggs = K(0, "more eggs,"), tLdl = K(1, "LDL"), t56 = K(1, "5.6");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 70, 1760], [0, 120, 1620])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <VurguRozet t={t} bas={t28} vurgu="28" not="RANDOMIZED TRIALS" x={1500} y={330} genislik={560} bitis={7.6} />
      <Etiket t={t} bas={tEggs} bitis={8.2} capa={[930, 800]} konum={[1180, 640]} metin="MORE EGGS" renk={RENK.altin} />
      <Baslik t={t} bas={tLdl} metin="LDL" x={1500} y={250} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={t56} vurgu="+5.6 MG/DL" not="HIGHER LDL" x={1500} y={450} renk={RENK.mercan} genislik={560} boyut={92} />
    </>
  );
};

export default S19;
