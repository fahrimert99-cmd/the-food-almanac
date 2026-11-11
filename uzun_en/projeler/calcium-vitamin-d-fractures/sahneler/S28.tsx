// Sahne 28 — fikir: takviye eksik olanlarda daha çok yarar sağlayabilir; kanıtlanmış kural değil; yaşlar 84 vs 50–79.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKisa = K(0, "short"), tFikir = K(1, "idea"), tYas = K(2, "average"), tWhi = K(2, "Women's");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 30, 1900], [120, 80, 1700])} />
      <Etiket t={t} bas={tKisa} bitis={6.4} capa={[570, 330]} konum={[420, 90]} metin="SHORT OF NUTRIENTS" renk={RENK.mercan} boyut={30} />
      <Baslik t={t} bas={tFikir - 0.1} bitis={8.9} metin="AN IDEA," x={540} y={110} boyut={80} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "not")} bitis={8.9} metin="NOT A PROVEN RULE" x={1150} y={110} boyut={80} hiza="orta" renk={RENK.mercan} />
      <Panel a={eout(ilerle(t, tYas - 0.3, 0.6))} taraf="sag" genislik={900} />
      <Baslik t={t} bas={tYas} metin="AVERAGE AGE 84" x={1860} y={220} boyut={70} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={tYas + 0.5} metin="these women, in care" x={1860} y={272} hiza="sag" boyut={30} genislik={600} />
      <VurguRozet t={t} bas={K(2, "50") - 0.1} vurgu="50–79" not="Women's Health Initiative" x={1460} y={420} renk={RENK.altin} genislik={500} boyut={96} />
    </>
  );
};

export default S28;
