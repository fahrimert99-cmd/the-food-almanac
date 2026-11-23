// Sahne 2 — "saat erken başlar": saat, ocaktaki tencere ve buzdolabı; sağda 3–4 gün sonra başlık.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S02: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780]);
  return (
    <>
      <Kamera gorsel="tam/02" pencere={w}>
        {/* kadran üstündeki anlamsız yazıyı örter */}
        <div style={{ position: "absolute", left: 420, top: 190, width: 110, height: 70,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #EFE6CE 0%, #EFE6CE 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "clock")} bitis={K(1, "food") - 0.2} capa={[520, 330]} konum={[690, 560]} metin="WALL CLOCK" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "food")} capa={[330, 750]} konum={[310, 905]} metin="POT ON THE STOVE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "refrigerator")} capa={[900, 520]} konum={[1020, 905]} metin="REFRIGERATOR" renk={RENK.yesil} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "three")} bitis={K(1, "clock") - 0.1} vurgu="3–4 DAYS" not="THE USUAL RULE" x={1610} y={300} genislik={470} />
      <BaslikBlok t={t} bas={K(1, "clock")} satirlar={["THE CLOCK", "STARTS EARLY"]} x={1390} y={330} boyut={78}
        renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S02;
