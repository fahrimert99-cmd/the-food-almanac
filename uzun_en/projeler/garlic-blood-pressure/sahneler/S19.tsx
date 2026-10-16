// Sahne 19 — çift kör: iki şişe, "kim hangisini aldı?" sorusu. Pencere kitaptan yukarıda kalır.
import React from "react";
import { Baslik, BaslikBlok, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.1, 0.6));
  const tKim = K(0, "who");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [100, 0, 996], [140, 12, 940])}>
        <Ikon t={t} bas={tKim} ad="soru" x={367} y={390} boyut={64} zemin={RENK.altin} />
        <Ikon t={t} bas={tKim + 0.2} ad="soru" x={653} y={360} boyut={64} zemin={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={760} opak={0.97} />
      <BaslikBlok t={t} bas={K(0, "Neither")} satirlar={["NEITHER", "KNEW"]} x={1860} y={290} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Baslik t={t} bas={K(1, "double-blind,")} metin="DOUBLE-BLIND" x={1860} y={600} boyut={96} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(1, "guards")} metin="GUARDS AGAINST WISHFUL THINKING" x={1860} y={690} hiza="sag" boyut={34} agirlik={800} genislik={640} />
    </>
  );
};

export default S19;
