// Sahne 6 — hasat sonrası bekleyen brokoli; başlık sağ üstte.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "larger"), 0.5);
  const sat = s.meta.baslik!.satirlar;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 20, 1850], [60, 70, 1720])}>
        <Etiket t={t} bas={K(1, "Over days")} capa={[1400, 830]} konum={[1580, 915]} metin="DAYS PASS" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "vitamins")} capa={[560, 470]} konum={[950, 190]} metin="VITAMINS SLOWLY LOST" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={K(0, "changing")} metin={sat[0]} x={1860} y={175} boyut={84} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "changing") + 0.18} metin={sat[1]} x={1860} y={267} boyut={84} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", left: 56, top: 64, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.lacivert, borderRadius: 999,
        padding: "12px 30px 12px 20px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: "#fff" }}>
        <span style={{ width: 16, height: 16, borderRadius: "50%", background: RENK.altin }} />
        LOSS CAN BE LARGER THAN ASSUMED
      </div>
    </>
  );
};

export default S06;
