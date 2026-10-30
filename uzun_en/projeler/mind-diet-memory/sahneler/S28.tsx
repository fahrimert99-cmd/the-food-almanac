// Sahne 28 — tasarım ayrıntısı: çalışma masası; sağdaki boş kâğıtta iki sütun metin.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[2].bas - 0.15;
  const [sc, al] = pop(t, K(1, "dietitians") - 0.2, 0.5);
  const a = al * sol(t, cik);
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])}>
        <Etiket t={t} bas={K(0, "key")} bitis={c[1].bas} capa={[480, 440]} konum={[900, 70]} metin="KEY DESIGN DETAIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(1, "Both")} bitis={cik} metin="BOTH GROUPS" x={1500} y={150} boyut={68} renk={RENK.lacivert} />
      <Not t={t} bas={K(1, "eat")} bitis={cik} metin="asked to eat a little less" x={1504} y={215} genislik={380} boyut={32} agirlik={700} />
      <Baslik t={t} bas={K(1, "got")} bitis={cik} metin="GOT COACHING" x={1500} y={345} boyut={68} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1504, top: 395, opacity: a, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
        <Hap metin="FROM DIETITIANS" renk={RENK.yesil} boyut={28} />
      </div>
      <Baslik t={t} bas={K(2, "tougher")} metin="A TOUGHER" x={1500} y={200} boyut={76} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "test")} metin="TEST" x={1500} y={275} boyut={76} renk={RENK.koyuYesil} />
      {(() => { const [c2, a2] = pop(t, K(2, "comparing"), 0.5); return (
        <div style={{ position: "absolute", left: 1504, top: 330, opacity: a2, transform: `scale(${c2})`, transformOrigin: "0% 50%" }}>
          <Hap metin="VS A USUAL DIET" renk={RENK.altin} boyut={28} />
        </div>); })()}
    </>
  );
};
export default S28;
