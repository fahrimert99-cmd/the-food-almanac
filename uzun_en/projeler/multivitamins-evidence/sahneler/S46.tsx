// Sahne 46 — 1. nokta: önce yemek.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, ANTON, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b3 = s.cumleler[3].bas - 0.2;
  const [sc, al] = pop(t, 0.0, 0.5);
  const band = Math.min(1, Math.max(0, (t - (b3 + 0.1)) / 0.5));
  const bitisEt = b3 + 0.1;
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [60, 80, 1800])}>
        <Etiket t={t} bas={K(2, "vegetables")} bitis={bitisEt} capa={[1060, 300]} konum={[1700, 190]} metin="VEGETABLES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "beans")} bitis={bitisEt} capa={[850, 790]} konum={[270, 900]} metin="BEANS" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "fish")} bitis={bitisEt} capa={[560, 560]} konum={[230, 330]} metin="FISH" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "whole")} bitis={bitisEt} capa={[1420, 650]} konum={[1700, 780]} metin="WHOLE GRAINS" renk={RENK.mercan} />
      </Kamera>
      {/* üst şerit: son cümle için kâğıt zemin */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 190, opacity: band,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.96)} 75%, ${kagit(0)} 100%)` }} />
      <div style={{ position: "absolute", left: 60, top: 60, width: 96, height: 96, borderRadius: "50%", background: RENK.koyuYesil, color: "#fff",
        transform: `scale(${sc})`, opacity: al * (1 - band), display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64 }}>1</div>
      <Baslik t={t} bas={K(1, "Food")} bitis={b3} metin="FOOD FIRST" x={190} y={110} boyut={104} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(3, "pill")} metin="A PILL IS AN ADDITION," x={960} y={58} boyut={58} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(3, "not")} metin="NOT A REPLACEMENT" x={960} y={125} boyut={58} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S46;
