// Sahne 47 — levotiroksin: solda başlık ve zaman rozeti, sağda saat ve su bardağı etiketli.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler, m = s.meta.baslik!;
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [110, 100, 1700]);
  const tBos = K(1, "empty");
  return (
    <>
      <Kamera gorsel="tam/47" pencere={pencere}>
        {/* saat kadranındaki anlamsız küçük yazı örtülür */}
        <div style={{ position: "absolute", left: 1470, top: 755, width: 90, height: 36,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F3EEE2 0%, #F3EEE2 60%, rgba(243,238,226,0) 100%)` }} />
        <Etiket t={t} bas={K(1, "before")} capa={[1540, 520]} konum={[1540, 250]} metin="BEFORE BREAKFAST" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "glass")} capa={[1110, 780]} konum={[1000, 520]} metin="FULL GLASS OF WATER" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Baslik t={t} bas={0.05} bitis={tBos - 0.1} metin="LEVOTHYROXINE" x={110} y={215} boyut={100} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "thyroid")} bitis={tBos - 0.1} metin="A thyroid medicine" x={114} y={300} boyut={38} />
      <Baslik t={t} bas={K(0, "opposite")} bitis={tBos - 0.1} metin="THE OPPOSITE" x={110} y={400} boyut={84} renk={RENK.altin} />
      <Baslik t={t} bas={tBos} metin={m.satirlar[0]} x={110} y={215} boyut={104} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "half")} vurgu="30–60 MIN" not="BEFORE BREAKFAST" x={440} y={330} genislik={500} renk={RENK.altin} boyut={96} />
    </>
  );
};

export default S47;
