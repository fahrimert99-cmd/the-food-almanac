// Sahne 27 — katılım ölçütleri sonra iki kol: MIND tepsisi ve kontrol tepsisi.
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.2;
  const sat = [
    { ifade: "family", metin: "FAMILY HISTORY OF DEMENTIA" },
    { ifade: "body", metin: "BODY MASS INDEX ABOVE 25" },
    { ifade: "diet that", metin: "A DIET THAT COULD BE HEALTHIER" },
  ];
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "MIND")} capa={[560, 640]} konum={[1330, 830]} metin="MIND DIET" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "control")} capa={[950, 250]} konum={[1590, 250]} metin="CONTROL DIET" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.1} bitis={cik} metin="ALL HAD" x={1390} y={170} boyut={40} font="inter" aralik={5} renk={RENK.altin} />
      {sat.map((r, i) => {
        const b = K(0, r.ifade);
        const [sc, al] = pop(t, b, 0.5);
        const a = al * sol(t, cik);
        if (a <= 0) return null;
        return (
          <div key={i} style={{ position: "absolute", left: 1390, top: 250 + i * 150, width: 460, opacity: a, display: "flex", gap: 16,
            transform: `scale(${sc})`, transformOrigin: "0% 50%", alignItems: "center" }}>
            <span style={{ flex: "none", width: 48, height: 48, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}><IkonYol ad="onay" boyut={30} renk="#fff" /></span>
            <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, lineHeight: 1.2, color: RENK.lacivert }}>{r.metin}</span>
          </div>
        );
      })}
      <Baslik t={t} bas={K(1, "MIND")} metin="MIND VS" x={1390} y={470} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "control")} metin="CONTROL" x={1390} y={580} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "three")} metin="301 and 303 people, three years" x={1394} y={660} genislik={470} boyut={32} agirlik={700} />
    </>
  );
};
export default S27;
