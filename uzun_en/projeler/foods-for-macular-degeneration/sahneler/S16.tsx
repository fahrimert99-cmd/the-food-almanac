// Sahne 16 — gözlemsel çalışma: ipucu, kanıt değil. Terazi görseli, sağda boş kâğıtta yazılar.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S16: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYakala = K(2, "People") - 0.1, tSon = K(3, "It's") - 0.2;
  const b = s.meta.baslik!;
  const [sc, al] = pop(t, K(1, "observational"), 0.5);
  const sol = Math.max(0, Math.min(1, (tSon - t) / 0.4 + 0.0)) ;
  return (
    <>
      <Kamera gorsel="tam/16" pencere={kameraYolu(t, s.sure, [0, 0, 1800], [70, 50, 1640])}>
        <Etiket t={t} bas={K(2, "greens")} bitis={tSon} capa={[520, 560]} konum={[330, 220]} metin="GREENS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={0.25} bitis={tSon} metin="THE CATCH" x={1860} y={170} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <div style={{ position: "absolute", right: 60, top: 250, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al * sol,
        whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.altin}`, borderRadius: 999, padding: "8px 24px",
        fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>OBSERVATIONAL STUDY</div>
      <Liste t={t} isaret="nokta" x={1500} y={400} aralik={74} boyut={30} genislik={380} ogeler={[
        { bas: K(2, "smoking"), metin: "SMOKING", renk: RENK.altin, bitis: tSon },
        { bas: K(2, "exercise"), metin: "EXERCISE", renk: RENK.altin, bitis: tSon },
        { bas: K(2, "other habits"), metin: "OTHER HABITS", renk: RENK.altin, bitis: tSon },
      ]} />
      <Baslik t={t} bas={K(3, "strong")} metin={b.satirlar[0]} x={1860} y={170} boyut={92} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "not")} metin={b.satirlar[1]} x={1860} y={272} boyut={92} hiza="sag" renk={RENK.mercan} />
    </>
  );
};

export default S16;
