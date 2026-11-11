// Sahne 18 — Kavanozlar ve karton: sekiz etiket, %87 emin, %53 doğru.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSekiz = K(0, "eight different");
  const t87 = K(1, "87 percent"), t53 = K(1, "53 percent");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1760])}>
        {/* görselin sağ kenarındaki sert kesiği kâğıtla yumuşat */}
        <div style={{ position: "absolute", left: 1000, top: 0, width: 920, height: 1080,
          background: `linear-gradient(to right, ${kagit(0)} 0px, ${kagit(1)} 40px, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={tSekiz} bitis={t87 - 0.2} capa={[260, 673]} konum={[560, 190]} metin="EIGHT LABELS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={t87} metin="87% SURE" x={1860} y={400} boyut={130} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={t87 + 0.3} metin="SAID THEY KNEW THE LABELS" x={1860} y={480} hiza="sag" boyut={32} agirlik={800} />
      <Baslik t={t} bas={t53} metin="53% RIGHT" x={1860} y={650} boyut={130} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={t53 + 0.3} metin="ANSWERED CORRECTLY" x={1860} y={730} hiza="sag" boyut={32} agirlik={800} />
    </>
  );
};

export default S18;
