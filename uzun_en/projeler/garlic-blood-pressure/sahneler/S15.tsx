// Sahne 15 — iki dosya yığını: 2016 derlemesi ve 2019 analizi; aynı yazar, kısmen aynı denemeler.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYay = K(1, "author");
  const tOrt = K(1, "same trials");
  const tUp = K(1, "update");
  const tBag = K(1, "independent");
  const pYay = eout(ilerle(t, tYay, 0.9));
  const aYay = sol(t, tUp - 0.2);
  const [sO, aO] = pop(t, tOrt, 0.5);
  const [sU, aU] = pop(t, tBag + 0.1, 0.5);
  const aBant = eout(ilerle(t, tUp - 0.05, 0.5));
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(0, "2016")} bitis={tYay - 0.1} capa={[200, 560]} konum={[260, 150]} metin="2016 REVIEW" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "numbers")} bitis={tYay - 0.1} capa={[1760, 650]} konum={[1640, 150]} metin="2019 ANALYSIS" renk={RENK.koyuYesil} />
      </Kamera>
      {/* ortak yazar: iki yığın arasında kesikli yay */}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: aYay }}>
        <path d="M 640 300 Q 960 -20 1280 300" fill="none" stroke={RENK.murekkep} strokeWidth={4} strokeDasharray="12 9"
          pathLength={1} strokeDashoffset={0} style={{ clipPath: `inset(0 ${(1 - pYay) * 100}% 0 0)` }} />
      </svg>
      {pYay > 0 && (
        <div style={{ position: "absolute", left: 960, top: 90, transform: `translate(-50%, -50%) scale(${0.6 + 0.4 * pYay})`, opacity: pYay * aYay }}>
          <Hap metin="SAME AUTHOR" renk={RENK.altin} boyut={32} />
        </div>
      )}
      {aO > 0 && (
        <div style={{ position: "absolute", left: 960, top: 255, transform: `translate(-50%, -50%) scale(${sO})`, opacity: aO * aYay }}>
          <Hap metin="SOME SAME TRIALS" renk={RENK.mercan} boyut={28} />
        </div>
      )}
      {/* alt bant: güncelleme, bağımsız doğrulama değil */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 800, height: 160, opacity: aBant,
        background: "linear-gradient(to bottom, rgba(246,243,236,0) 0%, rgba(246,243,236,0.94) 35%, rgba(246,243,236,0.94) 100%)" }} />
      <Baslik t={t} bas={tUp} metin="AN UPDATE," x={555} y={895} boyut={78} renk={RENK.lacivert} />
      {aU > 0 && (
        <div style={{ position: "absolute", left: 925, top: 895, transform: `translate(0, -50%) scale(${sU})`, transformOrigin: "0% 50%", opacity: aU }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik,
            border: `4px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 28px 8px 12px", fontFamily: INTER, fontWeight: 800,
            fontSize: 34, letterSpacing: 2, color: RENK.mercan, boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
            <span style={{ width: 44, height: 44, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <IkonYol ad="carpi" boyut={26} renk="#fff" kalinlik={8} />
            </span>
            NOT INDEPENDENT
          </div>
        </div>
      )}
    </>
  );
};

export default S15;
