// Sahne 52 — İpucu 3: potasyumu daha az sodyumla eşle. Solda konserve + muz, sağda yazı sütunu; etikete bakma.
import React from "react";
import { ANTON, Baslik, Etiket, Hap, INTER, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kart: React.FC<{ t: number; bas: number; ust: string; alt: string; renk: string; y: number; bitis: number }> = ({ t, bas, ust, alt, renk, y, bitis }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1000, top: y, width: 820, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a,
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 22, padding: "14px 28px", boxShadow: "0 10px 26px rgba(48,40,34,0.16)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 46, color: renk, letterSpacing: 1 }}>{ust}</div>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, letterSpacing: 1 }}>{alt}</div>
    </div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc3, al3] = pop(t, K(0, "Three"), 0.55);
  const tPair = K(1, "Pair"), tLess = K(1, "less sodium");
  const tD = K(2, "DASH"), tE = K(2, "the effect");
  const tC = K(3, "check"), tN = K(3, "Nutrition Facts");
  const fade = tC - 0.15;
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tN} capa={[345, 500]} konum={[700, 290]} metin="NUTRITION FACTS" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 1000, top: 110, width: 104, height: 104, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 70,
        transform: `scale(${sc3})`, opacity: al3 * sol(t, fade), border: `4px solid ${RENK.kagitAcik}` }}>3</div>
      <Baslik t={t} bas={tPair} bitis={fade} metin="POTASSIUM +" x={1130} y={120} boyut={84} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tLess} bitis={fade} metin="LESS SODIUM" x={1130} y={216} boyut={84} renk={RENK.mercan} />
      <Kart t={t} bas={tD} ust="DASH + LOWER SODIUM" alt="BIGGEST DROPS" renk={RENK.yesil} y={380} bitis={fade} />
      <Kart t={t} bas={tE} ust="POTASSIUM EFFECT LARGER" alt="WHEN SODIUM WAS HIGH" renk={RENK.altin} y={560} bitis={fade} />
      <Baslik t={t} bas={tC} metin="CHECK THE" x={1000} y={200} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tC + 0.18} metin="LABEL" x={1000} y={320} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tC + 0.5} metin="sodium in soups, breads, deli meats" x={1000} y={405} boyut={36} />
      <div style={{ position: "absolute", left: 1000, top: 520, display: "flex", gap: 18 }}>
        {[["soups", "SOUPS"], ["breads", "BREADS"], ["deli meats", "DELI MEATS"]].map(([f, m]) => {
          const [sc, al] = pop(t, K(3, f), 0.5);
          return <div key={m} style={{ transform: `scale(${sc})`, opacity: al }}><Hap metin={m} renk={RENK.mercan} boyut={34} /></div>;
        })}
      </div>
    </>
  );
};

export default S52;
