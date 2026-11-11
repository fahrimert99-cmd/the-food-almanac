// Sahne 4 — kanal tanıtımı ve yağlı balık etiketleri.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, MARKA, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  const [sc, al] = pop(t, K(0, "this is"), 0.6);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kam}>
        <Etiket t={t} bas={K(1, "what's inside")} capa={[560, 540]} konum={[330, 790]} metin="CANNED SARDINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "oily")} capa={[800, 790]} konum={[800, 880]} metin="FRESH SARDINE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "fish")} capa={[1500, 640]} konum={[1560, 880]} metin="SALMON" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 1330, top: 118, width: 530, padding: "10px 0 16px", textAlign: "center",
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        opacity: al, transform: `scale(${sc})`, transformOrigin: "50% 0" }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, letterSpacing: 6, color: RENK.altin }}>THIS IS</div>
        <div style={{ fontFamily: ANTON, fontSize: 62, lineHeight: 1.1, color: RENK.lacivert }}>{MARKA.filigran}</div>
      </div>
    </>
  );
};
export default S04;
