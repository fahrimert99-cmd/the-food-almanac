// Sahne 48 — Adım 1: pişmiş pirinci dışarıda bekletme; yaklaşık 2 saat içinde buzdolabına.
import React from "react";
import { ANTON, Baslik, Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "One"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1720])}>
        <Etiket t={t} bas={K(2, "leftovers")} capa={[830, 560]} konum={[430, 300]} metin="COOKED RICE" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "refrigerator")} capa={[1330, 330]} konum={[1610, 330]} metin="REFRIGERATOR" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(2, "hours")} capa={[1280, 840]} konum={[1560, 860]} metin="ABOUT 2 HOURS" renk={RENK.altin} />
      </Kamera>
      {/* adım kartı: sol üst */}
      <div style={{ position: "absolute", left: 50, top: 130, width: 640, height: 330, opacity: al, background: RENK.kagitAcik,
        borderRadius: 28, boxShadow: "0 14px 34px rgba(48,40,34,0.22)", border: `3px solid ${RENK.lacivert}`,
        transform: `scale(${sc})`, transformOrigin: "0% 0%" }} />
      <div style={{ position: "absolute", left: 80, top: 170, width: 110, height: 110, borderRadius: "50%", background: RENK.altin,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 80,
        transform: `scale(${sc})`, opacity: al }}>1</div>
      <Baslik t={t} bas={K(1, "Do")} metin="DON'T LET IT" x={220} y={215} boyut={78} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "sit") - 0.05} metin="SIT OUT" x={220} y={298} boyut={78} renk={RENK.mercan} />
      <VurguRozet t={t} bas={K(2, "two")} vurgu="≈ 2 HOURS" not="then into the refrigerator" x={370} y={360} genislik={560} boyut={54} />
    </>
  );
};

export default S48;
