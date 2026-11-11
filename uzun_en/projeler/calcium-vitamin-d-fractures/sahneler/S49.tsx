// Sahne 49 — güvenlik notu: sağdaki boş kâğıt üzerinde üç madde.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, Not, Baslik, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const SATIRLAR = [
  { ifade: "never", baslik: "NEVER STOP", not: "an osteoporosis medicine", ad: "carpi" as const, renk: RENK.mercan, y: 470 },
  { ifade: "start", baslik: "NEVER START", not: "high-dose pills on your own", ad: "carpi" as const, renk: RENK.mercan, y: 640 },
  { ifade: "Ask", baslik: "ASK FIRST", not: "your doctor or pharmacist about interactions", ad: "onay" as const, renk: RENK.yesil, y: 810 },
];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        <Etiket t={t} bas={K(1, "medicine,")} bitis={K(2, "Ask")} capa={[565, 330]} konum={[800, 150]} metin="MEDICINE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "pills,")} bitis={K(2, "Ask")} capa={[600, 620]} konum={[840, 900]} metin="PILLS" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "safety")} satirlar={["SAFETY", "FIRST"]} x={1180} y={190} boyut={120} />
      {SATIRLAR.map((r, i) => {
        const b = i === 2 ? K(2, r.ifade) : K(1, r.ifade);
        return (
          <React.Fragment key={r.baslik}>
            <Ikon t={t} bas={b} ad={r.ad} x={1220} y={r.y + 30} boyut={72} zemin={r.renk} />
            <Baslik t={t} bas={b + 0.1} metin={r.baslik} x={1290} y={r.y} boyut={60} renk={r.renk} />
            <Not t={t} bas={b + 0.25} metin={r.not} x={1292} y={r.y + 44} boyut={30} genislik={560} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S49;
