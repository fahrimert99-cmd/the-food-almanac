// Sahne 7 — böbrek su dengesini kurar; basit "tut / gönder" kaydırıcısı (şematik).
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, eout, einout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const bit = s.cumleler[1].bas - 0.25;
  const tKaydir = K(1, "nudges");
  const [sc, al] = pop(t, K(0, "how much water"), 0.6);
  const konum = 0.5 + 0.16 * einout(ilerle(t, tKaydir, 1.2));
  const x0 = 1260, x1 = 1800, y = 450;
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 36, 1800])}>
        <Etiket t={t} bas={K(0, "kidneys")} bitis={bit} capa={[700, 430]} konum={[330, 200]} metin="KIDNEYS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "water")} bitis={bit} capa={[450, 700]} konum={[170, 440]} metin="WATER" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "send")} bitis={bit} capa={[940, 850]} konum={[1100, 830]} metin="TO BLADDER" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {/* Şematik kaydırıcı: tut ↔ gönder */}
      <div style={{ position: "absolute", left: x0 - 30, top: y - 70, width: x1 - x0 + 60, height: 190, opacity: al, transform: `scale(${sc})`,
        transformOrigin: "50% 50%", background: "#FCF8EC", border: `3px solid ${RENK.lacivert}`, borderRadius: 24,
        boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
        <div style={{ position: "absolute", left: 30, top: 18, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.yesil }}>KEEP</div>
        <div style={{ position: "absolute", right: 30, top: 18, fontFamily: INTER, fontWeight: 800, fontSize: 26, color: RENK.mercan }}>SEND</div>
        <div style={{ position: "absolute", left: 30, right: 30, top: 92, height: 12, borderRadius: 6,
          background: `linear-gradient(to right, ${RENK.yesil}, ${RENK.mercan})` }} />
        <div style={{ position: "absolute", left: 30 + (x1 - x0) * konum - 22, top: 78, width: 44, height: 44, borderRadius: "50%",
          background: RENK.lacivert, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(0,0,0,0.25)" }} />
        <div style={{ position: "absolute", left: 0, right: 0, top: 140, textAlign: "center", fontFamily: INTER, fontWeight: 700,
          fontSize: 20, letterSpacing: 3, color: RENK.gri }}>ILLUSTRATIVE</div>
      </div>
      <Baslik t={t} bas={K(1, "diuretic")} metin="A LITTLE NUDGE" x={1860} y={150} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(1, "toward")} metin="TOWARD MORE URINE" x={1860} y={250} boyut={84} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S07;
