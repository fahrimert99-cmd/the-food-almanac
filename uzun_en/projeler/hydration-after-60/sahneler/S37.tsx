// Sahne 37 — Kararlı ayaktan hastalar; dışlananlar listesi (sol panel); 2022 kılavuzu: düşük kalite.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, kagit, pop, ANTON } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1780]);
  const tPanel = c[1].bas - 0.1;
  const pP = eout(ilerle(t, tPanel, 0.6));
  const tListe = K(1, "unstable"), tKayip = K(1, "left out"), tGuide = K(2, "2022");
  const [sK, aK] = pop(t, tKayip, 0.5);
  return (
    <>
      <Kamera gorsel="tam/37" pencere={pen} />
      {/* ilk cümle: üst solda başlık, kâğıt zeminli */}
      <div style={{ position: "absolute", left: 0, top: 0, width: 1000, height: 190, opacity: 1 - pP,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 75%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={K(0, "stable")} bitis={tPanel} metin="STABLE OUTPATIENTS" x={70} y={100} boyut={96} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(0, "outpatients")} bitis={tPanel + 0.3} capa={[1280, 790]} konum={[1500, 900]} metin="STABLE PATIENTS" renk={RENK.koyuYesil} />
      <Panel a={pP} taraf="sol" genislik={940} opak={0.96} />
      <Not t={t} bas={c[1].bas + 0.1} bitis={tGuide - 0.2} metin="PEOPLE WITH…" x={70} y={150} boyut={34} agirlik={800} renk={RENK.gri} />
      <Liste t={t} isaret="carpi" x={70} y={230} aralik={110} boyut={40} genislik={800}
        ogeler={[
          { bas: tListe, metin: "UNSTABLE HEART FAILURE", renk: RENK.mercan, bitis: tGuide - 0.2 },
          { bas: K(1, "recent"), metin: "RECENT HOSPITAL STAY", renk: RENK.mercan, bitis: tGuide - 0.2 },
          { bas: K(1, "low sodium"), metin: "LOW SODIUM", renk: RENK.mercan, bitis: tGuide - 0.2 },
        ]} />
      {t >= tKayip && t < tGuide - 0.2 && (
        <div style={{ position: "absolute", left: 70, top: 590, transform: `scale(${sK}) rotate(-3deg)`, transformOrigin: "0 50%", opacity: aK,
          fontFamily: ANTON, fontSize: 96, color: RENK.mercan }}>LEFT OUT</div>
      )}
      <VurguRozet t={t} bas={tGuide} vurgu="2022" not="AMERICAN GUIDELINE" x={420} y={180} genislik={430} renk={RENK.lacivert} />
      <Not t={t} bas={K(2, "evidence")} metin="EVIDENCE FOR FLUID RESTRICTION" x={70} y={480} boyut={34} agirlik={800} renk={RENK.lacivert} genislik={800} />
      <Baslik t={t} bas={K(2, "low quality")} metin="LOW QUALITY" x={70} y={640} boyut={120} renk={RENK.mercan} />
    </>
  );
};

export default S37;
