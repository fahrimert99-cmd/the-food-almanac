// Sahne 45 — 1. yol: zeytinyağı ya da kanola; Harvard: doymuş yağ yerine doymamış yağ LDL'yi düşürür.
import React from "react";
import { ANTON, BaslikBlok, Etiket, Hap, INTER, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const PopHap: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({ t, bas, metin, renk, x, y, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHar = K(2, "Harvard's"), tSwap = K(2, "swapping");
  const [sn, an] = pop(t, 0.05, 0.6);
  const pP = eout(ilerle(t, tSwap - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(1, "sautéing")} bitis={tHar} capa={[1000, 770]} konum={[1450, 560]} metin="SAUTÉING · ROASTING" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "olive")} bitis={tSwap} capa={[470, 520]} konum={[950, 230]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "canola")} bitis={tSwap} capa={[680, 470]} konum={[950, 340]} metin="CANOLA OIL" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pP} taraf="sag" genislik={840} />
      <div style={{ position: "absolute", left: 1330, top: 105, width: 130, height: 130, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 90, opacity: an, transform: `scale(${sn})` }}>1</div>
      <BaslikBlok t={t} bas={K(1, "everyday")} satirlar={["OLIVE OR", "CANOLA"]} x={1860} y={170} boyut={100} hiza="sag" />
      <PopHap t={t} bas={tHar} metin="HARVARD NUTRITION SOURCE" renk={RENK.altin} x={1570} y={470} boyut={28} />
      <PopHap t={t} bas={tSwap} metin="SATURATED FAT" renk={RENK.mercan} x={1570} y={580} />
      <PopHap t={t} bas={K(2, "unsaturated")} metin="UNSATURATED FAT" renk={RENK.yesil} x={1570} y={690} />
      <PopHap t={t} bas={K(2, "lowers")} metin="LOWER LDL" renk={RENK.koyuYesil} x={1570} y={800} boyut={34} />
      {(() => {
        const a = eout(ilerle(t, K(2, "unsaturated"), 0.5));
        const b = eout(ilerle(t, K(2, "lowers"), 0.5));
        return (
          <>
            <div style={{ position: "absolute", left: 1570, top: 618, transform: "translateX(-50%)", fontFamily: ANTON, fontSize: 38, color: RENK.altin, opacity: a }}>↓</div>
            <div style={{ position: "absolute", left: 1570, top: 728, transform: "translateX(-50%)", fontFamily: INTER, fontWeight: 800, fontSize: 34, color: RENK.altin, opacity: b }}>↓</div>
          </>
        );
      })()}
    </>
  );
};

export default S45;
