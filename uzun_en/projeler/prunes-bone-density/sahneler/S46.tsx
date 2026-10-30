// Sahne 46 — kan şekeri: çalışma bulunamadı, bilinen şey bileşim.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hp: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex",
      alignItems: "center", gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "12px 28px 12px 20px",
      fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 18, height: 18, borderRadius: "50%", background: renk }} />
      {metin}
    </div>
  );
};

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOz = K(1, "composition");
  const [vurgu] = s.meta.baslik!.satirlar.slice(1);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 50, 1760])}>
        <Etiket t={t} bas={K(0, "blood sugar")} bitis={tOz} capa={[440, 560]} konum={[740, 250]} metin="GLUCOSE METER" renk={RENK.lacivert} />
        <Etiket t={t} bas={K(0, "prune trial")} bitis={tOz} capa={[900, 640]} konum={[1100, 500]} metin="PRUNES" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "glucose")} capa={[440, 560]} konum={[740, 250]} metin="GLUCOSE · A1C" renk={RENK.lacivert} />
      </Kamera>
      <Hp t={t} bas={K(0, "diabetes.")} metin="NO PRUNE TRIAL FOUND" renk={RENK.mercan} x={1240} y={170} />
      <BaslikBlok t={t} bas={tOz} satirlar={["SUGAR"]} x={1240} y={300} boyut={120} renkler={[RENK.koyuYesil]} />
      <VurguRozet t={t} bas={K(1, "38")} vurgu={vurgu.split(" / ")[0]} not="of sugars per 100 grams" x={1500} y={400} genislik={400} boyut={110} />
      <Hp t={t} bas={K(2, "ask")} metin="ASK ABOUT YOUR PLAN" renk={RENK.altin} x={1240} y={700} />
    </>
  );
};

export default S46;
