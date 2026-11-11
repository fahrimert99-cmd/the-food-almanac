// Sahne 7 — NOVA grup 1 ve 2: nesne etiketleri, sonra malzeme hapları.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const g2 = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [20, 20, 1880], [100, 70, 1740])}>
        <Etiket t={t} bas={K(0, "fruit")} bitis={g2} capa={[330, 650]} konum={[200, 400]} metin="FRUIT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "vegetables")} bitis={g2} capa={[760, 420]} konum={[860, 160]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "eggs")} bitis={g2} capa={[1150, 520]} konum={[1180, 270]} metin="EGGS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "plain milk")} bitis={g2} capa={[1540, 560]} konum={[1690, 180]} metin="PLAIN MILK" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(1, "butter")} capa={[1280, 710]} konum={[1280, 890]} metin="BUTTER" renk={RENK.altin} />
      </Kamera>
      {/* grup 1 başlığı */}
      <Baslik t={t} bas={K(0, "Group")} bitis={g2} metin="GROUP 1" x={70} y={100} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "unprocessed")} bitis={g2} metin="UNPROCESSED OR MINIMALLY PROCESSED" x={74} y={170} boyut={30} agirlik={800} renk={RENK.altin} />
      {/* grup 2 başlığı ve malzeme hapları */}
      <Baslik t={t} bas={K(1, "Group")} metin="GROUP 2" x={70} y={100} boyut={96} renk={RENK.altin} />
      <Not t={t} bas={K(1, "kitchen")} metin="KITCHEN INGREDIENTS" x={74} y={170} boyut={30} agirlik={800} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 74, top: 240, display: "flex", gap: 16 }}>
        {[["OIL", "oil,"], ["SUGAR", "sugar."]].map(([m, f]) => {
          const [sc, al] = pop(t, K(1, f), 0.45);
          return (
            <div key={m} style={{ transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`,
              borderRadius: 999, padding: "8px 24px", fontFamily: ANTON, fontSize: 40, letterSpacing: 2, color: RENK.lacivert }}>{m}</div>
          );
        })}
      </div>
    </>
  );
};

export default S07;
