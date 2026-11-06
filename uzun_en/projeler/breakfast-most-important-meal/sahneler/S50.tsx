// Sahne 50 — doktor önlüğü: ilaç varken öğün atlamayı tek başına kararlaştırma.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 80, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex",
      alignItems: "center", gap: 20 }}>
      <div style={{ width: 64, height: 64, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="carpi" boyut={36} renk="#fff" kalinlik={7} />
      </div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 42, color: RENK.lacivert, whiteSpace: "nowrap" }}>{metin}</div>
    </div>
  );
};

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.2;
  const aN = eout(ilerle(t, 0.3, 0.6)) * sol(t, cik);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 40, 1840], [60, 70, 1720])}>
        {/* duvardaki anlamsız yazılı tabela kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 1130, top: 170, width: 440, height: 320,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, rgba(251,247,222,1) 0%, rgba(251,247,222,1) 62%, rgba(251,247,222,0) 100%)` }} />
        <Etiket t={t} bas={K(1, "doctor")} capa={[1480, 520]} konum={[1130, 600]} metin="DOCTOR" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ opacity: aN }}>
        <BaslikBlok t={t} bas={K(0, "skipping")} bitis={cik} satirlar={["NOT A DECISION", "TO MAKE ALONE"]} x={80} y={330} boyut={88}
          renkler={[RENK.lacivert, RENK.mercan]} />
      </div>
      <Madde t={t} bas={K(1, "change")} metin="CHANGING WHEN YOU TAKE A DOSE" y={260} />
      <Madde t={t} bas={K(1, "skip")} metin="SKIPPING MEALS" y={350} />
      <BaslikBlok t={t} bas={K(1, "without")} satirlar={["ASK YOUR", "PHARMACIST"]} x={80} y={600} boyut={104}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "doctor") + 0.3} metin="or your doctor" x={84} y={820} boyut={36} />
    </>
  );
};
export default S50;
