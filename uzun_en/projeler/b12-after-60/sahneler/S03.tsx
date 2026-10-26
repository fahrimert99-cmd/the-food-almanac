// Sahne 3 — ne aranmalı, ne zaman kan testi istenmeli.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  return (
    <>
      <Kamera gorsel="tam/03" pencere={p}>
        {/* sağ alt imza örtüsü */}
        <div style={{ position: "absolute", left: 1760, top: 985, width: 160, height: 95,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "blood test")} capa={[1190, 660]} konum={[1000, 900]} metin="BLOOD TEST" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 420, top: 120, width: 900, height: 260,
        background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(0.92)} 0%, ${kagit(0.88)} 62%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "watch for") - 0.15} metin="WHAT TO WATCH FOR" x={870} y={200} boyut={78} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "when to ask") - 0.1} metin="WHEN TO ASK" x={870} y={300} boyut={78} hiza="orta" renk={RENK.koyuYesil} />
    </>
  );
};

export default S03;
