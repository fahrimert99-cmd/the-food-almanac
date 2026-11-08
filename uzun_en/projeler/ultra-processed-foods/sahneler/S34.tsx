// Sahne 34 — iki patika: birlikte gitmek, neden olmak değildir; sonra farklar.
import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, Not, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const FARKLAR = [
  { ifade: "income", metin: "INCOME" },
  { ifade: "activity", metin: "ACTIVITY" },
  { ifade: "smoking", metin: "SMOKING" },
  { ifade: "and", metin: "AND MORE" },
];

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFark = K(2, "People");
  const tGit = K(1, "two");
  const pN = eout(ilerle(t, K(1, "not") + 0.2, 0.4)) * (1 - eout(ilerle(t, tFark - 0.1, 0.3)));
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 0, 1780])}>
        {/* binadaki sahte tabela yazısı örtülür */}
        <div style={{ position: "absolute", left: 365, top: 505, width: 115, height: 40,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #EFE8D8 0%, #EFE8D8 70%, rgba(239,232,216,0) 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "observational") - 0.3} bitis={tFark - 0.1} metin="LINK," x={960} y={110} boyut={92} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "observational") - 0.1} bitis={tFark - 0.1} metin="NOT PROOF" x={960} y={206} boyut={92} hiza="orta" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tGit} bitis={tFark - 0.1} capa={[600, 800]} konum={[380, 900]} metin="ONE THING" renk={RENK.altin} />
      <Etiket t={t} bas={K(1, "things") + 0.2} bitis={tFark - 0.1} capa={[1250, 830]} konum={[1480, 900]} metin="ANOTHER THING" renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "not")} bitis={tFark - 0.1} ad="carpi" zemin={RENK.mercan} x={960} y={470} />
      {pN > 0 && (
        <div style={{ position: "absolute", left: 960, top: 520, transform: `translate(-50%, 0)`, opacity: pN, background: RENK.kagitAcik,
          border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800, fontSize: 30,
          color: RENK.lacivert, whiteSpace: "nowrap" }}>ONE DOESN'T CAUSE THE OTHER</div>
      )}
      <Not t={t} bas={tFark} metin="PEOPLE WHO EAT MORE ULTRA-PROCESSED FOOD OFTEN DIFFER IN" x={960} y={70} hiza="orta" boyut={32} agirlik={800} genislik={1500} />
      <div style={{ position: "absolute", left: 0, right: 0, top: 150, display: "flex", justifyContent: "center", gap: 22 }}>
        {FARKLAR.map((f) => {
          const [sc, al] = pop(t, K(2, f.ifade), 0.5);
          return (
            <div key={f.metin} style={{ transform: `scale(${sc})`, opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`,
              borderRadius: 999, padding: "12px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 38, letterSpacing: 1.5, color: RENK.lacivert,
              boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>{f.metin}</div>
          );
        })}
      </div>
    </>
  );
};
export default S34;
