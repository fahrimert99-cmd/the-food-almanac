// Sahne 16 — ortalama bir değerdir; ölçü kabı ile pratik porsiyon.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrt = K(0, "5.5"), tSoz = K(0, "not"), tYol = K(1, "easy way"), tSiz = K(1, "without");
  const fadeIlk = tYol - 0.1;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 0, 1860])}>
        {/* sol kaptaki anlamsız ölçek işaretleri gümüş yamayla örtülür */}
        <div style={{ position: "absolute", left: 590, top: 520, width: 350, height: 280,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(206,206,200,1) 0%, rgba(214,214,208,1) 60%, rgba(214,214,208,0) 100%)" }} />
      </Kamera>
      <AltSis a={0.5} />
      <VurguRozet t={t} bas={tOrt} vurgu="5.5" not="AN AVERAGE ACROSS ALL TRIALS" x={1290} y={56} genislik={470} bitis={fadeIlk} />
      <Baslik t={t} bas={tSoz} bitis={fadeIlk} metin="NOT A PROMISE" x={140} y={120} boyut={100} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "any")} bitis={fadeIlk} metin="FOR ANY ONE PERSON" x={142} y={205} boyut={40} renk={RENK.lacivert} font="inter" agirlik={800} />
      <Etiket t={t} bas={tYol} capa={[760, 330]} konum={[560, 170]} metin="EASY WAY TO MEASURE" renk={RENK.yesil} />
      <Etiket t={t} bas={tSiz} capa={[1360, 480]} konum={[1380, 200]} metin="NO SCALE NEEDED" renk={RENK.altin} />
    </>
  );
};
export default S16;
