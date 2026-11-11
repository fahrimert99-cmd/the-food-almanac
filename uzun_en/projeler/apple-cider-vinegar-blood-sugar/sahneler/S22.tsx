// Sahne 22 — Açlık kan şekeri −14 mg/dL: sağ üstte başlık + rozet, glukometreye etiket.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFast = K(0, "fasting"), tSugar = K(0, "sugar"), t08 = K(0, "0.8"), t14 = K(0, "14");
  const tModest = K(1, "modest"), tThree = K(1, "three");
  const [sc, al] = pop(t, t08, 0.5);
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1760])}>
        <Etiket t={t} bas={tSugar} capa={[1180, 860]} konum={[1050, 770]} metin="BLOOD SUGAR METER" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={tFast} satirlar={s.meta.baslik!.satirlar} x={1860} y={170} boyut={110} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <div style={{ position: "absolute", left: 1020, top: 400, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="≈ 0.8 MMOL/L" renk={RENK.altin} boyut={36} />
      </div>
      <VurguRozet t={t} bas={t14} vurgu={s.meta.baslik!.vurgu ?? ""} not={s.meta.baslik!.not} x={1560} y={400} genislik={460} renk={RENK.koyuYesil} />
      <Not t={t} bas={tModest} metin="A MODEST CHANGE" x={1860} y={610} hiza="sag" boyut={40} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={tThree} metin="from only three small trials" x={1860} y={665} hiza="sag" boyut={32} agirlik={600} renk={RENK.gri} />
    </>
  );
};

export default S22;
