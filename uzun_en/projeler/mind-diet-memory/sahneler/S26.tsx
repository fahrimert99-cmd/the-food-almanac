// Sahne 26 — çalışma künyesi: iki masalı odanın pencere boşluğunda değişen kart.
import React from "react";
import { Baslik, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, kagit, sayac } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const a = eout(ilerle(t, 0.6, 0.5));
  const f1 = K(0, "funded") - 0.15, f2 = K(0, "published") - 0.15, f3 = K(1, "It") - 0.1;
  const X = 960;
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      {/* kart zemini (pencere bölgesi) */}
      <div style={{ position: "absolute", left: X - 300, top: 120, width: 600, height: 330, opacity: a, borderRadius: 28,
        background: kagit(0.94), boxShadow: "0 12px 30px rgba(48,40,34,0.2)", border: `3px solid ${RENK.altin}` }} />
      {/* 1: kim yürüttü */}
      <Not t={t} bas={K(0, "led")} bitis={f1} metin="LED BY" x={X} y={150} hiza="orta" boyut={28} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "Lisa")} bitis={f1} metin="LISA BARNES" x={X} y={250} boyut={78} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Rush")} bitis={f1} metin="RUSH UNIVERSITY" x={X} y={345} boyut={50} hiza="orta" renk={RENK.koyuYesil} />
      {/* 2: kim fonladı */}
      <Not t={t} bas={K(0, "funded")} bitis={f2} metin="FUNDED BY" x={X} y={150} hiza="orta" boyut={28} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "National")} bitis={f2} metin="NATIONAL INSTITUTE" x={X} y={250} boyut={58} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Aging")} bitis={f2} metin="ON AGING" x={X} y={335} boyut={58} hiza="orta" renk={RENK.koyuYesil} />
      {/* 3: nerede yayımlandı */}
      <Not t={t} bas={K(0, "published")} bitis={f3} metin="PUBLISHED IN" x={X} y={150} hiza="orta" boyut={28} agirlik={800} renk={RENK.altin} />
      <Baslik t={t} bas={K(0, "New")} bitis={f3} metin="NEW ENGLAND JOURNAL" x={X} y={240} boyut={50} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Medicine")} bitis={f3} metin="OF MEDICINE" x={X} y={310} boyut={50} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "2023")} bitis={f3} metin="2023" x={X} y={395} boyut={56} hiza="orta" renk={RENK.koyuYesil} />
      {/* 4: katılımcılar */}
      <Baslik t={t} bas={K(1, "604") - 0.1} metin={sayac(t, K(1, "604") - 0.1, 604, 1.0)} x={X} y={235} boyut={120} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "adults")} metin="ADULTS AGED 65 OR OLDER" x={X} y={310} hiza="orta" boyut={30} agirlik={800} />
      <Not t={t} bas={K(1, "no")} metin="NO MEMORY PROBLEMS" x={X} y={365} hiza="orta" boyut={30} agirlik={800} renk={RENK.yesil} />
    </>
  );
};
export default S26;
