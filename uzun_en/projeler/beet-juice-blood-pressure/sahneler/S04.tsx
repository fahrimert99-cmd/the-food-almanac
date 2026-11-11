// Sahne 4 — kanal tanıtımı + pancar kasası etiketleri.
import React from "react";
import { Etiket, Kamera, MARKA, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, INTER } from "../kutuphane";

const S04: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "Food"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/04" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={K(1, "beet")} bitis={4.2} capa={[1180, 470]} konum={[1500, 150]} metin="BEETROOT" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "brings")} capa={[270, 600]} konum={[270, 320]} metin="BEET JUICE" renk={RENK.mercan} />
      </Kamera>
      <div style={{ position: "absolute", left: 56, top: 150, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
        padding: "12px 30px 12px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, whiteSpace: "nowrap" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
        {MARKA.filigran}
      </div>
    </>
  );
};

export default S04;
