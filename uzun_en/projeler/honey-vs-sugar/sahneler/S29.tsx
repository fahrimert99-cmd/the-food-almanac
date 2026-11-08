// Sahne 29 — yanlılık düzeltmesi sonrası glukoz düşüşü ≈ –2, anlamlı değil
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const [sc, al] = pop(t, K(0, "no longer"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 80, 1920], [60, 130, 1760])} />
      <Etiket t={t} bas={K(0, "glucose")} bitis={K(0, "and it") } capa={[470, 910]} konum={[980, 800]} metin="GLUCOSE DROP" renk={RENK.yesil} />
      <Baslik t={t} bas={K(0, "adjusted")} metin={b?.satirlar[0] ?? "ADJUSTED:"} x={1060} y={220} boyut={96} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={K(0, "about")} vurgu={b?.satirlar[1] ?? "≈ –2"} not={b?.not?.split(",")[0]} x={1300} y={310} genislik={440}
        renk={RENK.altin} boyut={120} />
      <div style={{ position: "absolute", left: 1300, top: 690, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="NO LONGER SIGNIFICANT" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S29;
