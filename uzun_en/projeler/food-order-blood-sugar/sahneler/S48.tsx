// Sahne 48 — Günlük hayatta: kahvaltıda yumurta/yoğurt tosttan önce, akşamda salata + somon patatesten önce.
// Görsel (NVIDIA, yenilendi): tam kare kahvaltı — solda yumurta tabağı, sağda yoğurt kâsesi, arkada tost; sağ panel kaldırıldı (kâseyi örtüyordu).
import React from "react";
import { Baslik, Etiket, GorselKart, INTER, Kamera, Ortu, RENK, SP, einout, eout, ilerle, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Lacivert öğün hapı (altın nokta). x,y = merkez
const OgunHapi: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number }> = ({
  t, bas, bitis = 1e9, metin, x, y,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a,
      display: "flex", alignItems: "center", gap: 14, background: RENK.lacivert, color: "#fff", borderRadius: 999,
      padding: "12px 30px 12px 22px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>
      <span style={{ width: 14, height: 14, borderRadius: "50%", background: RENK.altin }} />
      {metin}
    </div>
  );
};

const KARTLAR = [
  { ifade: "salad", ad: "SALAD", gorsel: "tam/45", kirp: [190, 240, 1010, 855] as [number, number, number, number], x: 440, aci: -2, renk: RENK.yesil },
  { ifade: "salmon", ad: "SALMON", gorsel: "tam/35", kirp: [190, 435, 1030, 1065] as [number, number, number, number], x: 880, aci: 1.5, renk: RENK.yesil },
  { ifade: "potatoes", ad: "POTATOES", gorsel: "tam/06", kirp: [1060, 775, 1404, 1033] as [number, number, number, number], x: 1480, aci: 2, renk: RENK.mercan },
];

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  // 1. bölüm (kahvaltı) — tam kare görsel: yumurta / yoğurt / tost etiketleri + sol üstte sıra başlığı
  const tCikis = c[1].bas - 0.2;
  const tEgg = K(0, "eggs"), tYog = K(0, "Greek yogurt"), tOnce = K(0, "before"), tTost = K(0, "toast"), tKah = K(0, "breakfast");
  // 2. bölüm (akşam) — kâğıt örtü + görsel kartları
  const pOrtu = einout(ilerle(t, c[1].bas, 0.6));
  const tAksam = K(1, "dinner"), tOnce2 = K(1, "before");
  const pOk = eout(ilerle(t, tOnce2, 0.5));
  // 3. bölüm — kapanış başlığı
  const tWorks = K(2, "works"), tFoods = K(2, "foods");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [140, 70, 1780])}>
        <Etiket t={t} bas={tEgg} bitis={tCikis} capa={[470, 700]} konum={[260, 880]} metin="EGGS" renk={RENK.yesil} />
        <Etiket t={t} bas={tYog} bitis={tCikis} capa={[1450, 700]} konum={[1600, 905]} metin="GREEK YOGURT" renk={RENK.yesil} />
        <Etiket t={t} bas={tTost} bitis={tCikis} capa={[1500, 250]} konum={[1765, 300]} metin="TOAST" renk={RENK.mercan} />
      </Kamera>
      {/* sol üst boş kâğıt: sıra */}
      <Baslik t={t} bas={0.3} bitis={tCikis} metin="IN EVERYDAY LIFE" x={80} y={80} boyut={28} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={tOnce} bitis={tCikis} metin="BEFORE" x={80} y={160} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tTost} bitis={tCikis} metin="THE TOAST" x={326} y={160} boyut={84} renk={RENK.mercan} />
      <OgunHapi t={t} bas={tKah} bitis={tCikis} metin="AT BREAKFAST" x={230} y={262} />

      {/* akşam yemeği: kartlar */}
      <Ortu a={0.94 * pOrtu} />
      <OgunHapi t={t} bas={tAksam} metin="AT DINNER" x={960} y={150} />
      {KARTLAR.map((k) => {
        const b = K(1, k.ifade);
        return (
          <React.Fragment key={k.ad}>
            <GorselKart t={t} bas={b} gorsel={k.gorsel} kirp={k.kirp} x={k.x} y={420} w={380} h={285} aci={k.aci} />
            <Baslik t={t} bas={b + 0.15} metin={k.ad} x={k.x} y={652} boyut={58} renk={k.renk} hiza="orta" />
          </React.Fragment>
        );
      })}
      {pOk > 0 && (
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <line x1={1125} y1={420} x2={1125 + 95 * pOk} y2={420} stroke={RENK.altin} strokeWidth={8} strokeLinecap="round" />
          <polygon points={`${1125 + 95 * pOk + 24},420 ${1125 + 95 * pOk},404 ${1125 + 95 * pOk},436`} fill={RENK.altin} />
        </svg>
      )}
      <Baslik t={t} bas={tOnce2} metin="BEFORE" x={1185} y={370} boyut={24} renk={RENK.altin} font="inter" aralik={5} hiza="orta" />

      {/* kapanış */}
      <Baslik t={t} bas={tWorks} metin="IT WORKS WITH" x={960} y={770} boyut={34} renk={RENK.lacivert} font="inter" aralik={6} hiza="orta" />
      <Baslik t={t} bas={tFoods} metin="THE FOODS YOU ALREADY EAT" x={960} y={858} boyut={88} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S48;
