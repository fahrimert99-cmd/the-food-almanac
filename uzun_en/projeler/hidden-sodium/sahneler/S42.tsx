// Sahne 42 — Sınırlar: bir hafta kısa, 500 mg zor. Takvimin bozuk rakamları kâğıt yamayla örtülür,
// yerine kendi 7 kutulu "hafta" şeridimiz çizilir.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tHafta = K(0, "week");
  const t500 = K(0, "500");
  const cik0 = t500 - 0.15;
  const cik1 = c[1].bas - 0.2;
  const tQuick = K(1, "quickly");
  return (
    <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
      {/* takvim (bozuk rakamlar) kâğıt rengiyle tamamen örtülür */}
      <div style={{ position: "absolute", left: 590, top: 10, width: 760, height: 600, background: kagit(1),
        boxShadow: `0 0 60px 45px ${kagit(1)}` }} />
      <div style={{ position: "absolute", left: 600, top: 585, width: 740, height: 30, background: kagit(1), boxShadow: `0 0 20px 12px ${kagit(1)}` }} />
      {/* 1. cümle: ONLY A WEEK + 7 gün kutusu */}
      <Baslik t={t} bas={K(0, "only")} bitis={cik1} metin="ONLY A WEEK" x={960} y={170} boyut={100} hiza="orta" renk={RENK.koyuYesil} />
      {Array.from({ length: 7 }, (_, i) => {
        const b = tHafta + 0.1 + i * 0.18;
        const [sc, al] = pop(t, b, 0.4);
        const a = al * sol(t, cik0, 0.3);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 620 + i * 100, top: 300, width: 80, height: 90, opacity: a,
            transform: `scale(${sc})`, borderRadius: 14, border: `4px solid ${RENK.lacivert}`, background: "#FCF8EC",
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 48, color: RENK.koyuYesil }}>{i + 1}</div>
        );
      })}
      <VurguRozet t={t} bas={t500 + 0.05} bitis={cik1} vurgu="500 MG" not="VERY HARD TO KEEP UP" x={960} y={290} genislik={460} />
      {/* 2. cümle */}
      <Baslik t={t} bas={K(1, "sodium")} metin="SODIUM MOVES BP" x={960} y={175} boyut={92} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={tQuick - 0.1} metin="QUICKLY" x={960} y={285} boyut={92} hiza="orta" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "practical")} capa={[930, 790]} konum={[960, 440]} metin="NOT PRACTICAL FOR LIFE" renk={RENK.mercan} />
    </Kamera>
  );
};

export default S42;
