// Sahne 37 — diğer sınırlar: üç yıl kısa, gönüllüler sağlıklı başladı.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800])}>
        {/* tabeladaki anlamsız yazıyı bulanıklaştır */}
        <div style={{ position: "absolute", left: 845, top: 612, width: 130, height: 62, backdropFilter: "blur(9px)",
          background: "rgba(150,140,125,0.45)", borderRadius: 6 }} />
      </Kamera>
      {/* sağdaki görsel kenarını örten kâğıt */}
      <div style={{ position: "absolute", top: 0, bottom: 0, right: 0, width: 960, opacity: eout(ilerle(t, 0.1, 0.6)),
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 16%, ${kagit(1)} 100%)` }} />
      <Baslik t={t} bas={K(1, "Three")} metin={b.satirlar[0]} x={1860} y={260} boyut={150} renk={RENK.koyuYesil} hiza="sag" />
      {b.not && <Not t={t} bas={K(1, "short")} metin={b.not} x={1860} y={370} hiza="sag" genislik={560} boyut={36} />}
      <Etiket t={t} bas={K(1, "decades,")} capa={[600, 575]} konum={[330, 420]} metin="DECADES" renk={RENK.altin} />
      <Not t={t} bas={K(1, "volunteers")} metin="Volunteers started with healthy thinking." x={1860} y={600} hiza="sag" genislik={560} boyut={36} />
      <Ikon t={t} bas={K(2, "longer")} ad="soru" x={1280} y={800} zemin={RENK.altin} boyut={84} />
      <Not t={t} bas={K(2, "longer")} metin="A real difference could take longer to appear, or may not exist." x={1860} y={760} hiza="sag" genislik={500} boyut={34} />
    </>
  );
};

export default S37;
