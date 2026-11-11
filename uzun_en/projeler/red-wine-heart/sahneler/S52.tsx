// Sahne 52 — Fransız paradoksu ve "hasta bırakanlar" diyagramı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, INTER, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFr = K(0, "french"), tCountries = K(0, "countries"), tLight = K(1, "light drinkers");
  const tGrup = K(1, "non-drinking"), tSick = K(1, "sick quitters");
  const pGrup = eout(ilerle(t, tGrup - 0.2, 0.6));
  const [sc, al] = pop(t, tSick, 0.5);
  const kutu = (y: number, metin: string, renk: string, bas: number) => {
    const [k, a] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 1330, top: y, transform: `translate(-50%, -50%) scale(${k})`, opacity: a, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px", fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])} />
      <BaslikBlok t={t} bas={tFr} satirlar={["FRENCH", "PARADOX"]} x={1860} y={170} boyut={120} hiza="sag" adim={0.2} />
      <Not t={t} bas={tCountries} metin="Compared across countries" x={1860} y={420} hiza="sag" boyut={36} bitis={tGrup - 0.3} />
      <Etiket t={t} bas={tLight} capa={[640, 470]} konum={[760, 300]} metin="LIGHT DRINKERS" renk={RENK.altin} boyut={30} />
      {/* kesik çizgili grup kutusu */}
      <div style={{ position: "absolute", left: 1000, top: 500, width: 660, height: 300, opacity: pGrup,
        border: `4px dashed ${RENK.lacivert}`, borderRadius: 28, background: "rgba(252,248,236,0.9)" }} />
      <Not t={t} bas={tGrup} metin="NON-DRINKING GROUP" x={1330} y={440} hiza="orta" boyut={34} agirlik={800} />
      {kutu(600, "NEVER DRANK", RENK.yesil, tGrup + 0.3)}
      {kutu(700, "SICK QUITTERS", RENK.mercan, tSick)}
      <div style={{ position: "absolute", left: 1330, top: 840, transform: `translate(-50%,0) scale(${sc})`, opacity: al, fontFamily: INTER,
        fontWeight: 800, fontSize: 24, letterSpacing: 2, color: RENK.mercan }}>MIXED INTO THE GROUP</div>
    </>
  );
};

export default S52;
