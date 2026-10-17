// Sahne 31 — dürüst boşluk: incelemedeki her ürün bir takviyeydi.
import React from "react";
import { Etiket, Ikon, Kamera, Not, RENK, SP, BaslikBlok, kagit, kameraYolu, kelimeZamani, eout, ilerle } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tOlcul = K(2, "measured");
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1800])}>
        <Etiket t={t} bas={K(1, "supplement")} bitis={K(2, "Raw") - 0.1} capa={[845, 440]} konum={[560, 150]}
          metin="SUPPLEMENT" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "Raw")} capa={[330, 520]} konum={[250, 160]} metin="RAW" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "cooked")} capa={[520, 650]} konum={[560, 880]} metin="COOKED" renk={RENK.mercan} />
      </Kamera>
      {/* görselin sağ kenarı: yumuşak kâğıt geçişi */}
      <div style={{ position: "absolute", top: 0, bottom: 0, left: 1130, right: 0, opacity: eout(ilerle(t, 0, 0.4)),
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 16%, ${kagit(1)} 100%)` }} />
      <BaslikBlok t={t} bas={K(0, "honest")} satirlar={b.satirlar} x={1860} y={250} boyut={120} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "supplement")} metin={b.not!} x={1860} y={520} hiza="sag" genislik={520} boyut={36} />
      <Ikon t={t} bas={tOlcul - 0.2} ad="carpi" x={1450} y={760} zemin={RENK.mercan} />
      <Not t={t} bas={tOlcul - 0.2} metin="KITCHEN GARLIC: NOT MEASURED" x={1860} y={725} hiza="sag" genislik={360} boyut={32} agirlik={800} />
    </>
  );
};

export default S31;
