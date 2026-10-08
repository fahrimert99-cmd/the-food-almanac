// Sahne 36 — Özet: sebze + protein önce → mide yavaşlar, lif yerinde, hormonlar sinyal verir → karbonhidrat gelince vücut hazır.
// Düzen: solda sindirim sistemi, sağdaki boş kitap sayfasında dikey akış diyagramı; organlardan düğümlere kesikli bağlar.
import React from "react";
import { Baslik, Ikon, INTER, Kamera, Parcaciklar, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pencereSinirla, pop } from "../kutuphane";

// akış diyagramı (ekran koordinatı)
const OMURGA_X = 1100;
const Y = { veg: 318, mide: 406, lif: 490, hormon: 574, karb: 668, hazir: 762 };

// numaralı düğüm: önce boş halka (iskelet), söylenince dolar ve yazı kayarak gelir
const Dugum: React.FC<{ t: number; iskelet: number; bas: number; no: number; y: number; metin: string; renk: string }> = ({
  t, iskelet, bas, no, y, metin, renk,
}) => {
  const pI = eout(ilerle(t, iskelet, 0.45));
  const [sc, al] = pop(t, bas, 0.5);
  const pY = eout(ilerle(t, bas + 0.1, 0.5));
  if (pI <= 0) return null;
  return (
    <>
      <div style={{ position: "absolute", left: OMURGA_X - 27, top: y - 27, width: 54, height: 54, borderRadius: "50%", boxSizing: "border-box",
        border: `3px solid ${RENK.murekkep}`, background: RENK.kagitAcik, opacity: 0.55 * pI * (1 - al) }} />
      <div style={{ position: "absolute", left: OMURGA_X - 27, top: y - 27, width: 54, height: 54, borderRadius: "50%", background: renk,
        border: `4px solid ${RENK.kagitAcik}`, boxSizing: "border-box", boxShadow: "0 6px 16px rgba(48,40,34,0.22)", display: "flex",
        alignItems: "center", justifyContent: "center", transform: `scale(${sc})`, opacity: al, fontFamily: INTER, fontWeight: 800,
        fontSize: 26, color: "#fff" }}>{no}</div>
      <div style={{ position: "absolute", left: OMURGA_X + 46, top: y - 24, opacity: pY, transform: `translateX(${(1 - pY) * -24}px)`,
        fontFamily: INTER, fontWeight: 800, fontSize: 34, lineHeight: "48px", letterSpacing: 1, color: RENK.lacivert, whiteSpace: "nowrap" }}>
        {metin}
      </div>
    </>
  );
};

// hap biçimli düğüm (başlangıç / karbonhidrat gelişi)
const HapDugum: React.FC<{ t: number; iskelet: number; bas: number; y: number; metin: string; renk: string }> = ({
  t, iskelet, bas, y, metin, renk,
}) => {
  const pI = eout(ilerle(t, iskelet, 0.45));
  const [sc, al] = pop(t, bas, 0.5);
  if (pI <= 0) return null;
  return (
    <>
      <div style={{ position: "absolute", left: OMURGA_X - 13, top: y - 13, width: 26, height: 26, borderRadius: "50%",
        background: al > 0 ? renk : RENK.kagitAcik, border: `3px solid ${al > 0 ? RENK.kagitAcik : RENK.murekkep}`, boxSizing: "border-box",
        opacity: al > 0 ? 1 : 0.55 * pI, transform: `scale(${al > 0 ? 0.6 + 0.4 * sc : 1})` }} />
      <div style={{ position: "absolute", left: OMURGA_X + 34, top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "0% 50%",
        opacity: al, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik,
        border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 24px 8px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28,
        letterSpacing: 2, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
        <span style={{ width: 14, height: 14, borderRadius: "50%", background: renk }} />
        {metin}
      </div>
    </>
  );
};

// organdan düğüme kesikli bağ (Etiket çizgisi gibi): halka nabzı + çapa noktası + çizilen çizgi
const Bag: React.FC<{ t: number; bas: number; a: [number, number]; b: [number, number]; renk: string }> = ({ t, bas, a, b, renk }) => {
  if (t < bas) return null;
  const p = eout(ilerle(t, bas + 0.05, 0.55));
  const halka = ilerle(t, bas, 1.0);
  const [ds] = pop(t, bas, 0.4);
  const ex = a[0] + (b[0] - a[0]) * p, ey = a[1] + (b[1] - a[1]) * p;
  return (
    <g>
      <line x1={a[0]} y1={a[1]} x2={ex} y2={ey} stroke={RENK.kagitAcik} strokeWidth={9} strokeLinecap="round" opacity={0.9} />
      <line x1={a[0]} y1={a[1]} x2={ex} y2={ey} stroke={RENK.murekkep} strokeWidth={3.5} strokeDasharray="12 9" />
      <circle cx={a[0]} cy={a[1]} r={12 + 30 * halka} fill="none" stroke={renk} strokeWidth={4} opacity={(1 - halka) * 0.9} />
      <circle cx={a[0]} cy={a[1]} r={14 * ds} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={3} />
      <circle cx={a[0]} cy={a[1]} r={7 * ds} fill={renk} />
    </g>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = pencereSinirla(kameraYolu(t, s.sure, [0, 10, 1900], [50, 40, 1790]));
  const sk = 1920 / pencere[2];
  const ekran = (x: number, y: number): [number, number] => [(x - pencere[0]) * sk, (y - pencere[1]) * sk];
  // 1. cümle: iskelet
  const tBir = K(0, "together"), tResim = K(0, "picture");
  // 2. cümle
  const tVeg = K(1, "vegetables and protein"), tGut = K(1, "your gut"), tPrimed = K(1, "primed");
  // 3. cümle
  const tMide = K(2, "stomach slows"), tLif = K(2, "fiber"), tHormon = K(2, "hormones");
  // 4. cümle
  const tKarb = K(3, "carbohydrates arrive"), tHazir = K(3, "body is ready");
  const pOmurga = einout(ilerle(t, tResim - 0.1, 1.1));
  const iskelet = (k: number) => tResim + 0.15 + k * 0.12;
  // organ çapaları (görsel koordinatı -> ekran)
  const aMide = ekran(612, 420), aLif = ekran(425, 690), aHormon = ekran(592, 792);
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pencere}>
        {/* 4. cümle: glukoz yavaşça yemek borusundan mideye iner */}
        <Parcaciklar t={t} bas={tKarb - 0.1} kaynak={[480, -30]} hedef={[598, 405]} adet={24} aralik={0.17} omur={2.3} yayilma={26}
          hedefYayilma={90} kavis={250} boyut={8} tohum="glukoz36" />
      </Kamera>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        {/* omurga: kesikli dikey çizgi */}
        {pOmurga > 0 && (
          <line x1={OMURGA_X} y1={Y.veg} x2={OMURGA_X} y2={Y.veg + (Y.hazir - Y.veg) * pOmurga} stroke={RENK.murekkep} strokeWidth={4}
            strokeDasharray="4 12" strokeLinecap="round" opacity={0.5} />
        )}
        <Bag t={t} bas={tMide} a={aMide} b={[OMURGA_X - 30, Y.mide]} renk={RENK.lacivert} />
        <Bag t={t} bas={tLif} a={aLif} b={[OMURGA_X - 30, Y.lif]} renk={RENK.yesil} />
        {/* hormon kaynağı: nabız */}
        {t >= tHormon && (() => {
          const halka = (((t - tHormon) / 1.4) % 1);
          const [ds] = pop(t, tHormon, 0.4);
          return (
            <g>
              <circle cx={aHormon[0]} cy={aHormon[1]} r={12 + 30 * halka} fill="none" stroke={RENK.mercan} strokeWidth={4} opacity={(1 - halka) * 0.9} />
              <circle cx={aHormon[0]} cy={aHormon[1]} r={14 * ds} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={3} />
              <circle cx={aHormon[0]} cy={aHormon[1]} r={7 * ds} fill={RENK.mercan} />
            </g>
          );
        })()}
      </svg>
      {/* 3. cümle: hormonlar sinyal verir (mercan parçacıklar bağırsaktan 3. düğüme) */}
      <Parcaciklar t={t} bas={tHormon + 0.1} kaynak={aHormon} hedef={[OMURGA_X - 34, Y.hormon]} adet={46} aralik={0.13} omur={1.9}
        yayilma={36} hedefYayilma={22} kavis={0} renk={RENK.mercan} boyut={7} tohum="hormon36" />
      {/* sağ sayfa: başlık */}
      <Baslik t={t} bas={tBir - 0.1} metin="PUT TOGETHER" x={1064} y={128} boyut={26} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={tGut - 0.1} metin="A PRIMED" x={1060} y={214} boyut={112} renk={RENK.lacivert} />
      <Baslik t={t} bas={Math.min(tPrimed, tGut + 0.2)} metin="GUT" x={1060 + 424} y={214} boyut={112} renk={RENK.koyuYesil} />
      {/* akış */}
      <HapDugum t={t} iskelet={iskelet(0)} bas={tVeg - 0.05} y={Y.veg} metin="VEG + PROTEIN FIRST" renk={RENK.yesil} />
      <Dugum t={t} iskelet={iskelet(1)} bas={tMide} no={1} y={Y.mide} metin="STOMACH SLOWS DOWN" renk={RENK.lacivert} />
      <Dugum t={t} iskelet={iskelet(2)} bas={tLif} no={2} y={Y.lif} metin="FIBER IN PLACE" renk={RENK.yesil} />
      <Dugum t={t} iskelet={iskelet(3)} bas={tHormon} no={3} y={Y.hormon} metin="HORMONES SIGNALING" renk={RENK.mercan} />
      <HapDugum t={t} iskelet={iskelet(4)} bas={tKarb} y={Y.karb} metin="CARBS ARRIVE" renk={RENK.altin} />
      {/* sonuç: vücut hazır */}
      {pOmurga > 0.95 && t < tHazir + 0.1 && (
        <div style={{ position: "absolute", left: OMURGA_X - 13, top: Y.hazir - 13, width: 26, height: 26, borderRadius: "50%",
          border: `3px solid ${RENK.murekkep}`, background: RENK.kagitAcik, boxSizing: "border-box", opacity: 0.55 }} />
      )}
      <Ikon t={t} bas={tHazir} ad="onay" x={OMURGA_X} y={Y.hazir} boyut={72} zemin={RENK.yesil} />
      <Baslik t={t} bas={tHazir + 0.1} metin="BODY READY" x={OMURGA_X + 56} y={Y.hazir} boyut={76} renk={RENK.koyuYesil} />
    </>
  );
};

export default S36;
