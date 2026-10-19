// Sahne 16 — Bouzari 2015: sekiz gıda, soğutulmuş ve dondurulmuş
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tE = K(0, "eight"), tL = K(0, "broccoli,");
  return (
    <>
      {/* alt kenardaki sahte imza yazıları pencere dışında kalır (alt ≤ 976) */}
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [70, 20, 1700], [150, 30, 1640])}>
        <Etiket t={t} bas={tL} capa={[250, 540]} konum={[440, 330]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "peas,")} capa={[1170, 640]} konum={[1020, 400]} metin="PEAS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "carrots")} capa={[780, 600]} konum={[700, 340]} metin="CARROTS" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <Baslik t={t} bas={K(0, "2015,")} bitis={tE - 0.2} metin="2015" x={100} y={190} boyut={120} renk={RENK.altin} />
      <Not t={t} bas={K(0, "Bouzari")} bitis={tE - 0.2} metin="ALI BOUZARI · DIANE BARRETT" x={104} y={270} boyut={34} agirlik={800} />
      <Baslik t={t} bas={tE} bitis={tL - 0.3} metin="8 FOODS" x={100} y={190} boyut={120} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "kept")} bitis={tL - 0.3} metin="REFRIGERATED OR FROZEN" x={104} y={270} boyut={34} agirlik={800} />
    </>
  );
};

export default S16;
