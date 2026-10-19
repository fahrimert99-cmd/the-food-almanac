// Sahne 54 — Pişirme yöntemi: solda başlık, sağda kısa nazik pişirme vs uzun haşlama.
import React from "react";
import { BaslikBlok, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";
import { ANTON, INTER, eout, ilerle, sol } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; x: number; y: number; ad: "onay" | "carpi"; renk: string; metin: string; alt: string }> = ({ t, bas, x, y, ad, renk, metin, alt }) => {
  const a = eout(ilerle(t, bas, 0.5));
  return (
    <>
      <Ikon t={t} bas={bas} ad={ad} x={x + 40} y={y + 50} boyut={80} zemin={renk} />
      <div style={{ position: "absolute", left: x + 100, top: y, opacity: a, transform: `translateX(${(1 - a) * 30}px)` }}>
        <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: renk }}>{metin}</div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 3, color: RENK.lacivert }}>{alt}</div>
      </div>
    </>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tc = s.cumleler[1].bas;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [40, 0, 1840], [110, 40, 1700])} />
      <BaslikBlok t={t} bas={K(0, "cook")} satirlar={["HOW YOU COOK", "MATTERS"]} x={80} y={170} boyut={92}
        bitis={tc - 0.1} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Madde t={t} bas={K(1, "Short,")} x={1180} y={170} ad="onay" renk={RENK.yesil} metin="SHORT + GENTLE" alt="E.G. MICROWAVING" />
      <Madde t={t} bas={K(1, "long")} x={1180} y={330} ad="carpi" renk={RENK.mercan} metin="LONG BOILING" alt="LESS VITAMIN C KEPT" />
    </>
  );
};

export default S54;
