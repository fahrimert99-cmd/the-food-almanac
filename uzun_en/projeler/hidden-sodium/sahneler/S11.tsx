// Sahne 11 — üç şehir: evler üzerinde şehir etiketleri, 450 rozeti, katılımcı hapları.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S11: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t450 = K(0, "450"), tB = K(0, "Birmingham,"), tP = K(0, "Palo"), tM = K(0, "Minneapolis"), tK = K(2, "women"), tD = K(2, "four");
  const [s1, a1] = pop(t, tK, 0.5);
  const [s2, a2] = pop(t, tD, 0.5);
  return (
    <>
      <Kamera gorsel="tam/11" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={tB} capa={[670, 320]} konum={[700, 135]} metin="BIRMINGHAM, AL" renk={RENK.altin} boyut={24} />
        <Etiket t={t} bas={tP} capa={[960, 270]} konum={[1010, 65]} metin="PALO ALTO, CA" renk={RENK.mercan} boyut={24} />
        <Etiket t={t} bas={tM} capa={[1250, 330]} konum={[1380, 150]} metin="MINNEAPOLIS–ST. PAUL" renk={RENK.yesil} boyut={24} />
      </Kamera>
      <VurguRozet t={t} bas={t450} vurgu="450" not="ADULTS" x={250} y={160} bitis={10.4} genislik={300} />
      <div style={{ position: "absolute", left: 42, top: 180, transform: `scale(${s1})`, transformOrigin: "0% 50%", opacity: a1 }}>
        <Hap metin="EQUAL WOMEN & MEN" renk={RENK.altin} boyut={24} />
      </div>
      <div style={{ position: "absolute", left: 42, top: 270, transform: `scale(${s2})`, transformOrigin: "0% 50%", opacity: a2 }}>
        <Hap metin="4 RACIAL & ETHNIC GROUPS" renk={RENK.yesil} boyut={24} />
      </div>
    </>
  );
};

export default S11;
