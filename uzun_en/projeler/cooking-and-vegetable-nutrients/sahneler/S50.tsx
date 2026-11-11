// Sahne 50 — Alışkanlık 2: kaynatırsan suyu sakla.
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

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKaynat = K(1, "boil"), tAz = K(1, "small amount"), tSakla = K(1, "keep it");
  const tCorba = K(2, "soup"), tPilav = K(2, "rice"), tSos = K(2, "sauce"), tVit = K(2, "vitamins"), tSofra = K(2, "plate");
  const tikla = [[tCorba, "SOUP", 540], [tPilav, "RICE", 640], [tSos, "SAUCE", 740]] as const;
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={tKaynat} bitis={4.3} capa={[560, 560]} konum={[210, 700]} metin="BOILING" renk={RENK.mercan} />
        {tikla.map(([b, m, y]) => (
          <Etiket key={m} t={t} bas={b} capa={[1160, 665]} konum={[1730, y]} metin={m} renk={RENK.altin} />
        ))}
      </Kamera>
      <Sayi t={t} n="2" />
      <Baslik t={t} bas={tAz} metin="SMALL" x={60} y={300} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tAz + 0.15} metin="WATER" x={60} y={396} boyut={92} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSakla} metin="KEEP" x={60} y={540} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tSakla + 0.15} metin="IT" x={60} y={636} boyut={92} renk={RENK.koyuYesil} />
      <Pil t={t} bas={tVit} x={1690} y={870} metin="VITAMINS REACH" renk={RENK.yesil} ikon="onay" boyut={26} />
      <Pil t={t} bas={tSofra} x={1690} y={935} metin="YOUR PLATE" renk={RENK.yesil} boyut={26} />
    </>
  );
};

export default S50;
