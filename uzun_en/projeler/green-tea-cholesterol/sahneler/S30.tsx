// Sahne 30 — Cochrane 2013: 11 deneme, kalp sonucu yok.
import React from "react";
import { Baslik, Etiket, Ikon, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const m = s.meta;
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [50, 60, 1780])} />
      {m.etiket && <KaynakEtiketi t={t} metin={m.etiket} bas={K(1, "Cochrane")} />}
      <Ikon t={t} bas={K(0, "trial")} ad="carpi" zemin={RENK.mercan} x={150} y={345} boyut={84} />
      <Baslik t={t} bas={K(1, "11")} metin="11 TRIALS" x={1860} y={250} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(1, "821")} vurgu="821" not="participants" x={1560} y={340} boyut={100} genislik={340} />
      <Baslik t={t} bas={K(1, "reported")} metin="NO HEART DATA" x={1860} y={600} boyut={104} hiza="sag" renk={RENK.mercan} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(1, "heart")} capa={[290, 560]} konum={[330, 220]} metin="HEART ATTACKS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "outcome")} capa={[850, 720]} konum={[1380, 800]} metin="NO OUTCOMES" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S30;
