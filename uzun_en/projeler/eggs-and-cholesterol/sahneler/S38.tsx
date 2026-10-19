// Sahne 38 — gözlemsel çalışmalar, karıştırıcılar, düzeltme: ~%10 yüksek → ~%7 düşük. Yazılar sağ sayfadaki boş kâğıtta.
// Alttaki iki sahte yazı kamera dışında tutulur (y+h <= 1030).
import React from "react";
import { Baslik, BaslikBlok, Etiket, Ikon, Kamera, Liste, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c = s.cumleler;
  const b = s.meta.baslik!;
  const c1 = c[2].bas - 0.15;  // 1. ve 2. cümle grupları çıkar
  const c2 = c[3].bas - 0.15;  // 3. cümle grubu çıkar
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [40, 0, 1800], [140, 0, 1650])}>
        <Etiket t={t} bas={K(2, "eggs")} bitis={c2} capa={[640, 740]} konum={[760, 470]} metin="MORE EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "differently")} bitis={c2} capa={[230, 790]} konum={[360, 420]} metin="EATS DIFFERENTLY" renk={RENK.yesil} />
      </Kamera>
      {/* 1. cümle: gözlemsel */}
      <Baslik t={t} bas={K(0, "observational")} bitis={c1} metin="OBSERVATIONAL" x={1850} y={200} boyut={100} hiza="sag" renk={RENK.lacivert} />
      {/* 2. cümle: bağ var, neden-sonuç yok */}
      <Liste t={t} x={1040} y={380} isaret="onay" ogeler={[{ bas: K(1, "link,"), metin: "A LINK", renk: RENK.yesil, bitis: c1 }]} boyut={44} genislik={700} />
      <Liste t={t} x={1040} y={480} isaret="carpi" ogeler={[{ bas: K(1, "cause"), metin: "NOT A CAUSE", renk: RENK.mercan, bitis: c1 }]} boyut={44} genislik={700} />
      {/* 3. cümle: başka alışkanlıklar */}
      <Baslik t={t} bas={K(2, "second")} bitis={c2} metin="SECOND" x={1850} y={200} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "other")} bitis={c2} metin="OTHER HABITS" x={1850} y={320} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
      {/* 4. cümle: düzeltme */}
      <BaslikBlok t={t} bas={K(3, "adjusting")} satirlar={b.satirlar} x={1850} y={170} boyut={92} hiza="sag" />
      <Not t={t} bas={K(3, "Harvard")} metin="Harvard data, risk estimate" x={1450} y={560} hiza="orta" boyut={34} genislik={800} />
      <VurguRozet t={t} bas={K(3, "10")} vurgu="+10%" not="before adjusting" x={1250} y={620} genislik={340} boyut={92} renk={RENK.mercan} />
      <Ikon t={t} bas={K(3, "to")} ad="ok" x={1450} y={710} boyut={72} zemin={RENK.lacivert} />
      <VurguRozet t={t} bas={K(3, "7")} vurgu="−7%" not="after adjusting" x={1650} y={620} genislik={340} boyut={92} renk={RENK.yesil} />
    </>
  );
};

export default S38;
