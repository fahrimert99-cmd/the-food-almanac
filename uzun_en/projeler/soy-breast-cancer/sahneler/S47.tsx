// Sahne 47 — aromataz inhibitörü boşluğu.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "couldn't"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "aromatase")} bitis={K(0, "so") + 0.2} capa={[640, 480]} konum={[560, 860]} metin="AROMATASE INHIBITORS" renk={RENK.mercan} />
      </Kamera>
      <Baslik t={t} bas={0.2} metin="ANOTHER GAP" x={60} y={70} boyut={34} renk={RENK.altin} font="inter" aralik={6} style={{ background: RENK.kagit, padding: "2px 14px", borderRadius: 12 }} />
      <VurguRozet t={t} bas={K(0, "8")} vurgu="≈ 8%" not="of women in the pooled study took them" x={1470} y={110} genislik={420} renk={RENK.altin} />
      <div style={{ position: "absolute", left: 960, top: 905, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="COULDN'T SAY MUCH ABOUT THEM" renk={RENK.altin} />
      </div>
    </>
  );
};

export default S47;
