// Sahne 21 — Haftalarca her gün: takvim çizimi örtülür, haftalık takip kartı; 11 çalışma / 278 kişi; HbA1c −0.4.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDay = K(0, "every"), tWeeks = K(0, "weeks?");
  const t18 = K(1, "2018"), t11 = K(1, "11"), t278 = K(1, "278"), tDia = K(1, "diabetes.");
  const tPool = K(2, "pooling"), t147 = K(2, "147"), tHb = K(2, "hba1c,"), t3m = K(2, "three-month"), t04 = K(2, "0.4"), t8 = K(2, "8");
  const tS2 = s.cumleler[2].bas - 0.1;
  const tS1 = s.cumleler[1].bas - 0.1;
  const aKart = eout(ilerle(t, 0, 0.35));
  const dolu = Math.min(12, Math.floor(Math.max(0, t - tDay) * 4));
  const pill = (bas: number, bitis: number, metin: string, y: number, renk: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    const a = al * sol(t, bitis);
    if (a <= 0) return null;
    return <div style={{ position: "absolute", left: 1380, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={34} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 100, 1740])}>
        {/* alt yazı kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 800, top: 925, width: 160, height: 66,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, #F2D8A6 0%, #F2D8A6 60%, rgba(242,216,166,0) 100%)` }} />
        <Etiket t={t} bas={tDay} bitis={tS1} capa={[720, 820]} konum={[1000, 640]} metin="DAILY DRINK" renk={RENK.yesil} />
        {/* bozuk takvim yazısı: haftalık takip kartıyla kapatılır */}
        <div style={{ position: "absolute", left: 110, top: 350, width: 470, height: 400, opacity: aKart, background: RENK.kagitAcik,
          border: `4px solid ${RENK.lacivert}`, borderRadius: 18, boxShadow: "0 14px 30px rgba(48,40,34,0.28)" }}>
          <div style={{ margin: "22px 0 0 30px", fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 3, color: RENK.altin }}>EVERY DAY</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, margin: "22px 30px 0" }}>
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} style={{ height: 78, borderRadius: 12, border: `3px solid ${RENK.lacivert}`, display: "flex", alignItems: "center", justifyContent: "center",
                background: i < dolu ? RENK.yesil : "transparent", fontFamily: INTER, fontWeight: 800, fontSize: 28, color: i < dolu ? "#fff" : RENK.gri }}>{i + 1}</div>
            ))}
          </div>
          <div style={{ margin: "16px 0 0 30px", fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 2, color: RENK.lacivert }}>WEEKS</div>
        </div>
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={t18} />
      <Baslik t={t} bas={tWeeks} bitis={tS1} metin="DAILY, FOR WEEKS" x={1860} y={190} boyut={100} hiza="sag" renk={RENK.lacivert} />
      {pill(t11, tS2, "11 STUDIES", 330, RENK.altin)}
      {pill(t278, tS2, "278 PEOPLE", 420, RENK.lacivert)}
      {pill(tDia, tS2, "WITH DIABETES", 510, RENK.mercan)}
      <Baslik t={t} bas={tPool} metin="8–12 WEEKS" x={1860} y={190} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Not t={t} bas={t147} metin="3 trials · 147 people" x={1860} y={270} hiza="sag" boyut={34} agirlik={800} />
      <Not t={t} bas={t3m} metin="HbA1c: a three-month blood sugar marker" x={1860} y={330} hiza="sag" boyut={30} renk={RENK.gri} agirlik={700} genislik={640} />
      <VurguRozet t={t} bas={t04} vurgu={s.meta.baslik!.vurgu ?? ""} not="HbA1c points" x={1500} y={430} genislik={420} renk={RENK.koyuYesil} />
    </>
  );
};

export default S21;
