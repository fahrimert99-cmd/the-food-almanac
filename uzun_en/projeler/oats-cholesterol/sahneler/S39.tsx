// Sahne 39 — düzeltme: topping'lerin lifin etkisini iptal ettiğine dair çalışma yok.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNo = K(1, "no"), tTop = K(1, "toppings"), tTrouble = K(2, "trouble");
  const [sc, al] = pop(t, tNo, 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])} />
      <Baslik t={t} bas={K(0, "correction")} bitis={tNo - 0.1} metin="A CORRECTION" x={1150} y={110} boyut={96}
        renk={RENK.koyuYesil} hiza="orta" />
      {al > 0 && (
        <div style={{ position: "absolute", left: 60, top: 120, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al }}>
          <Hap metin="NO STUDY FOUND" renk={RENK.mercan} boyut={34} />
        </div>
      )}
      <Etiket t={t} bas={tTop} bitis={tTrouble - 0.2} capa={[900, 330]} konum={[1130, 110]} metin="TOPPINGS" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "fiber's")} bitis={tTrouble - 0.2} capa={[900, 720]} konum={[1500, 880]} metin="OAT FIBER" renk={RENK.yesil} />
      <Baslik t={t} bas={tTrouble} metin="SOMETHING ELSE" x={1150} y={110} boyut={96} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S39;
