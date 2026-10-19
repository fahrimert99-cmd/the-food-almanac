// Sahne 4 — büyüteç: videonun üç durağı etiketlerle.
import React from "react";
import { Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])}>
        {/* büyütecin sağındaki sahte harfler kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1250, top: 110, width: 440, height: 220,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 80%, ${kagit(0)} 100%)` }} />
        <div style={{ position: "absolute", left: 1250, top: 185, width: 120, height: 110,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 85%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "after harvest")} capa={[690, 760]} konum={[220, 440]} metin="AFTER HARVEST" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "side-by-side")} capa={[1230, 800]} konum={[1560, 880]} metin="SIDE BY SIDE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "where frozen")} capa={[1000, 330]} konum={[1600, 400]} metin="WHERE FROZEN SLIPS" renk={RENK.mercan} />
      </Kamera>
    </>
  );
};

export default S04;
