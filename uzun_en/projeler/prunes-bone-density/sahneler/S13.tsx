// Sahne 13 — rastgele atama güçlü tasarımdır; deney tam bir yıl sürdü.
import React from "react";
import { ANTON, Baslik, IkonYol, INTER, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ok: boolean; bitis?: number }> = ({ t, bas, x, y, metin, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 28px 8px 10px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ok ? "onay" : "carpi"} boyut={26} renk="#fff" kalinlik={7} />
      </span>
      {metin}
    </div>
  );
};

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRnd = K(0, "Random assignment"), tSans = K(0, "chance decides"), tGuclu = K(1, "stronger design"), tSor = K(1, "simply asking");
  const tYil = K(2, "full year");
  const sol_ = 3.0;
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        {/* bulanık takvim (sahte yazılar) kâğıt rengiyle örtülür; tekrar çizilen takvim aşağıda */}
        <div style={{ position: "absolute", left: 860, top: 20, width: 1000, height: 520,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 78%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <Baslik t={t} bas={tRnd} bitis={sol_} metin="RANDOM" x={120} y={125} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tRnd + 0.18} bitis={sol_} metin="ASSIGNMENT" x={120} y={225} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={tSans} bitis={sol_} metin="chance decides who gets what" x={124} y={310} boyut={34} />
      {/* 2. cümle: iki tasarım karşılaştırması */}
      <Hap t={t} bas={tGuclu} x={120} y={90} metin="RANDOM ASSIGNMENT" renk={RENK.yesil} ok />
      <Not t={t} bas={tGuclu + 0.2} metin="MUCH STRONGER DESIGN" x={124} y={150} boyut={26} agirlik={800} renk={RENK.koyuYesil} />
      <Hap t={t} bas={tSor} x={120} y={230} metin="ASKING WHAT THEY EAT" renk={RENK.mercan} ok={false} />
      {/* 3. cümle: 12 aylık ızgara */}
      <Baslik t={t} bas={tYil} metin="ONE FULL YEAR" x={1300} y={130} boyut={74} renk={RENK.lacivert} hiza="orta" />
      {Array.from({ length: 12 }, (_, i) => {
        const [sc, al] = pop(t, tYil - 0.4 + i * 0.07, 0.4);
        return (
          <div key={i} style={{ position: "absolute", left: 1000 + (i % 6) * 130, top: 230 + Math.floor(i / 6) * 130, width: 110, height: 110,
            transform: `scale(${sc})`, opacity: al, background: RENK.kagitAcik, border: `3px solid ${RENK.lacivert}`, borderRadius: 12,
            display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 52, color: RENK.lacivert,
            boxShadow: "0 6px 14px rgba(48,40,34,0.14)" }}>{i + 1}</div>
        );
      })}
    </>
  );
};

export default S13;
