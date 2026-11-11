// Sahne 57 — böbrekler + susuzluk tek başına güvenilir değil + "steady habits" başlığı.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHab = K(1, "That's");
  const [sc, al] = pop(t, K(0, "isn't"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        {/* kadran üzerindeki sahte yazıyı örten krem yama */}
        <div style={{ position: "absolute", left: 1370, top: 700, width: 100, height: 44, borderRadius: "50%", background: "radial-gradient(ellipse, #F4EEDC 55%, rgba(244,238,220,0) 100%)" }} />
        <Etiket t={t} bas={K(0, "kidneys")} bitis={tHab} capa={[480, 340]} konum={[480, 195]} metin="KIDNEYS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "conserve")} bitis={tHab} capa={[700, 420]} konum={[780, 120]} metin="CONSERVE LESS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "thirst alone")} capa={[1330, 520]} konum={[1640, 330]} metin="THIRST ALONE" renk={RENK.lacivert} />
      </Kamera>
      {al > 0 && (
        <div style={{ position: "absolute", left: 1640, top: 408, transform: `translate(-50%, 0) scale(${sc})`, opacity: al,
          display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`,
          borderRadius: 999, padding: "8px 26px 8px 12px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5,
          color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
          <IkonYol ad="carpi" boyut={30} renk={RENK.mercan} kalinlik={7} />
          NOT RELIABLE
        </div>
      )}
      <BaslikBlok t={t} bas={tHab} satirlar={["STEADY HABITS", "BEAT WAITING"]} x={140} y={110} boyut={84} />
    </>
  );
};

export default S57;
