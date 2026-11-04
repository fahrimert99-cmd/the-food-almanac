// Sahne 29 — yarım domates + yağ damlası: ısı hücre duvarlarını yumuşatır, likopen yağda çözünür.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon: "onay" | "carpi" }> = ({ t, bas, x, y, metin, renk, ikon }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al, display: "flex", alignItems: "center",
      gap: 12, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 999, padding: "10px 32px 10px 14px",
      boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
      <span style={{ width: 46, height: 46, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" kalinlik={7} /></span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHeat = K(0, "heat");
  const tSoft = K(1, "softens");
  const tLyc = K(1, "lycopene");
  const tWall = K(1, "cell walls");
  const tOil = K(2, "oil");
  const tFat = K(2, "fat");
  const tWater = K(2, "not water");
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 40, 1900], [100, 90, 1700])}>
        <Etiket t={t} bas={tSoft} bitis={tOil - 0.3} capa={[850, 330]} konum={[1300, 300]} metin="SOFTER TOMATO" renk={RENK.mercan} />
        <Etiket t={t} bas={tLyc} bitis={tOil - 0.3} capa={[780, 470]} konum={[1300, 430]} metin="LYCOPENE" renk={RENK.mercan} />
        <Etiket t={t} bas={tWall} bitis={tOil - 0.3} capa={[893, 540]} konum={[1300, 560]} metin="CELL WALLS" renk={RENK.altin} />
        <Etiket t={t} bas={tOil} capa={[953, 830]} konum={[1330, 840]} metin="OIL" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tHeat} metin="HEAT + FAT" x={1400} y={150} boyut={120} renk={RENK.koyuYesil} hiza="orta" />
      <Pill t={t} bas={tFat} x={1400} y={400} metin="DISSOLVES IN FAT" renk={RENK.yesil} ikon="onay" />
      <Pill t={t} bas={tWater} x={1400} y={510} metin="NOT IN WATER" renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S29;
