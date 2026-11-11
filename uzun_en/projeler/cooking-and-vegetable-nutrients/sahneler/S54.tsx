// Sahne 54 — Bonus: yağda çözünen pigmentler biraz yağ ister.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Yerel yardımcılar: sayı rozeti ve hap.
const Sayi: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 56, top: 52, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert,
      border: `4px solid ${RENK.altin}`, boxSizing: "border-box", color: "#fff", fontFamily: ANTON, fontSize: 66, lineHeight: "88px",
      textAlign: "center", transform: `scale(${sc})`, opacity: al }}>{n}</div>
  );
};

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string;
  ikon?: "onay" | "carpi" | "ok" | "saat"; boyut?: number }> = ({ t, bas, bitis = 1e9, x, y, metin, renk, ikon, boyut = 30 }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 26px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.lacivert,
      boxShadow: "0 8px 22px rgba(48,40,34,0.18)" }}>
      {ikon ? <IkonYol ad={ikon} boyut={boyut * 1.2} renk={renk} kalinlik={7} />
        : <span style={{ width: boyut * 0.5, height: boyut * 0.5, borderRadius: "50%", background: renk, flex: "none" }} />}
      {metin}
    </div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBonus = K(0, "bonus"), tPig = K(1, "fat-soluble"), tYag = K(1, "fat from"), tSos = K(1, "dressing"), tCer = K(1, "nuts");
  const tZeytin = K(1, "olive oil"), tDaha = K(1, "works better"), tSade = K(1, "plain");
  const bit = tDaha - 0.2;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 50, 1760])}>
        <Etiket t={t} bas={tPig} bitis={bit} capa={[853, 340]} konum={[900, 110]} metin="FAT-SOLUBLE PIGMENTS" renk={RENK.mercan} />
        <Etiket t={t} bas={tSos} bitis={tZeytin - 0.1} capa={[1467, 330]} konum={[1740, 380]} metin="DRESSING" renk={RENK.altin} />
        <Etiket t={t} bas={tZeytin} capa={[1467, 330]} konum={[1740, 380]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={tCer} capa={[700, 385]} konum={[290, 300]} metin="NUTS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tBonus} bitis={bit} metin="BONUS" x={100} y={105} boyut={90} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tYag} bitis={bit} metin="+ FAT" x={1150} y={105} boyut={90} renk={RENK.altin} />
      <Pil t={t} bas={tDaha} x={520} y={105} metin="WITH A LITTLE FAT" renk={RENK.yesil} ikon="onay" boyut={34} />
      <Pil t={t} bas={tSade} x={1050} y={105} metin="PLAIN" renk={RENK.gri} boyut={34} />
    </>
  );
};

export default S54;
