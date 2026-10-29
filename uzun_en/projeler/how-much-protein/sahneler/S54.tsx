// Sahne 54 — adım 5: bakım ekibine danış; sağda başlık ve üç madde.
import React from "react";
import { ANTON, BaslikBlok, Ikon, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sn, an] = pop(t, 0.0, 0.5);
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 40, 1750])} />
      <div style={{ position: "absolute", left: 1180, top: 60, width: 100, height: 100, borderRadius: "50%", background: RENK.altin, color: "#fff",
        transform: `scale(${sn})`, opacity: an, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 66 }}>5</div>
      <BaslikBlok t={t} bas={K(1, "check")} satirlar={["CHECK WITH", "YOUR CARE TEAM"]} x={1860} y={250} boyut={100} hiza="sag" adim={0.35} />
      <Liste t={t} x={1150} y={560} aralik={84} boyut={34} isaret="nokta" ogeler={[
        { bas: K(1, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.altin },
        { bas: K(1, "regular"), metin: "REGULAR MEDICINES", renk: RENK.altin },
        { bas: K(1, "losing"), metin: "LOSING WEIGHT WITHOUT TRYING", renk: RENK.altin },
      ]} genislik={740} />
          <Ikon t={t} bas={K(2, "dietitian")} ad="onay" x={1250} y={880} boyut={84} />
      <Not t={t} bas={K(2, "dietitian")} metin="REGISTERED DIETITIAN" x={1320} y={838} boyut={36} agirlik={800} />
      <Not t={t} bas={K(2, "tailor")} metin="TAILORS THE NUMBERS TO YOU" x={1320} y={886} boyut={28} agirlik={600} />
    </>
  );
};

export default S54;
