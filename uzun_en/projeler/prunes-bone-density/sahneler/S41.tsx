// Sahne 41 — sorbitol: yarım erik, sağda adım adım mekanizma.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Mekanizma adımı (hap + okla bağlı)
const Adim: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number; ok?: boolean }> = ({ t, bas, metin, renk, y, ok = true }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1270, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
        padding: "12px 28px 12px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
        boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
        <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />
        {metin}
      </div>
      {ok && <div style={{ position: "absolute", left: 26, top: 66, transform: "rotate(90deg)" }}><IkonYol ad="ok" boyut={40} renk={RENK.gri} kalinlik={5} /></div>}
    </div>
  );
};

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS = K(2, "sorbitol,");
  const pP = einout(ilerle(t, tS - 0.3, 0.9));
  const eB = K(1, "Fiber") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 60, 1680])}>
        <Etiket t={t} bas={K(0, "prunes")} bitis={eB} capa={[470, 330]} konum={[330, 150]} metin="PRUNE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "Fiber")} bitis={tS - 0.2} capa={[600, 560]} konum={[330, 150]} metin="FIBER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pP} genislik={720} />
      <BaslikBlok t={t} bas={tS} satirlar={["SORBITOL"]} x={1270} y={230} boyut={120} renkler={[RENK.koyuYesil]} />
      <Not t={t} bas={tS + 0.3} metin={s.meta.baslik?.not ?? ""} x={1270} y={320} boyut={30} genislik={560} />
      <Adim t={t} bas={K(2, "absorbed slowly")} metin="ABSORBED SLOWLY" renk={RENK.altin} y={480} />
      <Adim t={t} bas={K(2, "fermented by gut")} metin="FERMENTED BY GUT BACTERIA" renk={RENK.yesil} y={620} />
      <Adim t={t} bas={K(2, "cause gas")} metin="CAN CAUSE GAS" renk={RENK.mercan} y={760} ok={false} />
    </>
  );
};

export default S41;
