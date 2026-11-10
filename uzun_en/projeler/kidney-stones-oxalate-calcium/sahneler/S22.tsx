// Sahne 22 — kalsiyum hapları: etiket, +20% rozeti, sonra "FOOD VS PILLS" sağ sütunda.
import React from "react";
import { AltSis, kagit, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tSoru = K(2, "Why");
  const tFood = K(2, "food");
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1780])}>
        {/* masa kenarının sert kesimini kâğıda eritir */}
        <div style={{ position: "absolute", left: 1235, top: 540, width: 130, height: 540,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 85%)` }} />
        <Etiket t={t} bas={K(0, "pills")} bitis={tSoru} capa={[860, 840]} konum={[1560, 880]} metin="CALCIUM PILLS" renk={RENK.mercan} />
        <Etiket t={t} bas={tFood} capa={[1067, 520]} konum={[1560, 560]} metin="CALCIUM FROM FOOD" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "pills")} capa={[900, 860]} konum={[1560, 880]} metin="CALCIUM PILLS" renk={RENK.mercan} />
      </Kamera>
      <AltSis a={0.8} />
      <VurguRozet t={t} bas={K(1, "20 percent")} bitis={tSoru - 0.1} vurgu="+20%" not="stone risk in women taking calcium pills" x={1570} y={220}
        genislik={440} renk={RENK.mercan} />
      <Baslik t={t} bas={tFood} metin={b.satirlar[0]} x={1380} y={230} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(2, "pills")} metin={b.satirlar[1]} x={1380} y={345} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S22;
