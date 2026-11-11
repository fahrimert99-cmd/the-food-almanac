// Sahne 10 — bekleme odası: 8 hastane, 367 yetişkin, yaş ve cinsiyet rozetleri.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t8 = K(0, "eight"), t367 = K(0, "367"), t50 = K(1, "50"), t60 = K(1, "60,"), t9 = K(1, "nine");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [60, 20, 1800], [140, 60, 1700])}>
        {/* penceredeki kuş figürü mavi yamayla örtülür */}
        <div style={{ position: "absolute", left: 300, top: 30, width: 150, height: 130,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #A6CAD6 0%, #A6CAD6 60%, rgba(166,202,214,0) 100%)" }} />
      </Kamera>
      <VurguRozet t={t} bas={t8} bitis={4.0} vurgu="8" not="HOSPITALS IN THAILAND" x={1080} y={120} genislik={460} />
      <Baslik t={t} bas={t367} metin="367 ADULTS" x={820} y={210} boyut={130} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "knee")} metin="knee osteoarthritis" x={826} y={300} boyut={36} agirlik={700} />
      <VurguRozet t={t} bas={t50} bitis={10.9} vurgu="50+" not="ALL WERE 50 OR OLDER" x={1080} y={440} genislik={460} />
      <VurguRozet t={t} bas={t60} bitis={12.2} vurgu="≈ 60" not="AVERAGE AGE" x={1080} y={440} genislik={460} />
      <VurguRozet t={t} bas={t9} vurgu="9 IN 10" not="WERE WOMEN" x={1080} y={440} genislik={460} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S10;
