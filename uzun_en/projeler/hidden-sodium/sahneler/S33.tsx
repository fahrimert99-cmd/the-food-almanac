// Sahne 33 — İki konserve: normal vs. azaltılmış / light. Cetvel (bozuk rakamlar) kâğıt yamayla örtülü.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop, VurguRozet } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRed = K(0, "Reduced"), t25 = K(0, "25 percent"), tReg = K(0, "regular"), tLight = K(1, "Light"), tHalf = K(1, "half");
  const tThose = K(2, "Those"), tCmp = K(2, "comparisons"), tNot = K(2, "not promises");
  const [sv, av] = pop(t, 0.3, 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        {/* cetveli örten kâğıt yama */}
        <div style={{ position: "absolute", left: 872, top: 50, width: 210, height: 1000,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 16%, ${kagit(1)} 84%, ${kagit(0)} 100%)` }} />
        <div style={{ position: "absolute", left: 977, top: 510, transform: `translate(-50%,-50%) scale(${sv})`, opacity: av * 0.8,
          fontFamily: ANTON, fontSize: 64, color: RENK.gri }}>VS</div>
        <Etiket t={t} bas={tRed} bitis={tLight - 0.1} capa={[1320, 330]} konum={[1320, 110]} metin="REDUCED SODIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tLight} capa={[1320, 330]} konum={[1320, 110]} metin="LIGHT IN SODIUM" renk={RENK.yesil} />
        <Etiket t={t} bas={tReg} capa={[600, 330]} konum={[600, 110]} metin="REGULAR VERSION" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={t25} bitis={tLight - 0.1} vurgu="≥ 25% LESS" not="THAN REGULAR" x={1320} y={470} genislik={420} boyut={84} renk={RENK.altin} />
      <VurguRozet t={t} bas={tHalf} bitis={tThose - 0.1} vurgu="½" not="AT LEAST HALF AS MUCH" x={1320} y={450} genislik={420} boyut={110} renk={RENK.yesil} />
      <Baslik t={t} bas={tCmp} metin="COMPARISON," x={1890} y={400} boyut={52} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tNot} metin="NOT A" x={1890} y={462} boyut={52} renk={RENK.mercan} hiza="sag" />
      <Baslik t={t} bas={tNot + 0.15} metin="PROMISE" x={1890} y={522} boyut={52} renk={RENK.mercan} hiza="sag" />
    </>
  );
};
export default S33;
