// Sahne 24 — Japonya: "önce sebze, sonra karbonhidrat" mesajı. Üst boşlukta başlık, sonra tepside etiketler + BEFORE oku.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Etiketin yalnızca çizgisi (hapsız): ikinci sebze kâsesini aynı hapa bağlar
const Cizgi: React.FC<{ t: number; bas: number; capa: [number, number]; hedef: [number, number]; renk: string }> = ({
  t, bas, capa, hedef, renk,
}) => {
  if (t < bas) return null;
  const [ax, ay] = capa, [lx, ly] = hedef;
  const pl = eout(ilerle(t, bas + 0.1, 0.45));
  const ex = ax + (lx - ax) * pl, ey = ay + (ly - ay) * pl;
  const halka = ilerle(t, bas, 1.0);
  const [ds] = pop(t, bas, 0.4);
  return (
    <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
      <line x1={ax} y1={ay} x2={ex} y2={ey} stroke={RENK.kagitAcik} strokeWidth={9} strokeLinecap="round" opacity={0.9} />
      <line x1={ax} y1={ay} x2={ex} y2={ey} stroke={RENK.murekkep} strokeWidth={3.5} strokeDasharray="12 9" />
      <circle cx={ax} cy={ay} r={12 + 30 * halka} fill="none" stroke={renk} strokeWidth={4} opacity={(1 - halka) * 0.9} />
      <circle cx={ax} cy={ay} r={14 * ds} fill={RENK.kagitAcik} stroke={RENK.murekkep} strokeWidth={3} />
      <circle cx={ax} cy={ay} r={7 * ds} fill={renk} />
    </svg>
  );
};

// görsel koordinatı: etiket satırı tepsinin üstündeki boş şeritte
const Y = 165;
const SEBZE: [number, number] = [540, Y], KARB: [number, number] = [1420, Y];
const OK0 = 712, OK1 = 1192; // ok ucu CARBOHYDRATES hapına değmesin

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cikis = c[1].bas - 0.25;
  const tSebze = K(1, "vegetables"), tOnce = K(1, "before"), tKarb = K(1, "carbohydrates");
  const pOk = eout(ilerle(t, tOnce, 0.6));
  const xUc = OK0 + (OK1 - OK0) * pOk;
  const [sb, ab] = pop(t, tOnce + 0.12, 0.5);
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 20, 1760])}>
        {/* 2. cümle: sebze kâseleri -> BEFORE -> pirinç */}
        <Cizgi t={t} bas={tSebze + 0.12} capa={[735, 372]} hedef={SEBZE} renk={RENK.yesil} />
        <Etiket t={t} bas={tSebze - 0.1} capa={[345, 405]} konum={SEBZE} metin="VEGETABLES" renk={RENK.yesil} boyut={30} />
        {pOk > 0 && (
          <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
            <line x1={OK0} y1={Y} x2={xUc} y2={Y} stroke={RENK.altin} strokeWidth={7} strokeLinecap="round" />
            <polygon points={`${xUc + 20},${Y} ${xUc - 2},${Y - 14} ${xUc - 2},${Y + 14}`} fill={RENK.altin} />
          </svg>
        )}
        <div style={{ position: "absolute", left: (OK0 + OK1) / 2, top: Y, transform: `translate(-50%, -50%) scale(${sb})`, opacity: ab,
          background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "8px 26px", fontFamily: INTER, fontWeight: 800,
          fontSize: 30, letterSpacing: 4, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.2)" }}>BEFORE</div>
        <Etiket t={t} bas={tKarb - 0.1} capa={[1560, 440]} konum={KARB} metin="CARBOHYDRATES" renk={RENK.mercan} boyut={30} />
      </Kamera>
      {/* 1. cümle: üst boşlukta; bölüm rozeti alanının (x<=780, y<=110) altında */}
      <Baslik t={t} bas={K(0, "Japan") - 0.15} bitis={cikis} metin="RESEARCHERS IN JAPAN" x={960} y={128} boyut={30}
        renk={RENK.altin} hiza="orta" font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "simple message") - 0.1} bitis={cikis} metin="A SIMPLE MESSAGE" x={960} y={198} boyut={84}
        renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S24;
