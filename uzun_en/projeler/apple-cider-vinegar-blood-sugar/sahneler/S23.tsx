// Sahne 23 — "Umut verici" ama derleme yazarlarına göre kanıt yetersiz: sol üstte başlık değişimi, kitaba etiket.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProm = K(0, "promising"), tAuth = K(1, "authors"), tQty = K(1, "quantity"), tQual = K(1, "quality"), tInsuf = K(1, "insufficient");
  const tEff = K(1, "effectiveness"), tSafe = K(1, "safety.");
  const tS1 = s.cumleler[1].bas - 0.1;
  const pill = (bas: number, bitis: number, metin: string, x: number, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    if (a <= 0) return null;
    return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={30} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1760])}>
        <Etiket t={t} bas={tAuth} capa={[760, 470]} konum={[900, 140]} metin="REVIEW AUTHORS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tProm} bitis={tS1} metin="PROMISING" x={70} y={110} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tInsuf} metin="INSUFFICIENT" x={70} y={265} boyut={110} renk={RENK.mercan} />
      <Not t={t} bas={tInsuf + 0.3} metin="EVIDENCE" x={74} y={335} boyut={44} agirlik={800} renk={RENK.lacivert} />
      {pill(tQty, 1e9, "QUANTITY", 1640, 200, RENK.altin)}
      {pill(tQual, 1e9, "QUALITY", 1640, 285, RENK.altin)}
      {pill(tEff, 1e9, "EFFECTIVENESS", 1560, 590, RENK.yesil)}
      {pill(tSafe, 1e9, "SAFETY", 1560, 680, RENK.mercan)}
    </>
  );
};

export default S23;
