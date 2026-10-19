// Sahne 22 — buzdolabı çekmecesi: taze brokoli, dondurulmuş poşet; "fazla avantaj yok".
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFroz = K(1, "frozen"), tDays = K(2, "a few days"), tAdv = K(2, "advantage"), tNut = K(2, "these nutrients");
  const bit = tAdv - 0.15;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 40, 1760])} />
      <AltSis a={0.5} />
      {/* 2. cümle: dondurulmuş poşet */}
      <Etiket t={t} bas={tFroz} bitis={bit} capa={[1050, 620]} konum={[1070, 190]} metin="FROZEN" renk={RENK.yesil} />
      {/* 3. cümle: buzdolabında günler geçirmiş taze brokoli */}
      <Etiket t={t} bas={tDays} bitis={bit} capa={[480, 330]} konum={[480, 150]} metin="FRESH, A FEW DAYS IN" renk={RENK.mercan} />
      {/* avantaj çoğunlukla yok: çekmece önünde bant */}
      <Baslik t={t} bas={tAdv} metin="FRESH'S EDGE: MOSTLY GONE" x={960} y={862} boyut={74} renk={RENK.lacivert} hiza="orta"
        style={{ background: "rgba(246,243,236,0.9)", padding: "0 34px", borderRadius: 16 }} />
      <div style={{ position: "absolute", left: 560, width: 800, top: 28, textAlign: "center", background: "rgba(246,243,236,0.92)", borderRadius: 14, padding: "6px 0" }}>
        <Not t={t} bas={tNut} metin="AT LEAST FOR THESE NUTRIENTS" x={400} y={0} hiza="orta" boyut={34} agirlik={800} />
      </div>
    </>
  );
};

export default S22;
