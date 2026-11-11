// Sahne 43 — 12 kişilik deney, gözlemsel çalışma
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S43: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tObs = K(1, "observational");
  return (
    <>
      <Kamera gorsel="tam/43" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])} />
      {/* üst bant: yazılar için kâğıt geçişi */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 330,
        background: `linear-gradient(to bottom, ${kagit(0.96)} 0%, ${kagit(0.9)} 65%, ${kagit(0)} 100%)` }} />
      <Etiket t={t} bas={K(0, "strongest")} bitis={tObs - 0.2} capa={[975, 545]} konum={[1180, 470]} metin="STRONGEST EXPERIMENT" renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "twelve")} bitis={tObs - 0.2} vurgu="12" not="PEOPLE" x={420} y={90} genislik={260} boyut={110} />
      <Baslik t={t} bas={tObs} metin="OBSERVATIONAL" x={80} y={130} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "link")} metin="A LINK," x={80} y={235} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "not")} metin="NOT PROOF OF CAUSE" x={560} y={235} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S43;
