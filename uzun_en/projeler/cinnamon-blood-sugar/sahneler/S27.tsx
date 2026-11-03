// Sahne 27 — Neden 3: tarçının kendisi (tür / bitki kısmı belirsiz).
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [190, 100, 1580])}>
        <Etiket t={t} bas={K(1, "species")} capa={[690, 480]} konum={[330, 250]} metin="WHICH SPECIES?" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "plant part")} capa={[1290, 680]} konum={[1560, 320]} metin="WHICH PLANT PART?" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "hard to interpret")} capa={[1020, 330]} konum={[1020, 120]} metin="HARD TO INTERPRET" renk={RENK.koyuYesil} />
      </Kamera>
      {/* giriş başlığı: sol üstte boş kâğıt zemin */}
      <Baslik t={t} bas={K(0, "Reason")} bitis={c[1].bas - 0.1} metin="REASON THREE" x={90} y={140} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "cinnamon")} bitis={c[1].bas - 0.1} metin="THE CINNAMON ITSELF" x={90} y={235} boyut={64} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} bas={K(1, "National")} metin="NATIONAL INSTITUTES OF HEALTH" />
    </>
  );
};

export default S27;
