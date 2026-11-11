// Sahne 28 — çıkar çatışması bildirimi (imza kusuru örtülü)
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Yerel yardımcı: kelimede belirip yumuşakça gelen blok
const Gel: React.FC<{ t: number; bas: number; bitis?: number; style: React.CSSProperties; children: React.ReactNode }> = ({ t, bas, bitis = 1e9, style, children }) => {
  const p = eout(ilerle(t, bas, 0.45)), a = p * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", opacity: a, transform: `translateY(${(1 - p) * 14}px)`, ...style }}>{children}</div>;
};

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const t1 = c[1].bas - 0.2;
  const tPaper = K(0, "competing");
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        {/* kâğıttaki sahte imza her zaman örtülü */}
        <div style={{ position: "absolute", left: 655, top: 568, width: 360, height: 74, background: "#F9F6E4", borderRadius: 30,
          boxShadow: "0 0 22px 16px #F9F6E4" }} />
        <Gel t={t} bas={tPaper} style={{ left: 840, top: 608, transform: "translate(-50%, -50%)" }}>
          <Hap metin="COMPETING INTERESTS" renk={RENK.lacivert} boyut={30} />
        </Gel>
      </Kamera>
      <Baslik t={t} bas={K(0, "ties to DayTwo")} bitis={t1} metin="TIES TO DAYTWO" x={70} y={150} boyut={84} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "personalized nutrition")} bitis={t1} metin="A personalized nutrition company" x={74} y={225} boyut={34} />
      <Baslik t={t} bas={K(1, "invalidate")} metin="DOESN'T INVALIDATE" x={70} y={150} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "full picture")} metin="PART OF THE FULL PICTURE" x={74} y={240} boyut={44} renk={RENK.altin} font="inter" />
    </>
  );
};

export default S28;
