// Sahne 57 — sonuç: portakalı keyifle ye, takviyeyi ılımlı tut; C vitamini şifa değil.
import React from "react";
import { Baslik, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const panel = eout(ilerle(t, K(0, "keep") - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])} />
      <Etiket t={t} bas={K(0, "orange")} bitis={K(0, "keep")} capa={[830, 520]} konum={[1560, 330]} metin="ENJOY THE ORANGE" renk={RENK.altin} />
      <Panel a={panel} taraf="sag" genislik={900} />
      <Baslik t={t} bas={K(0, "keep")} metin="KEEP SUPPLEMENTS" x={1860} y={250} boyut={80} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "modest.")} metin="MODEST" x={1860} y={340} boyut={80} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 450, width: 560, height: 5, background: RENK.altin, opacity: eout(ilerle(t, K(1, "helpful") - 0.3, 0.5)) }} />
      <Baslik t={t} bas={K(1, "helpful")} metin="A HELPFUL NUTRIENT" x={1860} y={560} boyut={64} renk={RENK.yesil} hiza="sag" />
      <Baslik t={t} bas={K(1, "not")} metin="NOT A COLD CURE" x={1860} y={650} boyut={64} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S57;
