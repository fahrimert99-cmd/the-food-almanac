// Sahne 29 — değerler ortalamadır; çok aktifler ve sıcak iklimde yaşayanlar daha fazlasına ihtiyaç duyabilir.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800]);
  const tB = K(1, "people") - 0.1;
  const A = [{ i: "healthy,", m: "HEALTHY" }, { i: "sedentary", m: "MOSTLY SEDENTARY" }, { i: "mild", m: "MILD CLIMATES" }];
  const B = [{ i: "hot", m: "HOT CLIMATES" }];
  const pil = (m: string, bas: number, y: number, renk: string, bitis = 1e9) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    return a > 0 ? (
      <div key={m} style={{ position: "absolute", left: 1010, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a }}>
        <Hap metin={m} renk={renk} boyut={26} />
      </div>
    ) : null;
  };
  return (
    <>
      <Kamera gorsel="tam/29" pencere={p}>
        <Etiket t={t} bas={K(1, "very")} capa={[1100, 700]} konum={[1500, 620]} metin="VERY ACTIVE" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "averages")} bitis={tB} metin="AVERAGES" x={1010} y={190} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(0, "not")} bitis={tB} metin="NOT STRICT TARGETS" x={1010} y={290} boyut={60} renk={RENK.altin} />
      {A.map((a, k) => pil(a.m, K(0, a.i), 360 + k * 70, RENK.lacivert, tB))}
      <Baslik t={t} bas={K(1, "may")} metin="MAY NEED MORE" x={1010} y={190} boyut={96} renk={RENK.mercan} />
      {B.map((b) => pil(b.m, K(1, b.i), 330, RENK.altin))}
    </>
  );
};

export default S29;
