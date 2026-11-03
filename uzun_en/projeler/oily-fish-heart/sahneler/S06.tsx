// Sahne 6 — yağlı balıklar buz tepsisinde; etiketler sağ boşlukta.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1780]);
  const [sc, al] = pop(t, K(0, "lists them"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kam}>
        <Etiket t={t} bas={K(0, "salmon")} capa={[1050, 270]} konum={[1500, 400]} metin="SALMON" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "sardines")} capa={[600, 450]} konum={[1500, 510]} metin="SARDINES" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "herring")} capa={[950, 520]} konum={[1500, 620]} metin="HERRING" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "mackerel")} capa={[1000, 770]} konum={[1500, 730]} metin="MACKEREL" renk={RENK.lacivert} />
      </Kamera>
      <Baslik t={t} bas={K(0, "oily fish")} metin="OILY FISH" x={1300} y={170} boyut={112} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "oily fish") + 0.3} metin="salmon · sardines · herring · mackerel" x={1304} y={245} boyut={28} genislik={560} />
      <div style={{ position: "absolute", left: 1500, top: 850, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        background: "#FCF8EC", border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 26px", fontFamily: INTER, fontWeight: 800,
        fontSize: 26, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>AHA: GOOD CHOICES</div>
    </>
  );
};
export default S06;
