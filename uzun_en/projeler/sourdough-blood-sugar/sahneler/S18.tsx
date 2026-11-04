// Sahne 18 — olası fayda, tek küçük çalışma
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHop = K(1, "hopeful"), tOne = K(1, "one");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1680])}>
        {/* sağ alttaki imza kâğıt yamayla örtülü */}
        <div style={{ position: "absolute", left: 1600, top: 940, width: 320, height: 140,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tHop} bitis={tOne - 0.2} capa={[1000, 640]} konum={[1450, 330]} metin="HOPEFUL FINDING" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "suggested")} bitis={6.4} metin="POSSIBLE" x={960} y={190} boyut={112} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={K(0, "suggested") + 0.18} bitis={6.4} metin="BENEFIT" x={960} y={310} boyut={112} renk={RENK.koyuYesil} hiza="orta" />
      <Not t={t} bas={K(0, "impaired")} bitis={6.4} metin="in impaired glucose metabolism" x={960} y={400} boyut={40} hiza="orta" agirlik={800} />
      <VurguRozet t={t} bas={tOne} vurgu="1 SMALL TRIAL" not="a hopeful, early finding" x={620} y={170} genislik={600} boyut={76} />
    </>
  );
};
export default S18;
