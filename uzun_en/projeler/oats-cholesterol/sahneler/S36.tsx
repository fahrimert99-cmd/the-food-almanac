// Sahne 36 — pratik kural: sevdiğin yulaf; kavanoz etiketleri kâğıt yamayla düzeltildi.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, ilerle, eout, kameraYolu, kelimeZamani } from "../kutuphane";

// Görseldeki bozuk kavanoz etiketlerinin üstüne temiz etiket (görsel koordinatı)
const Yama: React.FC<{ t: number; x: number; y: number; w: number; h: number; metin: string }> = ({ x, y, w, h, metin }) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, background: "#FBF9F2", border: "3px solid #2B2B2B",
    display: "flex", alignItems: "center", justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 40,
    letterSpacing: 3, color: RENK.lacivert, boxSizing: "border-box" }}>{metin}</div>
);

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPick = K(1, "Pick");
  const tSteel = K(2, "steel-cut"), tRolled = K(2, "rolled"), tInst = K(2, "instant");
  const tFlav = K(2, "flavored"), tSugar = K(2, "sugar");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Yama t={t} x={338} y={503} w={312} h={108} metin="STEEL-CUT" />
        <Yama t={t} x={812} y={498} w={304} h={114} metin="ROLLED" />
      </Kamera>
      <Baslik t={t} bas={K(0, "practical")} bitis={tPick - 0.15} metin="THE PRACTICAL RULE" x={960} y={120} boyut={100}
        renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tPick} metin="OATS YOU'LL ACTUALLY EAT" x={960} y={120} boyut={88} renk={RENK.lacivert} hiza="orta" />
      <Etiket t={t} bas={tSteel} capa={[500, 770]} konum={[470, 915]} metin="STEEL-CUT" renk={RENK.yesil} />
      <Etiket t={t} bas={tRolled} capa={[960, 770]} konum={[960, 915]} metin="ROLLED" renk={RENK.yesil} />
      <Etiket t={t} bas={tInst} capa={[1480, 700]} konum={[1500, 915]} metin="INSTANT" renk={RENK.yesil} />
      <Etiket t={t} bas={tFlav} capa={[1450, 580]} konum={[1700, 360]} metin="FLAVORED PACKET" renk={RENK.altin} />
      <Etiket t={t} bas={tSugar} capa={[1500, 560]} konum={[1500, 240]} metin="CHECK THE SUGAR" renk={RENK.mercan} />
    </>
  );
};

export default S36;
