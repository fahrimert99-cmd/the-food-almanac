// Sahne 39 — Düşük sodyumlu diyet: tabak, pirinç, balık ve tuzluk; ~500 mg rozeti.
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cik = K(0, "far lower") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800])}>
        {/* sağ alttaki imza kalıntısı kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1700, top: 970, width: 220, height: 110,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "low-sodium")} bitis={cik} capa={[820, 600]} konum={[700, 150]} metin="LOW-SODIUM DIET" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "far lower")} capa={[1407, 430]} konum={[1180, 150]} metin="FAR LOWER THAN MOST" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "500")} vurgu="≈ 500 MG" not="A DAY" x={1690} y={150} genislik={380} boyut={88} />
    </>
  );
};

export default S39;
