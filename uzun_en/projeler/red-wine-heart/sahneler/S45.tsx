// Sahne 45 — Madde 1: içmiyorsanız kalbiniz için başlamayın. Sol boş alanda başlık, sağda şişe/bardak.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDont = K(1, "don't drink"), tStart = K(1, "don't start"), tAha = K(2, "AHA"), tClean = K(2, "cleaner evidence");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [20, 0, 1880])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1680, top: 1030, width: 240, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tAha} capa={[1510, 330]} konum={[1250, 190]} metin="RED WINE" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 140, top: 150, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al }}>1</div>
      <Baslik t={t} bas={tDont} metin="IF YOU DON'T DRINK," x={140} y={350} boyut={84} hiza="sol" renk={RENK.lacivert} />
      <Baslik t={t} bas={tStart} metin="DON'T START" x={140} y={446} boyut={110} hiza="sol" renk={RENK.mercan} />
      <Not t={t} bas={tAha} metin="THE AHA SAYS SO PLAINLY" x={140} y={590} boyut={40} agirlik={800} />
      <Not t={t} bas={tClean} metin="CLEANER EVIDENCE: NO PROTECTIVE" x={140} y={680} boyut={36} agirlik={600} />
      <Not t={t} bas={tClean + 0.2} metin="EFFECT WORTH THAT TRADE" x={140} y={726} boyut={36} agirlik={600} />
    </>
  );
};
void eout; void ilerle;
export default S45;
