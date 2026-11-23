// Sahne 5 — organik bahçe: "daha az pestisit = daha sağlıklı tabak" inancı ve üç soru.
import React from "react";
import { AdimAkisi, Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, sol, kelimeZamani } from "../kutuphane";

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFew = K(1, "fewer"), tHeal = K(1, "healthier"), tThree = K(2, "three");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [120, 60, 1700])}>
        <Etiket t={t} bas={K(0, "Organic")} bitis={tFew - 0.2} capa={[560, 640]} konum={[560, 840]} metin="ORGANIC FARMING" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "pesticide") - 0.2} bitis={tFew - 0.2} metin="LIMITS PESTICIDE USE" x={960} y={120} boyut={84} hiza="orta" renk={RENK.koyuYesil} />
      <div style={{ opacity: sol(t, tThree - 0.15, 0.3) }}>
        <AdimAkisi t={t} x={960} y={120} numarali={false} boyut={40}
          adimlar={[{ bas: tFew, metin: "FEWER PESTICIDES", renk: RENK.altin }, { bas: tHeal, metin: "HEALTHIER PLATE?", renk: RENK.yesil }]} />
      </div>
      <VurguRozet t={t} bas={tThree} vurgu="3" not="SEPARATE QUESTIONS" x={960} y={50} boyut={84} genislik={420} />
    </>
  );
};

export default S05;
