// Sahne 9 — sodyum ve basınç: bardak (kan damarı yerine), ölçer; sağ boş kâğıtta başlık + etiketler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSu = K(1, "water,"), tBas = K(1, "pressure"), tRisk = K(2, "leading risk");
  const tKalp = K(2, "heart disease"), tFelc = K(2, "stroke.");
  const [s1, a1] = pop(t, tKalp, 0.5);
  const [s2, a2] = pop(t, tFelc, 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1760])}>
        <Etiket t={t} bas={tSu} bitis={tBas + 1.6} capa={[680, 600]} konum={[1180, 450]} metin="HOLDS MORE WATER" renk={RENK.yesil} />
        <Etiket t={t} bas={tBas} capa={[873, 793]} konum={[1440, 790]} metin="PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "sodium")} satirlar={b.satirlar} x={1860} y={190} boyut={96} hiza="sag" />
      <Not t={t} bas={tRisk} metin="A LEADING RISK FACTOR FOR" x={1860} y={500} hiza="sag" boyut={30} agirlik={800} renk={RENK.lacivert} />
      <div style={{ position: "absolute", right: 60, top: 560, transform: `scale(${s1})`, transformOrigin: "100% 50%", opacity: a1 }}>
        <Hap metin="HEART DISEASE" renk={RENK.mercan} boyut={32} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 650, transform: `scale(${s2})`, transformOrigin: "100% 50%", opacity: a2 }}>
        <Hap metin="STROKE" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

export default S09;
