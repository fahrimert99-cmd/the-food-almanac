// Sahne 38 — Khan: bal eklemek için değil, başka tatlandırıcının yerine geçerse yardımcı olabilir.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const KAGIT = "#FDFBE2";
const yama = (x: number, y: number, w: number, h: number) => (
  <div style={{ position: "absolute", left: x, top: y, width: w, height: h, background: KAGIT,
    boxShadow: `0 0 36px 30px ${KAGIT}` }} />
);

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKhan = K(0, "Khan"), tDegil = K(0, "not saying"), tDeg = K(1, "replaces"), tBal = K(1, "honey"), tBaska = K(1, "another sweetener");
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [20, 20, 1800], [100, 60, 1700])}>
        {/* görseldeki yapay ok ve alttaki sahte yazılar kâğıt rengiyle örtülür */}
        {yama(915, 455, 100, 395)}
        {yama(915, 190, 300, 255)}
        {yama(1040, 1010, 90, 50)}
        {yama(20, 1040, 90, 50)}
        <Etiket t={t} bas={tBal} capa={[925, 900]} konum={[620, 790]} metin="HONEY" renk={RENK.altin} />
        <Etiket t={t} bas={tBaska} capa={[1190, 585]} konum={[1500, 400]} metin="ANOTHER SWEETENER" renk={RENK.mercan} />
      </Kamera>
      <Not t={t} bas={tKhan} metin="KHAN, PLAINLY:" x={116} y={150} boyut={38} agirlik={800} bitis={tDegil} />
      <Baslik t={t} bas={tDegil} metin="DON'T ADD" x={110} y={380} boyut={118} renk={RENK.mercan} />
      <Baslik t={t} bas={tDeg} metin="REPLACE," x={110} y={250} boyut={118} renk={RENK.koyuYesil} />
    </>
  );
};

export default S38;
