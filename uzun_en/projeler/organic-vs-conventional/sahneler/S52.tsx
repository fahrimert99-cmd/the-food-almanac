// Sahne 52 — Büyük resim: salata, elmalar, ayakkabı; "COPY THE HABITS"
import React from "react";
import { ANTON, BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFive = K(0, "Five"), tAte = K(2, "ate better"), tEx = K(2, "exercised"), tHab = K(3, "habits"), tLab = K(3, "not");
  const [sc, al] = pop(t, tFive, 0.5);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 0, 1780])}>
        <Etiket t={t} bas={tAte} bitis={tHab} capa={[430, 420]} konum={[330, 150]} metin="ATE BETTER" renk={RENK.yesil} />
        <Etiket t={t} bas={tEx} bitis={tHab} capa={[1600, 830]} konum={[1440, 700]} metin="EXERCISED MORE" renk={RENK.altin} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 56, width: 84, height: 84, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 54, transform: `scale(${sc})`, opacity: al }}>5</div>
      <BaslikBlok t={t} bas={tHab} satirlar={["COPY THE", "HABITS"]} x={1190} y={210} boyut={120} />
      <Not t={t} bas={tLab} metin="Habits, not the label, may be doing much of the work" x={1190} y={480} boyut={34} genislik={620} />
    </>
  );
};

export default S52;
