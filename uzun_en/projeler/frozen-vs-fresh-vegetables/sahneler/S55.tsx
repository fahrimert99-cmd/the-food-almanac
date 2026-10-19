// Sahne 55 — Tabakta sebze: üstte boş kâğıtta kinetik başlık, nesne etiketleri.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t2 = s.cumleler[1].bas;
  return (
    <>
      {/* alt kenardaki sahte yazı ve imza dışarıda kalsın diye pencere y<=934 */}
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1660], [30, 0, 1620])}>
        <Etiket t={t} bas={K(1, "vegetables")} capa={[560, 330]} konum={[380, 250]} metin="BROCCOLI" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "more")} capa={[1100, 340]} konum={[800, 140]} metin="GREEN BEANS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "plate")} capa={[1100, 500]} konum={[1500, 330]} metin="CARROT" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "best")} bitis={t2 - 0.1} metin="THE BEST VEGETABLES" x={80} y={150} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "ones")} bitis={t2 - 0.1} metin="ARE THE ONES YOU EAT" x={80} y={245} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(1, "goal")} vurgu="MORE VEGETABLES" not="fresh or frozen" x={1380} y={110} genislik={520} boyut={72} renk={RENK.yesil} />
    </>
  );
};

export default S55;
