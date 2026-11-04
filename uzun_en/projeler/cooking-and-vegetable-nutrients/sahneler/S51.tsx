// Sahne 51 — Alışkanlık 3: domates ve havucu zeytinyağıyla pişir.
import React from "react";
import { ANTON, Baslik, Etiket, IkonYol, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

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

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDom = K(1, "tomatoes"), tHav = K(1, "carrots"), tYag = K(1, "olive oil");
  const tSos = K(2, "tomato sauce"), tKav = K(2, "roasted carrots"), tCor = K(2, "vegetable soup");
  const tIsi = K(3, "heat"), tYagS = K(3, "fat"), tAl = K(3, "take up"), tLik = K(3, "lycopene"), tBeta = K(3, "beta-carotene");
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [100, 90, 1760])}>
        <Etiket t={t} bas={tDom} bitis={3.9} capa={[1107, 600]} konum={[1020, 400]} metin="TOMATOES" renk={RENK.mercan} />
        <Etiket t={t} bas={tHav} bitis={3.9} capa={[600, 560]} konum={[520, 400]} metin="CARROTS" renk={RENK.altin} />
        <Etiket t={t} bas={tYag} bitis={7.6} capa={[1467, 340]} konum={[1690, 330]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={tLik} capa={[1107, 600]} konum={[1020, 400]} metin="LYCOPENE" renk={RENK.mercan} />
        <Etiket t={t} bas={tBeta} capa={[600, 560]} konum={[520, 400]} metin="BETA-CAROTENE" renk={RENK.altin} />
      </Kamera>
      <Sayi t={t} n="3" />
      <Pil t={t} bas={tSos} bitis={7.6} x={400} y={100} metin="TOMATO SAUCE" renk={RENK.mercan} />
      <Pil t={t} bas={tKav} bitis={7.6} x={800} y={100} metin="ROASTED CARROTS" renk={RENK.altin} />
      <Pil t={t} bas={tCor} bitis={7.6} x={1210} y={100} metin="VEGETABLE SOUP" renk={RENK.yesil} />
      <Baslik t={t} bas={tIsi} metin="HEAT" x={190} y={105} boyut={90} renk={RENK.mercan} />
      <Baslik t={t} bas={tYagS} metin="+ FAT" x={420} y={105} boyut={90} renk={RENK.altin} />
      <Not t={t} bas={tAl} metin="MAY HELP YOUR BODY TAKE UP" x={190} y={175} boyut={36} agirlik={800} />
    </>
  );
};

export default S51;
