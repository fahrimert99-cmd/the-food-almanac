// Sahne 53 — mercimek, gaz endişesi ve pratik ipuçları.
import React from "react";
import { AltSis, Baslik, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLen = K(0, "Lentils"), tGaz = K(0, "worries"), tOver = K(0, "overblown");
  const tSmall = K(1, "Start"), tRinse = K(1, "rinse"), tSwap = K(1, "swap");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [150, 90, 1600], [200, 120, 1500])}>
        {/* ölçü kabındaki anlamsız yazıyı kâğıt rengi yama örter */}
        <div style={{ position: "absolute", left: 1330, top: 455, width: 260, height: 80,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        {/* fasulyelerin üstündeki sahte işaretler: fasulye tonunda yama */}
        <div style={{ position: "absolute", left: 1448, top: 585, width: 84, height: 90,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(170,148,126,1) 0%, rgba(170,148,126,1) 45%, rgba(170,148,126,0) 100%)" }} />
        <Etiket t={t} bas={tLen} bitis={tGaz - 0.3} capa={[560, 610]} konum={[330, 400]} metin="LENTILS" renk={RENK.mercan} />
        <Etiket t={t} bas={tRinse} bitis={tSwap - 0.3} capa={[1150, 350]} konum={[600, 340]} metin="RINSE CANNED BEANS" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tSwap} capa={[1440, 760]} konum={[1450, 930]} metin="SWAP BEANS IN" renk={RENK.altin} />
      </Kamera>
      <AltSis a={0.4} />
      <Baslik t={t} bas={tGaz} bitis={tSmall - 0.2} metin="GAS WORRIES" x={300} y={160} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={tOver} bitis={tSmall - 0.2} metin="MAY BE OVERBLOWN" x={306} y={222} boyut={34} agirlik={800} />
      <Baslik t={t} bas={tSmall} metin="START SMALL" x={300} y={160} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S53;
