// Sahne 52 — 2. adım: yalnızca eksiği tamamla (doz, öğünle, hedefi aşma).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "Two"), 0.45);
  const [s2, a2] = pop(t, K(2, "beyond") - 0.2, 0.5);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={K(2, "500")} capa={[570, 620]} konum={[270, 380]} metin="500–600 MG MAX" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "meal,")} capa={[1190, 600]} konum={[1020, 250]} metin="WITH A MEAL" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 60, top: 60, transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1 }}>
        <Hap metin="STEP 2" renk={RENK.altin} boyut={28} />
      </div>
      <Baslik t={t} bas={K(1, "fill")} metin="FILL ONLY THE GAP" x={1860} y={120} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1440, top: 250, transform: `scale(${s2})`, transformOrigin: "50% 50%", opacity: a2 }}>
        <Hap metin="NOT BEYOND TARGET" renk={RENK.mercan} boyut={28} />
      </div>
    </>
  );
};

export default S52;
