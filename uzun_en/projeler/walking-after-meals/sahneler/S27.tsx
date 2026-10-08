// Sahne 27 — Birinci kapı: insülin GLUT4 kapılarını yüzeye taşır.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(0, "insulin"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [20, 20, 1800], [70, 50, 1680])} />
      <div style={{ position: "absolute", right: 60, top: 770, opacity: al, transform: `scale(${sc})`, transformOrigin: "100% 50%",
        display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="ok" boyut={38} renk="#fff" />
        </span>
        <Hap metin="INSULIN: KEY 1" renk={RENK.altin} boyut={34} />
      </div>
      <Etiket t={t} bas={K(0, "doorways")} capa={[905, 495]} konum={[1250, 150]} metin="GLUT4 DOORWAY" renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "first")} metin="THE FIRST DOOR" x={1860} y={905} boyut={72} renk={RENK.koyuYesil} hiza="sag" />
    </>
  );
};

export default S27;
