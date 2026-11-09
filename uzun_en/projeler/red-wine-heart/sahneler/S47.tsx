// Sahne 47 — Madde 3: bir içki = 5 ons. Solda ölçü kabı ve kadeh, sağda başlık, %12 rozeti, notlar.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOne = K(1, "one drink"), tFive = K(2, "five ounces"), tPct = K(2, "12 percent"), tHalf = K(2, "half a cup");
  const tMeas = K(3, "measuring cup"), tGlass = K(3, "your own glass");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1800])}>
        {/* ölçü kabındaki bozuk işaretler: üstte kâğıt, altta şarap rengi yama */}
        <div style={{ position: "absolute", left: 236, top: 428, width: 248, height: 140,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(238,233,213) 0%, rgb(238,233,213) 74%, rgba(238,233,213,0) 100%)" }} />
        <div style={{ position: "absolute", left: 262, top: 548, width: 215, height: 308,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(70,12,28) 0%, rgb(60,10,24) 74%, rgba(60,10,24,0) 100%)" }} />
        <Etiket t={t} bas={tFive} bitis={tMeas - 0.2} capa={[330, 575]} konum={[640, 300]} metin="5 OZ" renk={RENK.mercan} />
        <Etiket t={t} bas={tMeas} capa={[250, 395]} konum={[640, 260]} metin="MEASURE ONCE" renk={RENK.altin} />
        <Etiket t={t} bas={tGlass} capa={[700, 700]} konum={[1000, 830]} metin="YOUR OWN GLASS" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1000, top: 110, width: 84, height: 84, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52, transform: `scale(${sc})`, opacity: al }}>3</div>
      <BaslikBlok t={t} bas={tOne} satirlar={["ONE DRINK", "= 5 OUNCES"]} x={1000} y={270} boyut={100} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tPct} vurgu="≈ 12%" not="ALCOHOL" x={1190} y={500} genislik={340} boyut={92} />
      <Not t={t} bas={tHalf} metin="A LITTLE OVER HALF A CUP" x={1000} y={700} boyut={36} agirlik={800} />
    </>
  );
};
export default S47;
