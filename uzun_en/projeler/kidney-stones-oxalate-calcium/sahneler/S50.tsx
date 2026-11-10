// Sahne 50 — kohortlar: anketler, 34–75 yaş, 65 üstü odak değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQ = K(0, "questionnaires"), tAge = K(0, "34"), tOver = K(1, "over 65"), tDiff = K(1, "effects may differ");
  const hap = (bas: number, bitis: number, metin: string, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    if (a <= 0) return null;
    return <div style={{ position: "absolute", left: 60, top: 270, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={28} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800])}>
        <Etiket t={t} bas={K(0, "food questionnaires") } bitis={tAge - 0.2} capa={[700, 430]} konum={[760, 130]} metin="FOOD QUESTIONNAIRES" renk={RENK.altin} boyut={28} />
      </Kamera>
      <VurguRozet t={t} bas={tAge - 0.1} vurgu="34–75" not="AGES ENROLLED" x={290} y={50} genislik={340} boyut={92} />
      {hap(tOver, tDiff - 0.1, "OVER 65: NOT A FOCUS", RENK.mercan)}
      {hap(tDiff, 1e9, "EFFECTS MAY DIFFER", RENK.altin)}
    </>
  );
};
export default S50;
