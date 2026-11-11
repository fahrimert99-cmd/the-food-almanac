// Sahne 45 — Yol 2: her gün. Takvim; bozuk başlık yazısı kâğıt yamayla örtülü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAy = K(1, "consistent");
  const tHafta = K(2, "weeks");
  const tAlisk = K(2, "daily habit");
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1780])}>
        {/* takvimin bozuk başlık satırını takvim kâğıdı renginde yamayla kapat */}
        <div style={{ position: "absolute", left: 372, top: 258, width: 360, height: 52, background: "#F4F2E6" }} />
        <Etiket t={t} bas={tHafta - 0.1} capa={[470, 420]} konum={[930, 330]} metin="WEEKS OF USE" renk={RENK.altin} />
        <Etiket t={t} bas={tAlisk - 0.1} capa={[570, 790]} konum={[930, 700]} metin="DAILY HABIT" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={780} />
      <BaslikBlok t={t} bas={0.1} satirlar={["TWO:", "EVERY DAY"]} x={1860} y={250} boyut={112} hiza="sag" adim={tAy - 0.1 > 0 ? tAy - 0.1 : 0.2} />
    </>
  );
};

export default S45;
