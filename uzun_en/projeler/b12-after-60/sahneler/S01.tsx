import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, kis, pop } from "../kutuphane";

// Sahne 1 — 38% / 15%: mide solda, sağda boş kâğıt üzerinde rakamlar
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])}>
        {/* alttaki küçük karalama kâğıtla örtülür */}
        <div style={{ position: "absolute", left: 440, top: 960, width: 220, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "thinning")} bitis={K(1, "In") + 0.5} capa={[915, 520]} konum={[1330, 640]} metin="THINNING STOMACH LINING" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={K(0, "3,299")} metin="3,299 ADULTS" x={1860} y={170} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={K(0, "over")} metin="OVER 60" x={1860} y={225} hiza="sag" boyut={40} renk={RENK.koyuYesil} agirlik={800} />
      <VurguRozet t={t} bas={K(0, "38")} vurgu="38%" not="LOW IN B12" x={1170} y={330} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(1, "15")} vurgu="15%" not="COMPARISON GROUP" x={1640} y={330} renk={RENK.yesil} genislik={400} />
    </>
  );
};

export default S01;
