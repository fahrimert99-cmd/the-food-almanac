// Sahne 26 — bütün fermente diyet test edildi, tek fincan yoğurt değil.
import React from "react";
import { ANTON, Etiket, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWhole = K(0, "whole"), tNot = K(0, "not"), tCan = K(1, "can't");
  const tYog = K(1, "yogurt"), tKef = K(1, "kefir");
  const aBan = eout(ilerle(t, tCan, 0.5));
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1780])}>
        <Etiket t={t} bas={tWhole} bitis={tNot + 0.5} capa={[1540, 460]} konum={[1640, 150]} metin="WHOLE FERMENTED DIET" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tNot + 0.2} bitis={tCan - 0.2} capa={[560, 800]} konum={[270, 900]} metin="ONE CUP OF YOGURT" renk={RENK.mercan} />
        <Etiket t={t} bas={tYog} capa={[1380, 560]} konum={[1690, 560]} metin="YOGURT" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tKef} capa={[1560, 700]} konum={[1700, 820]} metin="KEFIR" renk={RENK.altin} />
      </Kamera>
      {aBan > 0 && (
        <div style={{ position: "absolute", left: 960, top: 56, transform: `translate(-50%, ${(1 - aBan) * -14}px)`, opacity: aBan,
          background: "rgba(246,243,236,0.95)", borderRadius: 24, padding: "4px 44px 0", border: `4px solid ${RENK.mercan}`,
          fontFamily: ANTON, fontSize: 84, lineHeight: "104px", color: RENK.mercan, whiteSpace: "nowrap" }}>CAN'T SAY HOW MUCH</div>
      )}
    </>
  );
};

export default S26;
