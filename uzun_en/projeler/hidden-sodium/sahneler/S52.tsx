// Sahne 52 — özel sodyum hedefleri: çağrılar + üst başlık.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const b1 = c[1].bas - 0.1;
  const [s1, a1] = pop(t, K(0, "heart failure"), 0.5);
  const [s2, a2] = pop(t, K(0, "kidney"), 0.5);
  const a1b = a1 * (1 - Math.min(1, Math.max(0, (t - b1) / 0.4)));
  const a2b = a2 * (1 - Math.min(1, Math.max(0, (t - b1) / 0.4)));
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 90, 1800])}>
        <Etiket t={t} bas={K(0, "own")} bitis={b1} capa={[1010, 560]} konum={[1010, 800]} metin="OWN SODIUM TARGET" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "care")} bitis={b1} capa={[470, 640]} konum={[420, 880]} metin="CARE TEAM" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "general")} capa={[1585, 520]} konum={[1590, 750]} metin="GENERAL NUMBERS" renk={RENK.gri} />
      </Kamera>
      <div style={{ position: "absolute", left: 140, top: 130, display: "flex", gap: 24 }}>
        <div style={{ transform: `scale(${s1})`, transformOrigin: "0 50%", opacity: a1b }}><Hap metin="HEART FAILURE" renk={RENK.mercan} boyut={34} /></div>
        <div style={{ transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2b }}><Hap metin="KIDNEY DISEASE" renk={RENK.mercan} boyut={34} /></div>
      </div>
      <Baslik t={t} bas={c[1].bas} metin="FOLLOW" x={140} y={115} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "that")} metin="THAT NUMBER" x={140} y={215} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};
export default S52;
