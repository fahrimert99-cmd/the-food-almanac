// Sahne 32 — NIH: 50 yaş üstü için güçlendirilmiş gıda / takviye. Raftaki ürünler, üstte kinetik başlıklar.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, INTER, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFort = K(0, "fortified");
  const tBitis = K(1, "Their") - 0.15;
  const aEt = eout(ilerle(t, tFort, 0.5));
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [30, 60, 1860], [90, 100, 1740])}>
        {/* kutudaki bozuk yazı: boş etiket kartıyla örtülür */}
        <div style={{ position: "absolute", left: 300, top: 468, width: 200, height: 160, background: RENK.kagitAcik,
          border: `4px solid ${RENK.altin}`, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, lineHeight: 1.2, textAlign: "center", color: RENK.koyuYesil }}>
          <span style={{ opacity: aEt }}>B12<br />ADDED</span>
        </div>
        <Etiket t={t} bas={tFort + 0.1} capa={[500, 520]} konum={[780, 400]} metin="FORTIFIED FOODS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "supplements.")} capa={[1290, 870]} konum={[1240, 700]} metin="SUPPLEMENTS" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "National")} bitis={tBitis} metin="NATIONAL INSTITUTES OF HEALTH" x={640} y={96} boyut={30}
        renk={RENK.altin} font="inter" aralik={4} />
      <Baslik t={t} bas={K(0, "over")} bitis={tBitis} metin="OVER 50" x={636} y={190} boyut={124} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "absorb") - 0.1} metin="USUALLY" x={1860} y={140} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "absorb") + 0.15} metin="ABSORBED" x={1860} y={252} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};

export default S32;
