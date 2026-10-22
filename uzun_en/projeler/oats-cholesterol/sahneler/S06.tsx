// Sahne 6 — beta-glukan, çözünür lif, jel
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={p}>
        <Etiket t={t} bas={K(0, "Oats")} bitis={c[1].bas - 0.1} capa={[600, 800]} konum={[1000, 880]} metin="OATS" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.8))} genislik={760} />
      <Baslik t={t} bas={K(0, "beta-glucan")} metin={s.meta.baslik!.satirlar[0]} x={1860} y={270} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "soluble")} metin={s.meta.baslik!.not!} x={1860} y={340} hiza="sag" boyut={34} />
      <Baslik t={t} bas={K(1, "dissolves")} metin="DISSOLVES IN WATER" x={1860} y={560} boyut={58} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "thick")} metin="THICK GEL" x={1860} y={680} boyut={110} hiza="sag" renk={RENK.altin} />
      <Not t={t} bas={K(1, "gut")} metin="in your gut" x={1860} y={760} hiza="sag" boyut={34} />
    </>
  );
};

export default S06;
