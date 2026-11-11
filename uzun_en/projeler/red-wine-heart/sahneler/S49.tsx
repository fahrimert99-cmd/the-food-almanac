// Sahne 49 — Madde 5: doktorunuza sorun. Solda başlık ve onay listesi, sağda kapı, ayakkabı ve sepet.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, Liste, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAsk = K(1, "Ask your doctor"), tHeart = K(1, "own heart"), tBetter = K(2, "better bets");
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* kapı yanındaki bozuk küçük çerçeve örtülür */}
        <div style={{ position: "absolute", left: 1105, top: 215, width: 140, height: 140,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(253,240,205) 0%, rgb(253,240,205) 60%, rgba(253,240,205,0) 100%)" }} />
        <Etiket t={t} bas={tHeart} capa={[1345, 255]} konum={[1000, 140]} metin="YOUR HEART" renk={RENK.mercan} />
        <div style={{ display: "none" }}>{kagit(0)}</div>
      </Kamera>
      <div style={{ position: "absolute", left: 140, top: 190, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al }}>5</div>
      <Baslik t={t} bas={tAsk} metin="ASK YOUR" x={140} y={370} boyut={100} hiza="sol" renk={RENK.lacivert} />
      <Baslik t={t} bas={tAsk + 0.2} metin="DOCTOR" x={140} y={474} boyut={100} hiza="sol" renk={RENK.koyuYesil} />
      <Liste t={t} isaret="onay" x={140} y={580} aralik={76} boyut={32} genislik={800} ogeler={[
        { bas: K(1, "blood pressure"), metin: "BLOOD PRESSURE CHECKS" },
        { bas: K(1, "cholesterol"), metin: "CHOLESTEROL" },
        { bas: K(1, "movement"), metin: "MOVEMENT" },
        { bas: K(1, "the way"), metin: "THE WAY YOU EAT" },
      ]} />
      <Not t={t} bas={tBetter} metin="BETTER BETS THAN A NIGHTLY GLASS" x={140} y={900} boyut={38} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};
export default S49;
