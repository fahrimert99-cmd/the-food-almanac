// Sahne 48 — ipucu 2: yaklaşık bir bardak.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [60, 60, 1800])} />
      <Baslik t={t} bas={0.05} metin="TWO" x={90} y={130} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "amount")} x={90} y={215} metin="START WITH THE STUDIED AMOUNT" boyut={34} agirlik={800} genislik={520} />
      <Etiket t={t} bas={K(1, "studied")} capa={[1230, 500]} konum={[760, 480]} metin="STUDIED AMOUNT" renk={RENK.lacivert} bitis={K(2, "250") - 0.1} />
      <VurguRozet t={t} bas={K(2, "250")} vurgu="250 ML" not="about one cup, a day" x={400} y={430} genislik={520} bitis={K(3, "bigger") - 0.1} />
      <Not t={t} bas={K(3, "bigger")} x={90} y={380} metin="BIGGER DOSES = LARGER DROPS" boyut={44} agirlik={800} genislik={700} />
      <Not t={t} bas={K(3, "pooled")} x={90} y={500} metin="in the pooled data" boyut={38} genislik={700} />
      <Not t={t} bas={K(3, "not")} x={90} y={560} metin="BUT NOT PROOF THAT MORE IS SAFER" boyut={44} agirlik={800} renk={RENK.mercan} genislik={700} />
    </>
  );
};

export default S48;
