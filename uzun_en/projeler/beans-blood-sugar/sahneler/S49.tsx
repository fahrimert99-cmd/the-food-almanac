// Sahne 49 — soğuk açılışa dönüş: fasulye de yüksek lifli karşılaştırma diyeti de işe yaradı
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, ANTON, INTER, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(2, "Beans") - 0.1;
  const oge = [
    { bas: K(2, "fiber,"), metin: "FIBER" },
    { bas: K(2, "protein"), metin: "PROTEIN" },
    { bas: K(2, "slower"), metin: "SLOWER CARB" },
  ];
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* 1. cümle: iki kase */}
        <Etiket t={t} bas={K(1, "beans")} bitis={tSon} capa={[420, 330]} konum={[420, 120]} metin="BEANS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "high")} bitis={tSon} capa={[1270, 330]} konum={[1310, 120]} metin="HIGH-FIBER DIET" renk={RENK.altin} />
        <Ikon t={t} bas={K(1, "helped,")} bitis={tSon} x={420} y={650} boyut={96} ad="onay" zemin={RENK.yesil} />
        <Ikon t={t} bas={K(1, "helped too") } bitis={tSon} x={1280} y={650} boyut={96} ad="onay" zemin={RENK.altin} />
        {/* 3. cümle: tek yiyecek */}
        <Etiket t={t} bas={K(2, "one")} capa={[420, 400]} konum={[420, 660]} metin="ONE FOOD" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "cold")} bitis={K(1, "The") - 0.1} metin="THE COLD OPEN" x={960} y={100} boyut={90} renk={RENK.lacivert} hiza="orta" />
      {/* üç özellik: lif + protein + yavaş karbonhidrat */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 70, display: "flex", justifyContent: "center", alignItems: "center", gap: 22 }}>
        {oge.map((o, i) => {
          const [sc, al] = pop(t, o.bas - 0.1, 0.5);
          return (
            <React.Fragment key={o.metin}>
              {i > 0 && <span style={{ opacity: al, fontFamily: ANTON, fontSize: 48, color: RENK.altin }}>+</span>}
              <div style={{ transform: `scale(${sc})`, opacity: al }}>
                <Hap metin={o.metin} renk={RENK.yesil} boyut={34} />
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div style={{ position: "absolute", left: 0, right: 0, top: 178, textAlign: "center", opacity: sol(t, 1e9) * pop(t, K(2, "food") - 0.1, 0.5)[1],
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 3, color: RENK.koyuYesil }}>ALL IN ONE FOOD</div>
    </>
  );
};

export default S49;
