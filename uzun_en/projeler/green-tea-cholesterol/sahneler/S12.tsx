// Sahne 12 — 2020 meta-analizi sonucu: toplam kolesterol, LDL, HDL, trigliserit.
import React from "react";
import { Baslik, CubukGrafik, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 40, 1850])} />
      <Baslik t={t} bas={K(0, "cholesterol")} metin="CHOLESTEROL" x={1860} y={200} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "4.7")} metin="CHANGE IN mg/dL" x={1860} y={282} hiza="sag" boyut={28} agirlik={800} renk={RENK.gri} />
      <CubukGrafik t={t} bas={K(0, "4.7") - 0.2} x={1300} y={470} w={560} h={290} maks={5.4}
        cubuklar={[
          { etiket: "TOTAL", deger: 4.7, metin: "–4.7", renk: RENK.altin, bas: K(0, "4.7") - 0.3 },
          { etiket: "LDL", deger: 4.5, metin: "–4.5", renk: RENK.yesil, bas: K(0, "LDL,") + 0.5 },
          { etiket: "HDL", deger: 0, metin: "0", renk: RENK.gri, bas: K(1, "HDL,") },
        ]} />
      <Not t={t} bas={K(1, "did")} metin="NO CHANGE" x={1767} y={620} hiza="orta" boyut={24} agirlik={800} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "triglycerides")} metin="TRIGLYCERIDES: SMALL DROP, NOT STATISTICALLY CLEAR" x={1860} y={850} hiza="sag" genislik={560} boyut={28} agirlik={800} renk={RENK.mercan} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} />}
    </>
  );
};

export default S12;
