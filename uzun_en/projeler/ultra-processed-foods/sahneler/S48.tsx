// Sahne 48 — "Flip it over": ambalajı çevir, uzun içerik listesi.
import React from "react";
import { INTER, Baslik, Etiket, Hap, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// içerik listesi satırları: null = gri çubuk (uzun liste), metin = dikkat çeken madde
const SATIRLAR: { m: string | null; w?: number; ifade?: string }[] = [
  { m: null, w: 520 }, { m: null, w: 430 }, { m: "FLAVORINGS", ifade: "flavorings" },
  { m: null, w: 500 }, { m: "EMULSIFIERS", ifade: "emulsifiers" }, { m: null, w: 380 },
  { m: "SYRUPS", ifade: "syrups" }, { m: null, w: 470 }, { m: null, w: 340 },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPaket = K(1, "package"), tFlip = K(1, "Flip"), tUzun = K(2, "long"), tListe = K(2, "ingredient");
  const tUPF = K(2, "ultra-processed");
  const [sk, ak] = pop(t, tListe - 0.1, 0.55);
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 100, 1700])}>
        <Etiket t={t} bas={tPaket} bitis={tUzun - 0.1} capa={[640, 880]} konum={[1160, 700]} metin="THE PACKAGE" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="TWO:" x={140} y={170} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFlip} metin="FLIP IT OVER" x={140} y={300} boyut={110} renk={RENK.koyuYesil} />
      {/* içerik listesi kartı */}
      <div style={{ position: "absolute", left: 1040, top: 150, width: 740, height: 600, opacity: ak, transform: `scale(${sk})`, transformOrigin: "50% 0",
        background: RENK.kagitAcik, border: `4px solid ${RENK.lacivert}`, borderRadius: 22, boxShadow: "0 14px 34px rgba(48,40,34,0.22)" }}>
        <div style={{ position: "absolute", left: 40, top: 24, fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 4, color: RENK.lacivert }}>INGREDIENT LIST</div>
        <div style={{ position: "absolute", left: 40, right: 40, top: 78, height: 4, background: RENK.lacivert, opacity: 0.6 }} />
      </div>
      {SATIRLAR.map((r, i) => {
        const y = 238 + i * 54;
        if (r.m === null) {
          const g = eout(ilerle(t, tUzun + 0.12 * i, 0.5));
          return <div key={i} style={{ position: "absolute", left: 1080, top: y + 16, height: 18, width: (r.w ?? 400) * g, borderRadius: 9, background: "#CFC8B8" }} />;
        }
        const [sc, al] = pop(t, K(2, r.ifade!) - 0.05, 0.5);
        return (
          <div key={i} style={{ position: "absolute", left: 1070, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}>
            <Hap metin={r.m} renk={RENK.mercan} boyut={28} />
          </div>
        );
      })}
      {/* sonuç hapı */}
      {(() => {
        const [sc, al] = pop(t, tUPF - 0.1, 0.55);
        return (
          <div style={{ position: "absolute", left: 1410, top: 800, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
            <Hap metin="USUALLY ULTRA-PROCESSED" renk={RENK.koyuYesil} boyut={32} />
          </div>
        );
      })()}
    </>
  );
};

export default S48;
