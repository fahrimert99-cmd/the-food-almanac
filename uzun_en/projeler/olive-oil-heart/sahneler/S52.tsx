// Sahne 52 — iki: takas olarak kullan
import React from "react";
import { ANTON, Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tIki = K(0, "two"), tBasl = K(1, "swap");
  const tVeg = K(2, "vegetables"), tBut = K(2, "butter"), tBread = K(2, "bread"), tMar = K(2, "margarine"), tDres = K(2, "dressings"), tMay = K(2, "mayonnaise");
  const tGor = K(3, "swap the studies");
  const [sc, al] = pop(t, tIki, 0.5);
  // takas satırı: bağlam + eski → zeytinyağı
  const takas = (bas: number, bitis: number, baglam: string, eski: string) => {
    const [s1, a1] = pop(t, bas, 0.5);
    const a = a1 * sol(t, bitis);
    if (a <= 0) return null;
    return (
      <div style={{ position: "absolute", left: 70, top: 175, opacity: a, transform: `scale(${s1})`, transformOrigin: "0 0" }}>
        <div style={{ fontFamily: "Inter", fontWeight: 800, fontSize: 24, letterSpacing: 4, color: RENK.altin, marginBottom: 8 }}>{baglam}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <Hap metin={eski} renk={RENK.mercan} boyut={28} />
          <span style={{ fontFamily: ANTON, fontSize: 40, color: RENK.altin }}>→</span>
          <Hap metin="OLIVE OIL" renk={RENK.yesil} boyut={28} />
        </div>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])} />
      <div style={{ position: "absolute", left: 70, top: 48, width: 96, height: 96, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 60, transform: `scale(${sc})`, opacity: al }}>2</div>
      <Baslik t={t} bas={tBasl} metin="USE IT AS A SWAP" x={190} y={96} boyut={80} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tVeg} bitis={tBread - 0.2} capa={[720, 520]} konum={[560, 840]} metin="VEGETABLES" renk={RENK.yesil} />
      {takas(tBut, tBread - 0.1, "ON VEGETABLES", "BUTTER")}
      {takas(tMar, tDres - 0.1, "ON BREAD", "MARGARINE")}
      {takas(tMay, tGor - 0.1, "IN DRESSINGS", "MAYONNAISE")}
      <Etiket t={t} bas={tDres} bitis={tGor - 0.2} capa={[1330, 385]} konum={[1160, 200]} metin="DRESSINGS" renk={RENK.altin} />
      <Ikon t={t} bas={tGor} ad="onay" x={110} y={215} boyut={72} />
      <Baslik t={t} bas={tGor + 0.1} metin="THE SWAP IN THE STUDIES" x={170} y={215} boyut={52} renk={RENK.lacivert} />
    </>
  );
};

export default S52;
