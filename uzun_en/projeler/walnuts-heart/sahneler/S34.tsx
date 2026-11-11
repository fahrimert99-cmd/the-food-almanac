// Sahne 34 — iki eşit kefe: anlamlı fark yok. Sağ tarafta başlık ve "tie" rozeti.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <Etiket t={t} bas={K(1, "0.072")} capa={[300, 560]} konum={[290, 740]} metin="WALNUTS: –0.072" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "0.086")} capa={[900, 560]} konum={[990, 740]} metin="WALNUT-FREE: –0.086" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "no")} satirlar={b.satirlar} x={1180} y={260} boyut={88} />
      <Not t={t} bas={K(0, "difference") + 0.3} metin={b.not!} x={1180} y={470} boyut={32} genislik={640} />
      <VurguRozet t={t} bas={K(2, "tie")} vurgu="= TIE" not="statistically" x={1500} y={640} genislik={380} />
    </>
  );
};

export default S34;
