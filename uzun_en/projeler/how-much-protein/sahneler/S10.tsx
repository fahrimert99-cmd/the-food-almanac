// Sahne 10 — "Bağlantı, kanıt değil": iki tabak, büyüteç; karıştırıcı farklar sorusu; denemelere işaret.
import React from "react";
import { BaslikBlok, Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLink = K(0, "link"), tMore = K(1, "more protein"), tDiffer = K(1, "differ"), tTrials = K(2, "trials");
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [90, 170, 1720])}>
        {/* büyük porsiyonlu tabak */}
        <Etiket t={t} bas={tMore} bitis={tTrials - 0.2} capa={[1320, 730]} konum={[1560, 450]} metin="MORE PROTEIN" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: sol üst başlık */}
      <BaslikBlok t={t} bas={tLink - 0.1} bitis={tTrials - 0.1} satirlar={["A LINK,", "NOT PROOF"]} x={100} y={150} boyut={108}
        renkler={[RENK.lacivert, RENK.mercan]} />
      {/* 2. cümle: sağ üstte soru işareti + not */}
      <Ikon t={t} bas={tDiffer} ad="soru" x={1560} y={170} zemin={RENK.altin} />
      <Not t={t} bas={tDiffer + 0.1} metin="MAY DIFFER IN OTHER WAYS" x={1560} y={235} hiza="orta" genislik={520} boyut={34} agirlik={800} />
      {/* 3. cümle: denemeler */}
      <Baslik t={t} bas={tTrials} metin="FITS THE TRIALS" x={100} y={170} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "few minutes")} metin="we'll get to them in a few minutes" x={104} y={240} boyut={32} genislik={560} agirlik={600} />
    </>
  );
};

export default S10;
