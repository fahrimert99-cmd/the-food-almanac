// Sahne 33 — AGES ölçümleri: kasya 1.880–3.260, Seylan en çok 185 mg/kg.
import React from "react";
import { AbsoluteFill, AltSis, Baslik, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCas = K(1, "1,880"), tCey = K(2, "185");
  return (
    <AbsoluteFill>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1780])} />
      <AltSis a={0.4} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Austria's")} />
      <Baslik t={t} bas={K(0, "How")} bitis={K(1, "reported")} metin="HOW DIFFERENT?" x={960} y={170} boyut={84} renk={RENK.koyuYesil} hiza="orta" />
      <VurguRozet t={t} bas={tCas - 0.1} vurgu="1,880–3,260" not="mg per kg · cassia" x={450} y={790} genislik={520} boyut={80} renk={RENK.mercan} />
      <VurguRozet t={t} bas={tCey} vurgu="185" not="mg per kg · highest Ceylon" x={1660} y={330} genislik={380} boyut={104} renk={RENK.yesil} />
    </AbsoluteFill>
  );
};

export default S33;
