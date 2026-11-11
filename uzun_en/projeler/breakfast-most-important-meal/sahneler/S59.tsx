// Sahne 59 — atlanan kahvaltı, öğle ve akşam yemeği sonrası daha yüksek şeker
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S59: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tT2 = K(0, "type 2 diabetes"), tRise = K(0, "bigger blood sugar rise"), tL = K(0, "lunch"), tD = K(0, "dinner");
  const tStr = K(1, "strongest reason"), tTw = K(1, "think twice");
  return (
    <>
      <Kamera gorsel="tam/59" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1740])}>
        <Etiket t={t} bas={tT2} bitis={c[1].bas} capa={[430, 330]} konum={[290, 430]} metin="TYPE 2 DIABETES" renk={RENK.lacivert} boyut={24} />
        <Etiket t={t} bas={tRise} bitis={c[1].bas} capa={[860, 200]} konum={[1330, 280]} metin="BIGGER RISE" renk={RENK.mercan} />
        <Etiket t={t} bas={tL} bitis={c[1].bas} capa={[1300, 740]} konum={[1700, 770]} metin="LUNCH" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tD} bitis={c[1].bas} capa={[1100, 790]} konum={[1700, 880]} metin="DINNER" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={tStr} metin="STRONGEST REASON" x={1860} y={150} boyut={52} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={tTw} metin="THINK TWICE" x={1860} y={250} boyut={110} renk={RENK.lacivert} hiza="sag" />
    </>
  );
};

export default S59;
