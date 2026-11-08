// Sahne 40 — Dietary Guidelines: sol bayrak ve kase, sağ panelde metin.
import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTanim = K(0, "formal definition");
  const aPan = eout(ilerle(t, K(0, "2025") - 0.3, 0.8));
  const [sc, al] = pop(t, tTanim, 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 60, 1500], [30, 90, 1400])}>
        <Etiket t={t} bas={K(0, "Dietary")} capa={[250, 420]} konum={[470, 400]} metin="DIETARY GUIDELINES" renk={RENK.altin} />
      </Kamera>
      <Panel a={aPan} taraf="sag" genislik={940} />
      <Baslik t={t} bas={K(0, "2025")} metin="2025–2030" x={1010} y={230} boyut={130} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "released")} metin="RELEASED JANUARY 2026" x={1014} y={320} boyut={34} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={K(0, "cutting")} metin="CUT BACK ON" x={1010} y={500} boyut={78} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "highly") - 0.1} metin="HIGHLY PROCESSED FOODS" x={1010} y={595} boyut={78} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1010, top: 730, display: "flex", alignItems: "center", gap: 18, opacity: al,
        transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <div style={{ width: 70, height: 70, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center",
          justifyContent: "center", fontFamily: INTER, fontWeight: 800, fontSize: 46, color: "#fff" }}>?</div>
        <div style={{ background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "14px 30px",
          fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.murekkep, whiteSpace: "nowrap",
          boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>NO FORMAL DEFINITION</div>
      </div>
    </>
  );
};
export default S40;
