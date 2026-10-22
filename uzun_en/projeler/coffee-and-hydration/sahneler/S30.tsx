// Sahne 30 — dört ölçüm, doz etkisi yok.
import React from "react";
import { BaslikBlok, Etiket, Ikon, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "found"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800])} />
      {/* ölçümler: sağ boş kâğıt alanında */}
      <Liste t={t} x={1000} y={170} aralik={96} boyut={40} isaret="onay" genislik={860} ogeler={[
        { bas: K(0, "24-hour") - 0.1, metin: "24-HOUR URINE VOLUME" },
        { bas: K(0, "urine concentration") - 0.1, metin: "URINE CONCENTRATION" },
        { bas: K(0, "body weight") - 0.1, metin: "BODY WEIGHT" },
        { bas: K(0, "blood salts") - 0.1, metin: "BLOOD SALTS" },
      ]} />
      <BaslikBlok t={t} bas={K(1, "None")} satirlar={s.meta.baslik!.satirlar} x={1340} y={640} boyut={96} />
      <Ikon t={t} bas={K(1, "found")} ad="onay" x={1380} y={912} boyut={76} />
      <div style={{ position: "absolute", left: 1440, top: 876, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "12px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 28, letterSpacing: 2, whiteSpace: "nowrap" }}>NO DEHYDRATION</div>
    </>
  );
};

export default S30;
