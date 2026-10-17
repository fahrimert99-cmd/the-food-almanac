// Sahne 48 — Nokta 3: denemelerde kullanılan türler, sabır (8–24 hafta).
import React from "react";
import { Etiket, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [60, 30, 1800], [140, 60, 1640])}>
        {/* takvim başlığındaki anlamsız yazıyı örten yama */}
        <div style={{ position: "absolute", left: 1150, top: 214, width: 300, height: 84,
          background: "radial-gradient(ellipse at 50% 50%, #EEE3C6 0%, #EEE3C6 62%, rgba(238,227,198,0) 100%)" }} />
        <Etiket t={t} bas={K(1, "aged garlic")} bitis={K(1, "standardized") - 0.1} capa={[650, 480]} konum={[290, 330]} metin="AGED GARLIC EXTRACT" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "standardized")} bitis={K(1, "patient.") - 0.3} capa={[880, 640]} konum={[880, 100]} metin="STANDARDIZED POWDER" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "patient.")} capa={[1330, 500]} konum={[1220, 150]} metin="BE PATIENT" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={0.05} vurgu="3" not="OF 5 POINTS" x={200} y={90} genislik={230} />
      <VurguRozet t={t} bas={K(2, "8")} vurgu="8–24" not="WEEKS IN TRIALS" x={235} y={330} genislik={310} boyut={92} />
    </>
  );
};

export default S48;
