// Sahne 25 — Imai 2011: 2 yıl izlem, HbA1c; sağdaki boş alanda bilgi sütunu + iki grup kartı.
import React from "react";
import { Baslik, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani,
  pop } from "../kutuphane";

const X0 = 1010, SAG = 1860;
// dört küçük mevsim ağacı (görsel koordinatı): "iki yıl" denirken sırayla nabız
const AGACLAR: [number, number][] = [[253, 745], [387, 680], [989, 740], [1137, 782]];

// 2 YEARS yanında küçük zaman çizgisi: başlangıç -> 1. yıl -> 2. yıl
const ZamanCizgisi: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const a = eout(ilerle(t, bas, 0.4));
  if (a <= 0) return null;
  const x0 = 1500, x1 = 1800, y = 210;
  const p = eout(ilerle(t, bas + 0.2, 1.3));
  const nokta = [{ x: x0, m: "START" }, { x: (x0 + x1) / 2, m: "YEAR 1" }, { x: x1, m: "YEAR 2" }];
  return (
    <>
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, opacity: a }}>
        <line x1={x0} y1={y} x2={x1} y2={y} stroke={RENK.murekkep} strokeOpacity={0.18} strokeWidth={10} strokeLinecap="round" />
        <line x1={x0} y1={y} x2={x0 + (x1 - x0) * p} y2={y} stroke={RENK.koyuYesil} strokeWidth={10} strokeLinecap="round" />
        {nokta.map((n) => {
          const dolu = x0 + (x1 - x0) * p >= n.x - 1;
          return <circle key={n.m} cx={n.x} cy={y} r={11} fill={dolu ? RENK.koyuYesil : RENK.kagitAcik} stroke={RENK.koyuYesil} strokeWidth={4} />;
        })}
      </svg>
      {nokta.map((n) => (
        <div key={n.m} style={{ position: "absolute", left: n.x, top: y + 24, transform: "translateX(-50%)", opacity: a,
          fontFamily: INTER, fontWeight: 700, fontSize: 22, letterSpacing: 1, color: RENK.gri, whiteSpace: "nowrap" }}>{n.m}</div>
      ))}
    </>
  );
};

// Grup kartı: solda simge dairesi, başlık, altında not/hapler, sağda isteğe bağlı rozet
const Kart: React.FC<{
  t: number; bas: number; y: number; renk: string; ikon: React.ReactNode; baslik: string; alt?: React.ReactNode; sag?: React.ReactNode;
}> = ({ t, bas, y, renk, ikon, baslik, alt, sag }) => {
  const p = eout(ilerle(t, bas, 0.5));
  if (p <= 0) return null;
  return (
    <div style={{ position: "absolute", left: X0, top: y, width: SAG - X0, height: 112, boxSizing: "border-box", opacity: p,
      transform: `translateX(${(1 - p) * 40}px)`, display: "flex", alignItems: "center", gap: 22, padding: "0 22px 0 18px",
      background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 22, boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <div style={{ width: 70, height: 70, flex: "none", borderRadius: "50%", background: renk, display: "flex", alignItems: "center",
        justifyContent: "center" }}>{ikon}</div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 1, color: RENK.murekkep, whiteSpace: "nowrap" }}>{baslik}</div>
        {alt}
      </div>
      {sag}
    </div>
  );
};

const Cip: React.FC<{ t: number; bas: number; metin: string }> = ({ t, bas, metin }) => {
  const [sc, al] = pop(t, bas, 0.45);
  return (
    <span style={{ display: "inline-block", transform: `scale(${sc})`, opacity: al, transformOrigin: "0 50%", border: `2.5px solid ${RENK.gri}`,
      borderRadius: 999, padding: "3px 14px", fontFamily: INTER, fontWeight: 800, fontSize: 20, letterSpacing: 1.5, color: RENK.lacivert,
      whiteSpace: "nowrap", background: "#fff" }}>{metin}</span>
  );
};

// "standart plan" simgesi: liste satırları
const ListeSimge = () => (
  <svg width={40} height={40} viewBox="0 0 40 40" stroke="#fff" strokeWidth={5} strokeLinecap="round">
    <line x1="6" y1="10" x2="34" y2="10" /><line x1="6" y1="20" x2="34" y2="20" /><line x1="6" y1="30" x2="26" y2="30" />
  </svg>
);

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYil = K(0, "two years"), tIzle = K(0, "followed");
  const tHb = K(1, "HbA1c"), tUzun = K(1, "long-term"), tDaha = K(1, "improved more");
  const tStd = K(1, "standard"), tKarm = K(1, "complicated"), tDeg = K(1, "food exchanges");
  const [rs, ra] = pop(t, tDaha + 0.3, 0.5);
  return (
    <>
      {/* bileğin sol kenardaki kesik ucu pencere dışında kalır (x >= 70) */}
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [70, 20, 1820], [150, 50, 1720])}>
        {AGACLAR.map(([x, y], i) => {
          const h = ilerle(t, tIzle + i * 0.2, 1.1);
          if (h <= 0 || h >= 1) return null;
          return (
            <svg key={i} width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
              <circle cx={x} cy={y} r={44 + 40 * h} fill="none" stroke={RENK.altin} strokeWidth={5} opacity={Math.sin(Math.PI * h) * 0.9} />
            </svg>
          );
        })}
        <Etiket t={t} bas={K(0, "vegetables-first") - 0.1} capa={[688, 432]} konum={[770, 250]} metin="VEGETABLES FIRST" renk={RENK.yesil} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "study") - 0.1} />
      {/* sağ sütun: kim, ne kadar süre */}
      <Baslik t={t} bas={K(0, "type 2") - 0.1} metin="PEOPLE WITH TYPE 2 DIABETES" x={X0} y={128} boyut={26} renk={RENK.altin}
        font="inter" aralik={4} />
      <Baslik t={t} bas={tYil - 0.1} metin={s.meta.baslik?.satirlar[0] ?? "2 YEARS"} x={X0 - 4} y={216} boyut={120} renk={RENK.koyuYesil} />
      <ZamanCizgisi t={t} bas={tYil + 0.1} />
      {/* HbA1c ve tanımı */}
      <Baslik t={t} bas={tHb - 0.1} metin="HbA1c" x={X0 - 2} y={354} boyut={80} renk={RENK.lacivert} />
      <Not t={t} bas={tUzun - 0.1} metin="the long-term blood sugar marker" x={1250} y={334} boyut={30} genislik={590} />
      {/* iki grup */}
      <Kart t={t} bas={tDaha - 0.1} y={428} renk={RENK.yesil} ikon={<IkonYol ad="onay" boyut={44} renk="#fff" />} baslik="VEGETABLES FIRST"
        alt={<div style={{ fontFamily: INTER, fontWeight: 500, fontSize: 24, color: RENK.gri }}>a simple rule</div>}
        sag={
          <div style={{ transform: `scale(${rs})`, opacity: ra, background: RENK.yesil, color: "#fff", borderRadius: 999, padding: "10px 22px",
            fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, whiteSpace: "nowrap" }}>IMPROVED MORE</div>
        } />
      <Kart t={t} bas={tStd - 0.1} y={552} renk={RENK.gri} ikon={<ListeSimge />} baslik="STANDARD MEAL PLAN"
        alt={<div style={{ display: "flex", gap: 10 }}><Cip t={t} bas={tKarm - 0.1} metin="MORE COMPLICATED" /><Cip t={t} bas={tDeg - 0.1} metin="FOOD EXCHANGES" /></div>} />
    </>
  );
};

export default S25;
