// Sahne 38 — Yorgunluk ve halsizlik (NIH, anemi). Koltuk solda; başlık sağ boş kâğıtta. Alttaki kitap kadraj dışında.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCik = K(1, "Many") - 0.15;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [100, 0, 1640], [130, 0, 1640])}>
        <Etiket t={t} bas={K(1, "normal")} capa={[390, 620]} konum={[830, 640]} metin="NORMAL AGING?" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "National")} bitis={tCik} metin="NATIONAL INSTITUTES OF HEALTH" x={1860} y={190} boyut={30} hiza="sag"
        renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={K(0, "tiredness")} bitis={tCik} metin="TIRED AND" x={1860} y={330} boyut={140} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "weakness,")} bitis={tCik} metin="WEAK" x={1860} y={490} boyut={140} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "linked")} bitis={tCik} metin="linked to a type of anemia" x={1860} y={600} boyut={38} hiza="sag" genislik={700}
        agirlik={700} />
      <BaslikBlok t={t} bas={K(1, "shrug")} satirlar={["SHRUGGED", "OFF"]} x={1860} y={330} boyut={140} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Not t={t} bas={K(1, "normal")} metin="as a normal part of getting older" x={1860} y={640} boyut={38} hiza="sag" genislik={700}
        agirlik={700} />
    </>
  );
};

export default S38;
